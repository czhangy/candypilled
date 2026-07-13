import fs from 'fs';
import path from 'path';
import {
    handleException,
    logSuccess,
    logWarning,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { Encounter } from '@/lib/static/types';

const POKEAPI_REGION_URL = 'https://pokeapi.co/api/v2/region';
const DATA_PATH = path.join('src', 'lib', 'pokemon', 'encounters.json');
const FETCH_DELAY_MS = 75;

interface GameVersion {
    id: string;
    label: string;
    version: string;
    region: string;
    generation: number;
}

interface LocationEncounters {
    name: string;
    encounters: Encounter[];
}

interface NamedApiResource {
    name: string;
    url: string;
}

interface RawEncounterDetail {
    chance: number;
    condition_values: { name: string }[];
    max_level: number;
    min_level: number;
    method: { name: string };
}

interface RawVersionDetail {
    version: { name: string };
    encounter_details: RawEncounterDetail[];
}

interface RawPokemonEncounter {
    pokemon: { name: string };
    version_details: RawVersionDetail[];
}

const GAME_VERSIONS: GameVersion[] = [
    {
        id: 'platinum',
        label: 'Platinum',
        version: 'platinum',
        region: 'sinnoh',
        generation: 4,
    },
];

const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const toDisplayName = (slug: string): string =>
    slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

const readData = (): Record<string, Record<string, LocationEncounters>> => {
    if (!fs.existsSync(DATA_PATH)) return {};
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
};

const writeData = (
    data: Record<string, Record<string, LocationEncounters>>
): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

const fetchRegionLocations = async (
    region: string
): Promise<NamedApiResource[]> => {
    const response = await fetch(`${POKEAPI_REGION_URL}/${region}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch region "${region}" from PokeAPI.`);
    }

    const body = await response.json();
    return body.locations as NamedApiResource[];
};

const fetchLocationAreas = async (
    locationUrl: string
): Promise<NamedApiResource[]> => {
    const response = await fetch(locationUrl);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch location from PokeAPI (${locationUrl}).`
        );
    }

    const body = await response.json();
    return body.areas as NamedApiResource[];
};

const fetchAreaEncounters = async (
    areaUrl: string,
    version: string
): Promise<Encounter[]> => {
    const response = await fetch(areaUrl);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch location area from PokeAPI (${areaUrl}).`
        );
    }

    const body = await response.json();
    const encounters: Encounter[] = [];

    for (const pokemonEncounter of body.pokemon_encounters as RawPokemonEncounter[]) {
        const versionDetail = pokemonEncounter.version_details.find(
            (detail) => detail.version.name === version
        );
        if (!versionDetail) continue;

        for (const detail of versionDetail.encounter_details) {
            encounters.push({
                species: pokemonEncounter.pokemon.name,
                method: detail.method.name,
                minLevel: detail.min_level,
                maxLevel: detail.max_level,
                chance: detail.chance,
                ...(detail.condition_values.length > 0
                    ? {
                          conditions: detail.condition_values.map(
                              (condition) => condition.name
                          ),
                      }
                    : {}),
            });
        }
    }

    return encounters;
};

export const fetchEncounters = async (version: GameVersion): Promise<void> => {
    const data = readData();
    const locations = await fetchRegionLocations(version.region);
    const locationsData: Record<string, LocationEncounters> = {};

    for (const location of locations) {
        const areas = await fetchLocationAreas(location.url);
        const encounters: Encounter[] = [];

        for (const area of areas) {
            encounters.push(
                ...(await fetchAreaEncounters(area.url, version.version))
            );
            await sleep(FETCH_DELAY_MS);
        }

        if (encounters.length > 0) {
            locationsData[location.name] = {
                name: toDisplayName(location.name),
                encounters,
            };
            logSuccess(
                `Fetched ${encounters.length} encounter(s) for "${toDisplayName(
                    location.name
                )}" (${version.label}).`
            );
        } else {
            logWarning(
                `No encounters for "${toDisplayName(location.name)}" (${
                    version.label
                }).`
            );
        }
    }

    data[version.id] = locationsData;
    writeData(data);
};

interface Args {
    gameId: string;
}

const parseArgs = (): Args => {
    const args = new Map(
        process.argv.slice(2).map((arg) => {
            const [key, value] = arg.replace(/^--/, '').split('=');
            return [key, value];
        })
    );

    const gameArg = args.get('game');

    if (!gameArg) {
        throw new Error('Usage: npm run pokeapi:encounters -- --game=emerald');
    }

    if (gameArg.includes(',')) {
        throw new Error('Only one --game may be specified per run.');
    }

    return { gameId: gameArg };
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();

        const { gameId } = parseArgs();

        const version = GAME_VERSIONS.find(
            (candidate) => candidate.id === gameId
        );
        if (!version) {
            throw new Error(
                `"${gameId}" is not a valid game. Valid options: ${GAME_VERSIONS.map(
                    (candidate) => candidate.id
                ).join(', ')}`
            );
        }

        await fetchEncounters(version);
    } catch (error) {
        handleException(error);
    }
};

main();
