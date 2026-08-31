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
    'wonder-guard',
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

type RawFlavorTextEntry = {
    flavor_text: string;
    language: { name: string };
    version_group: { name: string };
};

type RawAbility = {
    name: string;
    generation: { name: string };
    is_main_series: boolean;
    flavor_text_entries: RawFlavorTextEntry[];
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

// PokeAPI resource URLs end in "/{id}/", e.g. ".../ability/65/".
const toResourceId = (url: string): number =>
    Number(url.split('/').filter(Boolean).pop());

// Unlike an ability's `effect_entries`, which is a single latest-generation
// description that freely mentions moves regardless of when they were
// introduced (e.g. Suction Cups' current text cites Circle Throw and Dragon
// Tail, both Generation V moves, despite Suction Cups dating to Generation
// III), `flavor_text_entries` is genuinely per version-group official game
// text, so it stays accurate for whichever generation is being displayed.
// This keeps the first English entry seen for each generation and lets it
// apply forward until the next generation with different text, mirroring
// moves.ts's buildDescriptionTimeline.
const buildValuesByGeneration = (
    ability: RawAbility,
    versionGroupGenerations: Map<string, number>
): AbilityValuesByGeneration[] => {
    const englishEntries = ability.flavor_text_entries
        .filter((entry) => entry.language.name === 'en')
        .map((entry) => ({
            generation:
                versionGroupGenerations.get(entry.version_group.name) ?? 1,
            effect: entry.flavor_text.replace(/[\n\f]+/g, ' '),
        }))
        .sort((a, b) => a.generation - b.generation);

    const segments: AbilityValuesByGeneration[] = [];
    for (const entry of englishEntries) {
        const previous = segments[segments.length - 1];
        if (previous?.fromGeneration === entry.generation) continue;

        segments.push({
            fromGeneration: entry.generation,
            effect: entry.effect,
        });
    }

    // A handful of very recently added abilities have no English flavor
    // text yet, so fall back to an empty segment rather than an empty array.
    return segments.length > 0 ? segments : [{ fromGeneration: 1, effect: '' }];
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
            slug: ability.name,
            name,
            id: toResourceId(resource.url),
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
