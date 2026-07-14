import fs from 'fs';
import path from 'path';
import { getMaxDexNumber } from '@/lib/scripts/pokeapi/dex-ranges';
import { CURRENT_GAME_VERSION } from '@/lib/scripts/pokeapi/game-versions';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import {
    Abilities,
    AbilitiesByGeneration,
    PokemonData,
} from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const DATA_PATH = path.join('src', 'lib', 'data', 'pokemon.json');
const FETCH_DELAY_MS = 75;
const MAX_DEX_NUMBER = getMaxDexNumber(CURRENT_GAME_VERSION.generation);

// PokeAPI ability slots: 1 and 2 are the standard slots, 3 is the hidden
// ability slot.
const SLOT_NUMBERS = { slot1: 1, slot2: 2, hidden: 3 } as const;

const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const readData = (): Record<string, PokemonData> => {
    if (!fs.existsSync(DATA_PATH)) return {};
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
};

const writeData = (data: Record<string, PokemonData>): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

interface Variety {
    name: string;
    url: string;
}

const fetchVarieties = async (dexNumber: number): Promise<Variety[]> => {
    const response = await fetch(`${POKEAPI_SPECIES_URL}/${dexNumber}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch species #${dexNumber} from PokeAPI.`);
    }

    const body = await response.json();
    return (body.varieties as { pokemon: { name: string; url: string } }[]).map(
        (variety) => ({
            name: variety.pokemon.name,
            url: variety.pokemon.url,
        })
    );
};

interface RawAbilitySlot {
    ability: { name: string } | null;
    is_hidden: boolean;
    slot: number;
}

interface RawPastAbility {
    generation: { name: string };
    abilities: RawAbilitySlot[];
}

interface RawPokemon {
    name: string;
    abilities: RawAbilitySlot[];
    past_abilities: RawPastAbility[];
}

const fetchRawPokemon = async (variety: Variety): Promise<RawPokemon> => {
    const response = await fetch(variety.url);
    if (!response.ok) {
        throw new Error(`Failed to fetch "${variety.name}" from PokeAPI.`);
    }

    return (await response.json()) as RawPokemon;
};

const toGenerationNumber = (generationName: string): number =>
    StringHelpers.fromRoman(generationName.replace('generation-', ''));

interface SlotSegment {
    fromGeneration: number;
    value?: string;
}

// Builds the ascending "applies from generation N onward" timeline for a
// single ability slot, mirroring how `past_types` is interpreted in
// types.ts. A missing `ability` on a past entry means that slot didn't exist
// for that Pokemon yet (e.g. hidden abilities before generation V).
const buildSlotTimeline = (
    pokemon: RawPokemon,
    slotNumber: number
): SlotSegment[] => {
    const pastEntries: { generation: number; value?: string }[] = [];
    for (const pastAbility of pokemon.past_abilities) {
        const slot = pastAbility.abilities.find(
            (candidate) => candidate.slot === slotNumber
        );
        if (!slot) continue;

        pastEntries.push({
            generation: toGenerationNumber(pastAbility.generation.name),
            value: slot.ability?.name,
        });
    }
    pastEntries.sort((a, b) => a.generation - b.generation);

    const currentValue = pokemon.abilities.find(
        (candidate) => candidate.slot === slotNumber
    )?.ability?.name;

    const segments: SlotSegment[] = pastEntries.map((entry, index) => ({
        fromGeneration: index === 0 ? 1 : pastEntries[index - 1].generation + 1,
        value: entry.value,
    }));

    const lastEntry = pastEntries[pastEntries.length - 1];
    segments.push({
        fromGeneration: lastEntry ? lastEntry.generation + 1 : 1,
        value: currentValue,
    });

    return segments;
};

const valueAt = (
    segments: SlotSegment[],
    generation: number
): string | undefined => {
    let value: string | undefined;
    for (const segment of segments) {
        if (segment.fromGeneration > generation) break;
        value = segment.value;
    }
    return value;
};

// Slots can each change independently across generations, so the three
// per-slot timelines are merged on the union of their boundaries to produce
// a single combined ability set per generation range.
const buildAbilitiesByGeneration = (
    pokemon: RawPokemon
): AbilitiesByGeneration[] => {
    const slot1 = buildSlotTimeline(pokemon, SLOT_NUMBERS.slot1);
    const slot2 = buildSlotTimeline(pokemon, SLOT_NUMBERS.slot2);
    const hidden = buildSlotTimeline(pokemon, SLOT_NUMBERS.hidden);

    const boundaries = [
        ...new Set(
            [...slot1, ...slot2, ...hidden].map(
                (segment) => segment.fromGeneration
            )
        ),
    ].sort((a, b) => a - b);

    return boundaries.map((fromGeneration) => {
        const abilities: Abilities = {
            slot1: valueAt(slot1, fromGeneration) as string,
        };

        const slot2Value = valueAt(slot2, fromGeneration);
        if (slot2Value) abilities.slot2 = slot2Value;

        const hiddenValue = valueAt(hidden, fromGeneration);
        if (hiddenValue) abilities.hidden = hiddenValue;

        return { fromGeneration, abilities };
    });
};

export const fetchAbilities = async (): Promise<void> => {
    const data = readData();

    for (let dexNumber = 1; dexNumber <= MAX_DEX_NUMBER; dexNumber += 1) {
        const varieties = await fetchVarieties(dexNumber);

        for (const variety of varieties) {
            // Varieties include forms irrelevant to this dex (Mega, Gigantamax,
            // regional forms from later generations, etc.). Only enrich entries
            // that pokeapi:sprites already curated as relevant to this game.
            const pokemon = data[variety.name];
            if (!pokemon) continue;

            const rawPokemon = await fetchRawPokemon(variety);
            await sleep(FETCH_DELAY_MS);

            pokemon.abilities = buildAbilitiesByGeneration(rawPokemon);
            logSuccess(`Fetched abilities for "${pokemon.name}".`);
        }
    }

    writeData(data);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        await fetchAbilities();
    } catch (error) {
        handleException(error);
    }
};

main();
