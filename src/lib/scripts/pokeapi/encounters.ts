import fs from 'fs';
import path from 'path';
import { GAME_VERSIONS } from '@/lib/scripts/pokeapi/game-versions';
import {
    handleException,
    logSuccess,
    logWarning,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { Encounter, LocationEncounters } from '@/lib/static/types';

const POKEAPI_REGION_URL = 'https://pokeapi.co/api/v2/region';
const DATA_PATH = path.join(
    'src',
    'lib',
    'scripts',
    'pokeapi',
    'output',
    'encounters.json'
);
const FETCH_DELAY_MS = 75;

interface MethodOverride {
    location: string;
    species: string;
    method: string;
}

interface GameVersion {
    id: string;
    label: string;
    version: string;
    region: string;
    generation: number;
    excludedLocations?: string[];
    excludedSpecies?: string[];
    caveLocations?: string[];
    methodOverrides?: MethodOverride[];
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

const EXCLUDED_METHODS = [
    'super-rod',
    'roaming-grass',
    'roaming-water',
    'pokemon-ranger',
];

const EXCLUDED_CONDITIONS = [
    'swarm-yes',
    'radar-on',
    'story-progress-national-dex',
];
const EXCLUDED_CONDITION_PREFIXES = ['slot2-'];
const STRIPPED_CONDITIONS = [
    'slot2-none',
    'radar-none',
    'swarm-no',
    'radar-off',
    'backlot-not-mentioned',
    'story-progress-defeat-jupiter',
    'story-progress-beat-team-galactic-iron-island',
    'item-skull-fossil',
    'item-armor-fossil',
];

const TIME_OF_DAY_CONDITIONS = ['time-morning', 'time-day', 'time-night'];

const isExcludedCondition = (condition: string): boolean =>
    !STRIPPED_CONDITIONS.includes(condition) &&
    (EXCLUDED_CONDITIONS.includes(condition) ||
        EXCLUDED_CONDITION_PREFIXES.some((prefix) =>
            condition.startsWith(prefix)
        ));

const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const toSubareaLabel = (locationName: string, areaName: string): string => {
    const prefix = `${locationName}-`;
    return areaName.startsWith(prefix)
        ? areaName.slice(prefix.length)
        : areaName;
};

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
    version: string,
    excludedSpecies: string[]
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
        if (excludedSpecies.includes(pokemonEncounter.pokemon.name)) continue;

        const versionDetail = pokemonEncounter.version_details.find(
            (detail) => detail.version.name === version
        );
        if (!versionDetail) continue;

        for (const detail of versionDetail.encounter_details) {
            if (EXCLUDED_METHODS.includes(detail.method.name)) continue;

            const conditionNames = detail.condition_values.map(
                (condition) => condition.name
            );
            if (conditionNames.some(isExcludedCondition)) continue;

            const conditions = conditionNames.filter(
                (condition) => !STRIPPED_CONDITIONS.includes(condition)
            );

            encounters.push({
                species: pokemonEncounter.pokemon.name,
                method: detail.method.name,
                minLevel: detail.min_level,
                maxLevel: detail.max_level,
                chance: detail.chance,
                ...(conditions.length > 0 ? { conditions } : {}),
            });
        }
    }

    return encounters;
};

const mergeEncounters = (encounters: Encounter[]): Encounter[] => {
    const merged = new Map<string, Encounter>();

    for (const encounter of encounters) {
        const conditionsKey = [...(encounter.conditions ?? [])]
            .sort()
            .join(',');
        const key = `${encounter.species}|${encounter.method}|${conditionsKey}`;
        const existing = merged.get(key);

        if (!existing) {
            merged.set(key, { ...encounter });
            continue;
        }

        existing.chance = (existing.chance ?? 0) + (encounter.chance ?? 0);
        existing.minLevel = Math.min(existing.minLevel, encounter.minLevel);
        existing.maxLevel = Math.max(existing.maxLevel, encounter.maxLevel);
    }

    return [...merged.values()];
};

