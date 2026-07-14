import fs from 'fs';
import path from 'path';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { PokemonData, TypesByGeneration } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const DATA_PATH = path.join(
    'src',
    'lib',
    'scripts',
    'pokeapi',
    'output',
    'pokemon.json'
);
const FETCH_DELAY_MS = 75;
const MAX_DEX_NUMBER = 493;

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

interface RawTypeSlot {
    slot: number;
    type: { name: string };
}

interface RawPastType {
    generation: { name: string };
    types: RawTypeSlot[];
}

interface RawPokemon {
    name: string;
    types: RawTypeSlot[];
    past_types: RawPastType[];
}

const fetchRawPokemon = async (variety: Variety): Promise<RawPokemon> => {
    const response = await fetch(variety.url);
    if (!response.ok) {
        throw new Error(`Failed to fetch "${variety.name}" from PokeAPI.`);
    }

    return (await response.json()) as RawPokemon;
};

const toTypeNames = (slots: RawTypeSlot[]): string[] =>
    [...slots].sort((a, b) => a.slot - b.slot).map((slot) => slot.type.name);

const toGenerationNumber = (generationName: string): number =>
    StringHelpers.fromRoman(generationName.replace('generation-', ''));

// PokeAPI's `past_types` entries describe the types that applied up to and
// including the listed generation. This converts that into ascending
// "applies from generation N onward" segments, ending with the current types.
const buildTypesByGeneration = (pokemon: RawPokemon): TypesByGeneration[] => {
    const pastTypes = [...pokemon.past_types].sort(
        (a, b) =>
            toGenerationNumber(a.generation.name) -
            toGenerationNumber(b.generation.name)
    );

    const segments: TypesByGeneration[] = pastTypes.map((pastType, index) => ({
        fromGeneration:
            index === 0
                ? 1
                : toGenerationNumber(pastTypes[index - 1].generation.name) + 1,
        types: toTypeNames(pastType.types),
    }));

    const lastPastType = pastTypes[pastTypes.length - 1];
    segments.push({
        fromGeneration: lastPastType
            ? toGenerationNumber(lastPastType.generation.name) + 1
            : 1,
        types: toTypeNames(pokemon.types),
    });

    return segments;
};

export const fetchTypes = async (): Promise<void> => {
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

            pokemon.types = buildTypesByGeneration(rawPokemon);
            logSuccess(`Fetched types for "${pokemon.name}".`);
        }
    }

    writeData(data);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        await fetchTypes();
    } catch (error) {
        handleException(error);
    }
};

main();
