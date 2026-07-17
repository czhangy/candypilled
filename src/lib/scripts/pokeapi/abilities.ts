import fs from 'fs';
import path from 'path';
import {
    handleException,
    logSuccess,
    logWarning,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { AbilityData, AbilityValuesByGeneration } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_ABILITY_URL = 'https://pokeapi.co/api/v2/ability';
const POKEAPI_GENERATION_URL = 'https://pokeapi.co/api/v2/generation';
// Like moves.json, this dataset isn't scoped to the current game: abilities
// are shared across every game the site will ever support, so every ability
// is fetched regardless of which generation introduced it.
const DATA_PATH = path.join('src', 'lib', 'data', 'abilities.json');
const FETCH_DELAY_MS = 75;
const ABILITY_LIST_LIMIT = 500;

const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const writeData = (data: Record<string, AbilityData>): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

type RawGeneration = {
    version_groups: { name: string }[];
};

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

// Ability effect history references a version group (e.g. "black-white")
// rather than a generation number directly, so this builds the lookup once
// up front instead of resolving it per ability.
const buildVersionGroupGenerations = async (): Promise<Map<string, number>> => {
    const generationCount = await fetchGenerationCount();
    const versionGroupGenerations = new Map<string, number>();

    for (
        let generationNumber = 1;
        generationNumber <= generationCount;
        generationNumber += 1
    ) {
        const generation = await fetchGeneration(generationNumber);
        await sleep(FETCH_DELAY_MS);

        for (const versionGroup of generation.version_groups) {
            versionGroupGenerations.set(versionGroup.name, generationNumber);
        }
    }

    return versionGroupGenerations;
};

type NamedApiResource = {
    name: string;
    url: string;
};

const fetchAbilityList = async (): Promise<NamedApiResource[]> => {
    const response = await fetch(
        `${POKEAPI_ABILITY_URL}?limit=${ABILITY_LIST_LIMIT}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch ability list from PokeAPI.');
    }

    const body = await response.json();
    return body.results as NamedApiResource[];
};

type RawEffectEntry = {
    effect: string;
    language: { name: string };
};

type RawEffectChange = {
    version_group: { name: string };
    effect_entries: RawEffectEntry[];
};

type RawAbility = {
    name: string;
    generation: { name: string };
    is_main_series: boolean;
    effect_entries: RawEffectEntry[];
    effect_changes: RawEffectChange[];
};

const fetchAbility = async (
    resource: NamedApiResource
): Promise<RawAbility> => {
    const response = await fetch(resource.url);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch ability "${resource.name}" from PokeAPI.`
        );
    }

    return (await response.json()) as RawAbility;
};

const toEnglishEffect = (entries: RawEffectEntry[]): string | undefined =>
    entries.find((entry) => entry.language.name === 'en')?.effect;

const toGenerationNumber = (generationName: string): number =>
    StringHelpers.fromRoman(generationName.replace('generation-', ''));

// PokeAPI's `effect_changes` entries describe the effect text that applied
// UP TO the listed version group, with the top-level `effect_entries`
// holding the current text. This mirrors how `past_values` is interpreted in
// moves.ts, converting that into ascending "applies from generation N
// onward" segments.
const buildValuesByGeneration = (
    ability: RawAbility,
    versionGroupGenerations: Map<string, number>
): AbilityValuesByGeneration[] => {
    const currentEffect = toEnglishEffect(ability.effect_entries) ?? '';

    const pastEntries = ability.effect_changes
        .map((change) => ({
            generation:
                versionGroupGenerations.get(change.version_group.name) ?? 1,
            effect: toEnglishEffect(change.effect_entries) ?? currentEffect,
        }))
        .sort((a, b) => a.generation - b.generation);

    const segments: AbilityValuesByGeneration[] = pastEntries.map(
        (entry, index) => ({
            fromGeneration:
                index === 0 ? 1 : pastEntries[index - 1].generation + 1,
            effect: entry.effect,
        })
    );

    const lastEntry = pastEntries[pastEntries.length - 1];
    segments.push({
        fromGeneration: lastEntry ? lastEntry.generation + 1 : 1,
        effect: currentEffect,
    });

    return segments;
};

export const fetchAbilities = async (): Promise<void> => {
    const versionGroupGenerations = await buildVersionGroupGenerations();
    const abilityList = await fetchAbilityList();
    const data: Record<string, AbilityData> = {};

    for (const resource of abilityList) {
        const ability = await fetchAbility(resource);
        await sleep(FETCH_DELAY_MS);

        if (!ability.is_main_series) {
            logWarning(`Skipping non-main-series ability "${ability.name}".`);
            continue;
        }

        const name = StringHelpers.toTitleCase(ability.name);
        data[ability.name] = {
            name,
            introducedInGeneration: toGenerationNumber(ability.generation.name),
            valuesByGeneration: buildValuesByGeneration(
                ability,
                versionGroupGenerations
            ),
        };

        logSuccess(`Fetched "${name}".`);
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
