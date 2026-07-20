import fs from 'fs';
import path from 'path';
import {
    buildVersionGroupGenerations,
    sleep,
    toGenerationNumber,
} from '@/lib/scripts/pokeapi/shared';
import { logSuccess, logWarning, runScript } from '@/lib/scripts/utils/helpers';
import { AbilityData, AbilityValuesByGeneration } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_ABILITY_URL = 'https://pokeapi.co/api/v2/ability';
// Like moves.json, this dataset isn't scoped to the current game: abilities
// are shared across every game the site will ever support, so every ability
// is fetched regardless of which generation introduced it.
const DATA_PATH = path.join('src', 'lib', 'data', 'raw', 'abilities.json');
const FETCH_DELAY_MS = 75;
const ABILITY_LIST_LIMIT = 500;

// PokeAPI has no concept of "dangerous" abilities (ones that can end a run in
// a single unlucky turn, e.g. via a hard-to-play-around trap or a punishing
// on-faint effect), so this set is curated by hand rather than derived from
// the API.
const DANGEROUS_ABILITIES = new Set([
    'shadow-tag',
    'aftermath',
    'moody',
    'simple',
]);

const writeData = (data: Record<string, AbilityData>): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
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
    const versionGroupGenerations =
        await buildVersionGroupGenerations(FETCH_DELAY_MS);
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
            isDangerous: DANGEROUS_ABILITIES.has(ability.name),
            valuesByGeneration: buildValuesByGeneration(
                ability,
                versionGroupGenerations
            ),
        };

        logSuccess(`Fetched "${name}".`);
    }

    writeData(data);
};

runScript(fetchAbilities);
