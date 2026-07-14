import fs from 'fs';
import path from 'path';
import { getMaxDexNumber } from '@/lib/scripts/pokeapi/dex-ranges';
import { CURRENT_GAME_VERSION } from '@/lib/scripts/pokeapi/game-versions';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { PokemonData } from '@/lib/static/types';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const DATA_PATH = path.join('src', 'lib', 'data', 'pokemon.json');
const FETCH_DELAY_MS = 75;
const MAX_DEX_NUMBER = getMaxDexNumber(CURRENT_GAME_VERSION.generation);

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

interface RawSpecies {
    capture_rate: number;
    varieties: { pokemon: { name: string; url: string } }[];
}

const fetchSpecies = async (dexNumber: number): Promise<RawSpecies> => {
    const response = await fetch(`${POKEAPI_SPECIES_URL}/${dexNumber}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch species #${dexNumber} from PokeAPI.`);
    }

    return (await response.json()) as RawSpecies;
};

const toVarieties = (species: RawSpecies): Variety[] =>
    species.varieties.map((variety) => ({
        name: variety.pokemon.name,
        url: variety.pokemon.url,
    }));

export const fetchCatchRates = async (): Promise<void> => {
    const data = readData();

    for (let dexNumber = 1; dexNumber <= MAX_DEX_NUMBER; dexNumber += 1) {
        const species = await fetchSpecies(dexNumber);
        await sleep(FETCH_DELAY_MS);

        // Catch rate is a species-level property shared by every variety/form
        // of that species, unlike types and abilities which can differ per
        // form. Only enrich entries that pokeapi:sprites already curated as
        // relevant to this game.
        for (const variety of toVarieties(species)) {
            const pokemon = data[variety.name];
            if (!pokemon) continue;

            pokemon.catchRate = species.capture_rate;
            logSuccess(`Fetched catch rate for "${pokemon.name}".`);
        }
    }

    writeData(data);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        await fetchCatchRates();
    } catch (error) {
        handleException(error);
    }
};

main();
