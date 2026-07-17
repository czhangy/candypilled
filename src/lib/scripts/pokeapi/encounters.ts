import fs from 'fs';
import path from 'path';
import { CURRENT_GAME_VERSION } from '@/lib/scripts/pokeapi/game-versions';
import { sleep } from '@/lib/scripts/pokeapi/shared';
import { logSuccess, logWarning, runScript } from '@/lib/scripts/utils/helpers';
import { Encounter, LocationEncounters } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_REGION_URL = 'https://pokeapi.co/api/v2/region';
const DATA_PATH = path.join(
    'src',
    'lib',
    'data',
    CURRENT_GAME_VERSION.id,
    `${CURRENT_GAME_VERSION.id}_encounters.json`
);
const FETCH_DELAY_MS = 75;

type MethodOverride = {
    location: string;
    species: string;
    method: string;
};

type GameVersion = {
    id: string;
    label: string;
    version: string;
    region: string;
    generation: number;
    excludedLocations?: string[];
    excludedSpecies?: string[];
    caveLocations?: string[];
    methodOverrides?: MethodOverride[];
    excludedMethods?: string[];
    excludedConditions?: string[];
    excludedConditionPrefixes?: string[];
    strippedConditions?: string[];
    strippedConditionPrefixes?: string[];
};

type NamedApiResource = {
    name: string;
    url: string;
};

type RawEncounterDetail = {
    chance: number;
    condition_values: { name: string }[];
    max_level: number;
    min_level: number;
    method: { name: string };
};

type RawVersionDetail = {
    version: { name: string };
    encounter_details: RawEncounterDetail[];
};

type RawPokemonEncounter = {
    pokemon: { name: string };
    version_details: RawVersionDetail[];
};

const TIME_OF_DAY_CONDITIONS = ['time-morning', 'time-day', 'time-night'];

type ConditionConfig = {
    excludedConditions: string[];
    excludedConditionPrefixes: string[];
    strippedConditions: string[];
    strippedConditionPrefixes: string[];
};

const isStrippedCondition = (
    condition: string,
    config: ConditionConfig
): boolean =>
    config.strippedConditions.includes(condition) ||
    config.strippedConditionPrefixes.some((prefix) =>
        condition.startsWith(prefix)
    );

const isExcludedCondition = (
    condition: string,
    config: ConditionConfig
): boolean =>
    !isStrippedCondition(condition, config) &&
    (config.excludedConditions.includes(condition) ||
        config.excludedConditionPrefixes.some((prefix) =>
            condition.startsWith(prefix)
        ));

const toSubareaLabel = (locationName: string, areaName: string): string => {
    const prefix = `${locationName}-`;
    return areaName.startsWith(prefix)
        ? areaName.slice(prefix.length)
        : areaName;
};

const writeData = (data: Record<string, LocationEncounters>): void => {
    fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
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
    version: GameVersion
): Promise<Encounter[]> => {
    const response = await fetch(areaUrl);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch location area from PokeAPI (${areaUrl}).`
        );
    }

    const excludedSpecies = version.excludedSpecies ?? [];
    const excludedMethods = version.excludedMethods ?? [];
    const conditionConfig: ConditionConfig = {
        excludedConditions: version.excludedConditions ?? [],
        excludedConditionPrefixes: version.excludedConditionPrefixes ?? [],
        strippedConditions: version.strippedConditions ?? [],
        strippedConditionPrefixes: version.strippedConditionPrefixes ?? [],
    };

    const body = await response.json();
    const encounters: Encounter[] = [];

    for (const pokemonEncounter of body.pokemon_encounters as RawPokemonEncounter[]) {
        if (excludedSpecies.includes(pokemonEncounter.pokemon.name)) continue;

        const versionDetail = pokemonEncounter.version_details.find(
            (detail) => detail.version.name === version.version
        );
        if (!versionDetail) continue;

        for (const detail of versionDetail.encounter_details) {
            if (excludedMethods.includes(detail.method.name)) continue;

            const conditionNames = detail.condition_values.map(
                (condition) => condition.name
            );
            if (
                conditionNames.some((condition) =>
                    isExcludedCondition(condition, conditionConfig)
                )
            )
                continue;

            const conditions = conditionNames.filter(
                (condition) => !isStrippedCondition(condition, conditionConfig)
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

const STARTER_METHOD = 'starter';
const NULLIFIED_CHANCE_METHODS = [HONEY_TREE_METHOD, STARTER_METHOD];

const nullifyChances = (encounters: Encounter[]): Encounter[] =>
    encounters.map((encounter) =>
        NULLIFIED_CHANCE_METHODS.includes(encounter.method)
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
    const locations = (await fetchRegionLocations(version.region)).filter(
        (location) => !version.excludedLocations?.includes(location.name)
    );
    const locationsData: Record<string, LocationEncounters> = {};

    for (const location of locations) {
        const areas = await fetchLocationAreas(location.url);
        const isMultiArea = areas.length > 1;
        let hasEncounters = false;

        for (const area of areas) {
            const rawEncounters = await fetchAreaEncounters(area.url, version);
            await sleep(FETCH_DELAY_MS);

            const withWalkMethod = resolveWalkMethod(
                rawEncounters,
                location.name,
                version.caveLocations ?? []
            );
            const withMethodOverrides = resolveMethodOverrides(
                withWalkMethod,
                location.name,
                version.methodOverrides ?? []
            );
            const merged = mergeEncounters(withMethodOverrides);
            const expanded = expandTimeOfDayEncounters(merged);
            const withHoneyTree = resolveHoneyTreeEncounters(expanded);
            const remerged = mergeEncounters(withHoneyTree);
            const encounters = nullifyChances(remerged);

            if (encounters.length === 0) continue;
            hasEncounters = true;

            const key = isMultiArea
                ? `${location.name}-${toSubareaLabel(location.name, area.name)}`
                : location.name;
            const name = isMultiArea
                ? `${StringHelpers.toTitleCase(location.name)} (${StringHelpers.toTitleCase(
                      toSubareaLabel(location.name, area.name)
                  )})`
                : StringHelpers.toTitleCase(location.name);

            locationsData[key] = { name, encounters };
            logSuccess(
                `Fetched ${encounters.length} encounter(s) for "${name}" (${version.label}).`
            );
        }

        if (!hasEncounters) {
            logWarning(
                `No encounters for "${StringHelpers.toTitleCase(location.name)}" (${
                    version.label
                }).`
            );
        }
    }

    writeData(locationsData);
};

runScript(() => fetchEncounters(CURRENT_GAME_VERSION));
