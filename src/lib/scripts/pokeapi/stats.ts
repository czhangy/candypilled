import fs from 'fs';
import path from 'path';
import { getMaxDexNumber } from '@/lib/scripts/pokeapi/dex-ranges';
import { CURRENT_GAME_VERSION } from '@/lib/scripts/pokeapi/game-versions';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { PokemonData, StatsByGeneration, StatValues } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const DATA_PATH = path.join('src', 'lib', 'data', 'pokemon.json');
const FETCH_DELAY_MS = 75;
const MAX_DEX_NUMBER = getMaxDexNumber(CURRENT_GAME_VERSION.generation);

// PokeAPI stat names for each output key. Generation I didn't split the
// special stat into special-attack/special-defense, so `special` is the
// fallback source for both when a generation-I entry is being read.
const STAT_NAMES: Record<keyof StatValues, string[]> = {
    hp: ['hp'],
    atk: ['attack'],
    def: ['defense'],
    spa: ['special-attack', 'special'],
    spd: ['special-defense', 'special'],
    spe: ['speed'],
};

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

interface RawStat {
    base_stat: number;
    stat: { name: string };
}

interface RawPastStat {
    generation: { name: string };
    stats: RawStat[];
}

interface RawPokemon {
    name: string;
    stats: RawStat[];
    past_stats: RawPastStat[];
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

const findStat = (stats: RawStat[], names: string[]): number | undefined =>
    stats.find((candidate) => names.includes(candidate.stat.name))?.base_stat;

interface StatSegment {
    fromGeneration: number;
    value?: number;
}

// Builds the ascending "applies from generation N onward" timeline for a
// single stat key, mirroring how abilities.ts interprets `past_abilities`.
// PokeAPI's `past_stats` entries only list the stats that actually changed
// as of that generation, so a key missing from a past entry means that key
// was unchanged (not that it didn't exist).
const buildStatTimeline = (
    pokemon: RawPokemon,
    statKey: keyof StatValues
): StatSegment[] => {
    const names = STAT_NAMES[statKey];

    const pastEntries: { generation: number; value?: number }[] = [];
    for (const pastStat of pokemon.past_stats) {
        const value = findStat(pastStat.stats, names);
        if (value === undefined) continue;

        pastEntries.push({
            generation: toGenerationNumber(pastStat.generation.name),
            value,
        });
    }
    pastEntries.sort((a, b) => a.generation - b.generation);

    const currentValue = findStat(pokemon.stats, names);

    const segments: StatSegment[] = pastEntries.map((entry, index) => ({
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

const valueAt = (segments: StatSegment[], generation: number): number => {
    let value: number | undefined;
    for (const segment of segments) {
        if (segment.fromGeneration > generation) break;
        value = segment.value;
    }
    return value as number;
};

// Each stat can change independently across generations (see Beedrill's
// Gen VI attack buff or the Gen I special-stat split), so the six per-stat
// timelines are merged on the union of their boundaries to produce a single
// combined stat line per generation range.
const buildStatsByGeneration = (pokemon: RawPokemon): StatsByGeneration[] => {
    const statKeys = Object.keys(STAT_NAMES) as (keyof StatValues)[];
    const timelines = Object.fromEntries(
        statKeys.map((statKey) => [
            statKey,
            buildStatTimeline(pokemon, statKey),
        ])
    ) as Record<keyof StatValues, StatSegment[]>;

    const boundaries = [
        ...new Set(
            statKeys.flatMap((statKey) =>
                timelines[statKey].map((segment) => segment.fromGeneration)
            )
        ),
    ].sort((a, b) => a - b);

    return boundaries.map((fromGeneration) => {
        const stats = Object.fromEntries(
            statKeys.map((statKey) => [
                statKey,
                valueAt(timelines[statKey], fromGeneration),
            ])
        ) as StatValues;

        return { fromGeneration, stats };
    });
};

export const fetchStats = async (): Promise<void> => {
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

            pokemon.stats = buildStatsByGeneration(rawPokemon);
            logSuccess(`Fetched stats for "${pokemon.name}".`);
        }
    }

    writeData(data);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        await fetchStats();
    } catch (error) {
        handleException(error);
    }
};

main();
