import fs from 'fs';
import path from 'path';
import { CURRENT_GAME_VERSION } from '@/lib/scripts/pokeapi/game-versions';
import { sleep } from '@/lib/scripts/pokeapi/shared';
import { logSuccess, logWarning, runScript } from '@/lib/scripts/utils/helpers';
import { EncounterMethod } from '@/lib/static/enums';
import {
    Encounter,
    GameVersion,
    LocationMerge,
    LocationSplit,
    MethodOverride,
} from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

// PokeAPI's raw method names (e.g. 'walk', 'only-one', 'gift-egg') don't
// match our EncounterMethod vocabulary until resolveWalkMethod and
// resolveMethodRenames run, so the pipeline works in this looser shape and
// only narrows to Encounter once every encounter has a final method.
type RawEncounter = {
    species: string;
    method: string;
    minLevel: number;
    maxLevel: number;
    chance: number | null;
    conditions?: string[];
};

const POKEAPI_REGION_URL = 'https://pokeapi.co/api/v2/region';
const DATA_PATH = path.join(
    'src',
    'lib',
    'data',
    'raw',
    `${CURRENT_GAME_VERSION.id}_encounters.json`
);
const FETCH_DELAY_MS = 75;

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

const writeData = (data: Record<string, Encounter[]>): void => {
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
): Promise<RawEncounter[]> => {
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
    const encounters: RawEncounter[] = [];

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

const mergeEncounters = <T extends RawEncounter>(
    encounters: T[],
    mode: 'sum' | 'dedupe'
): T[] => {
    const merged = new Map<string, T>();

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

        existing.chance =
            mode === 'dedupe'
                ? Math.max(existing.chance ?? 0, encounter.chance ?? 0)
                : (existing.chance ?? 0) + (encounter.chance ?? 0);
        existing.minLevel = Math.min(existing.minLevel, encounter.minLevel);
        existing.maxLevel = Math.max(existing.maxLevel, encounter.maxLevel);
    }

    return [...merged.values()];
};

const mergeLocations = (
    locationsData: Record<string, Encounter[]>,
    mergedLocations: LocationMerge[]
): void => {
    for (const { from, into, mode = 'sum' } of mergedLocations) {
        const source = locationsData[from];
        if (!source) continue;

        if (mode === 'replace') {
            locationsData[into] = source;
        } else {
            const target = locationsData[into];
            locationsData[into] = target
                ? mergeEncounters([...target, ...source], mode)
                : source;
        }
        delete locationsData[from];
    }
};

const splitLocations = (
    locationsData: Record<string, Encounter[]>,
    locationSplits: LocationSplit[]
): void => {
    for (const { location, groups } of locationSplits) {
        const source = locationsData[location];
        if (!source) continue;

        const claimedMethods = new Set(
            groups.flatMap((group) => group.methods ?? [])
        );

        for (const group of groups) {
            const encounters = source.filter((encounter) =>
                group.methods
                    ? group.methods.includes(encounter.method)
                    : !claimedMethods.has(encounter.method)
            );

            if (encounters.length === 0) continue;
            locationsData[group.key] = encounters;
        }

        delete locationsData[location];
    }
};

const resolveWalkMethod = (
    encounters: RawEncounter[],
    locationName: string,
    caveLocations: string[]
): RawEncounter[] =>
    encounters.map((encounter) =>
        encounter.method === 'walk'
            ? {
                  ...encounter,
                  method: caveLocations.includes(locationName)
                      ? EncounterMethod.Cave
                      : EncounterMethod.Grass,
              }
            : encounter
    );

const METHOD_RENAMES: Record<string, EncounterMethod> = {
    'only-one': EncounterMethod.Special,
    'gift-egg': EncounterMethod.Egg,
    'feebas-tile-fishing': EncounterMethod.FeebasTile,
};

const resolveMethodRenames = (encounters: RawEncounter[]): RawEncounter[] =>
    encounters.map((encounter) => {
        const renamed = METHOD_RENAMES[encounter.method];
        return renamed ? { ...encounter, method: renamed } : encounter;
    });

const resolveMethodOverrides = (
    encounters: RawEncounter[],
    locationName: string,
    methodOverrides: MethodOverride[]
): RawEncounter[] =>
    encounters.map((encounter) => {
        const override = methodOverrides.find(
            (candidate) =>
                candidate.location === locationName &&
                candidate.species === encounter.species
        );
        return override ? { ...encounter, method: override.method } : encounter;
    });

const resolveHoneyTreeEncounters = (
    encounters: RawEncounter[]
): RawEncounter[] =>
    encounters.map((encounter) =>
        encounter.method === EncounterMethod.HoneyTree
            ? {
                  species: encounter.species,
                  method: encounter.method,
                  minLevel: encounter.minLevel,
                  maxLevel: encounter.maxLevel,
                  chance: encounter.chance,
              }
            : encounter
    );

const NULLIFIED_CHANCE_METHODS: string[] = [
    EncounterMethod.HoneyTree,
    EncounterMethod.Starter,
    EncounterMethod.Special,
    EncounterMethod.Egg,
];

const nullifyChances = (encounters: RawEncounter[]): RawEncounter[] =>
    encounters.map((encounter) =>
        NULLIFIED_CHANCE_METHODS.includes(encounter.method)
            ? { ...encounter, chance: null }
            : encounter
    );

const expandTimeOfDayEncounters = (
    encounters: RawEncounter[]
): RawEncounter[] => {
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
    const locationsData: Record<string, Encounter[]> = {};

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
            const withMethodRenames = resolveMethodRenames(withMethodOverrides);
            const merged = mergeEncounters(withMethodRenames, 'sum');
            const expanded = expandTimeOfDayEncounters(merged);
            const withHoneyTree = resolveHoneyTreeEncounters(expanded);
            const remerged = mergeEncounters(withHoneyTree, 'sum');
            const rawFinalEncounters = nullifyChances(remerged);

            if (rawFinalEncounters.length === 0) continue;

            // Every raw method name has been resolved to our EncounterMethod
            // vocabulary by this point (walk methods, renames, overrides),
            // so this narrowing is safe.
            const encounters: Encounter[] = rawFinalEncounters.map(
                (encounter) => ({
                    ...encounter,
                    method: encounter.method as EncounterMethod,
                })
            );
            hasEncounters = true;

            const key = isMultiArea
                ? `${location.name}-${toSubareaLabel(location.name, area.name)}`
                : location.name;
            const name = isMultiArea
                ? `${StringHelpers.toTitleCase(location.name)} (${StringHelpers.toTitleCase(
                      toSubareaLabel(location.name, area.name)
                  )})`
                : StringHelpers.toTitleCase(location.name);

            locationsData[key] = encounters;
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

    mergeLocations(locationsData, version.mergedLocations ?? []);
    splitLocations(locationsData, version.locationSplits ?? []);
    writeData(locationsData);
};

runScript(() => fetchEncounters(CURRENT_GAME_VERSION));
