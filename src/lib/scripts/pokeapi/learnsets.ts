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
    LearnsetByGeneration,
    LearnsetMethod,
    LearnsetMove,
    PokemonData,
} from '@/lib/static/types';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const POKEAPI_GENERATION_URL = 'https://pokeapi.co/api/v2/generation';
const DATA_PATH = path.join('src', 'lib', 'data', 'pokemon.json');
const FETCH_DELAY_MS = 75;
const MAX_DEX_NUMBER = getMaxDexNumber(CURRENT_GAME_VERSION.generation);

// Learn methods tracked on the site. Egg moves are deliberately excluded:
// they're a breeding mechanic rather than something learnable in the run
// this site tracks. PokeAPI also reports a handful of oddities (e.g.
// "stadium-surfing-pikachu", "light-ball-egg", "form-change") that are
// quirks of specific spin-off events rather than real learnsets.
const KNOWN_METHODS = new Set<LearnsetMethod>(['level-up', 'machine', 'tutor']);

const METHOD_ORDER: Record<LearnsetMethod, number> = {
    'level-up': 0,
    machine: 1,
    tutor: 2,
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

interface RawGeneration {
    version_groups: { name: string }[];
}

const fetchGenerationCount = async (): Promise<number> => {
    const response = await fetch(`${POKEAPI_GENERATION_URL}?limit=1`);
    if (!response.ok) {
        throw new Error('Failed to fetch generation count from PokeAPI.');
    }

    const body = await response.json();
    return body.count as number;
};

const fetchGeneration = async (
    generationNumber: number
): Promise<RawGeneration> => {
    const response = await fetch(
        `${POKEAPI_GENERATION_URL}/${generationNumber}`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch generation #${generationNumber} from PokeAPI.`
        );
    }

    return (await response.json()) as RawGeneration;
};

// Learnsets are reported per version group rather than per generation, and
// unlike types/abilities/stats there's no "past values" diff to lean on:
// each version group's move list is independent. To collapse this down to
// one snapshot per generation, each generation is represented by its last
// (most up to date) version group, e.g. "platinum" over "diamond-pearl".
const buildRepresentativeVersionGroups = async (): Promise<
    Map<number, string>
> => {
    const generationCount = await fetchGenerationCount();
    const representativeVersionGroups = new Map<number, string>();

    for (
        let generationNumber = 1;
        generationNumber <= generationCount;
        generationNumber += 1
    ) {
        const generation = await fetchGeneration(generationNumber);
        await sleep(FETCH_DELAY_MS);

        const lastVersionGroup =
            generation.version_groups[generation.version_groups.length - 1];
        if (!lastVersionGroup) continue;

        representativeVersionGroups.set(
            generationNumber,
            lastVersionGroup.name
        );
    }

    return representativeVersionGroups;
};

interface RawVersionGroupDetail {
    level_learned_at: number;
    move_learn_method: { name: string };
    version_group: { name: string };
}

interface RawMoveEntry {
    move: { name: string };
    version_group_details: RawVersionGroupDetail[];
}

interface RawPokemon {
    name: string;
    moves: RawMoveEntry[];
}

const fetchRawPokemon = async (variety: Variety): Promise<RawPokemon> => {
    const response = await fetch(variety.url);
    if (!response.ok) {
        throw new Error(`Failed to fetch "${variety.name}" from PokeAPI.`);
    }

    return (await response.json()) as RawPokemon;
};

const sortMoves = (moves: LearnsetMove[]): LearnsetMove[] =>
    [...moves].sort((a, b) => {
        const methodDiff = METHOD_ORDER[a.method] - METHOD_ORDER[b.method];
        if (methodDiff !== 0) return methodDiff;

        if (a.method === 'level-up') return (a.level ?? 0) - (b.level ?? 0);
        return a.name.localeCompare(b.name);
    });

// A generation with no moves for this version group means the Pokemon
// didn't exist yet (e.g. a generation before it was introduced), so it's
// left out of the timeline entirely rather than recorded as an empty entry.
const buildLearnsetByGeneration = (
    pokemon: RawPokemon,
    representativeVersionGroups: Map<number, string>
): LearnsetByGeneration[] => {
    const entries: LearnsetByGeneration[] = [];

    const sortedGenerations = [...representativeVersionGroups.entries()].sort(
        ([a], [b]) => a - b
    );

    for (const [fromGeneration, versionGroup] of sortedGenerations) {
        const moves: LearnsetMove[] = [];

        for (const moveEntry of pokemon.moves) {
            for (const detail of moveEntry.version_group_details) {
                if (detail.version_group.name !== versionGroup) continue;

                const method = detail.move_learn_method.name as LearnsetMethod;
                if (!KNOWN_METHODS.has(method)) continue;

                const move: LearnsetMove = {
                    name: moveEntry.move.name,
                    method,
                };
                if (method === 'level-up') {
                    move.level = detail.level_learned_at;
                }

                moves.push(move);
            }
        }

        if (moves.length === 0) continue;

        entries.push({ fromGeneration, moves: sortMoves(moves) });
    }

    return entries;
};

export const fetchLearnsets = async (): Promise<void> => {
    const data = readData();
    const representativeVersionGroups =
        await buildRepresentativeVersionGroups();

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

            pokemon.learnset = buildLearnsetByGeneration(
                rawPokemon,
                representativeVersionGroups
            );
            logSuccess(`Fetched learnset for "${pokemon.name}".`);
        }
    }

    writeData(data);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        await fetchLearnsets();
    } catch (error) {
        handleException(error);
    }
};

main();