const resolveWalkMethod = (
    encounters: Encounter[],
    locationName: string,
    caveLocations: string[]
): Encounter[] =>
    encounters.map((encounter) =>
        encounter.method === 'walk'
            ? {
                  ...encounter,
                  method: caveLocations.includes(locationName)
                      ? 'cave'
                      : 'grass',
              }
            : encounter
    );

const resolveMethodOverrides = (
    encounters: Encounter[],
    locationName: string,
    methodOverrides: MethodOverride[]
): Encounter[] =>
    encounters.map((encounter) => {
        const override = methodOverrides.find(
            (candidate) =>
                candidate.location === locationName &&
                candidate.species === encounter.species
        );
        return override ? { ...encounter, method: override.method } : encounter;
    });

const HONEY_TREE_METHOD = 'honey-tree';

const resolveHoneyTreeEncounters = (encounters: Encounter[]): Encounter[] =>
    encounters.map((encounter) =>
        encounter.method === HONEY_TREE_METHOD
            ? {
                  species: encounter.species,
                  method: encounter.method,
                  minLevel: encounter.minLevel,
                  maxLevel: encounter.maxLevel,
                  chance: encounter.chance,
              }
            : encounter
    );

const nullifyHoneyTreeChances = (encounters: Encounter[]): Encounter[] =>
    encounters.map((encounter) =>
        encounter.method === HONEY_TREE_METHOD
            ? { ...encounter, chance: null }
            : encounter
    );

const expandTimeOfDayEncounters = (encounters: Encounter[]): Encounter[] => {
    const hasTimeOfDay = encounters.some((encounter) =>
        encounter.conditions?.some((condition) =>
            TIME_OF_DAY_CONDITIONS.includes(condition)
        )
    );
    if (!hasTimeOfDay) return encounters;

    return encounters.flatMap((encounter) => {
        const hasOwnTimeOfDay = encounter.conditions?.some((condition) =>
            TIME_OF_DAY_CONDITIONS.includes(condition)
        );
        if (hasOwnTimeOfDay) return [encounter];

        return TIME_OF_DAY_CONDITIONS.map((time) => ({
            ...encounter,
            conditions: [...(encounter.conditions ?? []), time],
        }));
    });
};

export const fetchEncounters = async (version: GameVersion): Promise<void> => {
    const data = readData();
    const locations = (await fetchRegionLocations(version.region)).filter(
        (location) => !version.excludedLocations?.includes(location.name)
    );
    const locationsData: Record<string, LocationEncounters> = {};

    for (const location of locations) {
        const areas = await fetchLocationAreas(location.url);
        const isMultiArea = areas.length > 1;
        let hasEncounters = false;

        for (const area of areas) {
            const rawEncounters = await fetchAreaEncounters(
                area.url,
                version.version,
                version.excludedSpecies ?? []
            );
            await sleep(FETCH_DELAY_MS);

            const encounters = nullifyHoneyTreeChances(
                mergeEncounters(
                    resolveHoneyTreeEncounters(
                        expandTimeOfDayEncounters(
                            mergeEncounters(
                                resolveMethodOverrides(
                                    resolveWalkMethod(
                                        rawEncounters,
                                        location.name,
                                        version.caveLocations ?? []
                                    ),
                                    location.name,
                                    version.methodOverrides ?? []
                                )
                            )
                        )
                    )
                )
            );

            if (encounters.length === 0) continue;
            hasEncounters = true;

            const key = isMultiArea
                ? `${location.name}-${toSubareaLabel(location.name, area.name)}`
                : location.name;
            const name = isMultiArea
                ? `${toDisplayName(location.name)} (${toDisplayName(
                      toSubareaLabel(location.name, area.name)
                  )})`
                : toDisplayName(location.name);

            locationsData[key] = { name, encounters };
            logSuccess(
                `Fetched ${encounters.length} encounter(s) for "${name}" (${version.label}).`
            );
        }

        if (!hasEncounters) {
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

const GAME_ID = 'platinum';

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();

        const version = GAME_VERSIONS.find(
            (candidate) => candidate.id === GAME_ID
        );
        if (!version) {
            throw new Error(`"${GAME_ID}" is not a valid game.`);
        }

        await fetchEncounters(version);
    } catch (error) {
        handleException(error);
    }
};

main();
