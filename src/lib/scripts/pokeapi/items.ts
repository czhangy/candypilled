import fs from 'fs';
import path from 'path';
import {
    buildVersionGroupGenerations,
    sleep,
    toGenerationNumber,
} from '@/lib/scripts/pokeapi/shared';
import { logSuccess, logWarning, runScript } from '@/lib/scripts/utils/helpers';
import { ItemData, ItemValuesByGeneration } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_ITEM_CATEGORY_URL = 'https://pokeapi.co/api/v2/item-category';
// PokeAPI's "holdable"/"holdable-active" item attributes were only ever
// backfilled through roughly generation VII, so filtering by attribute (as
// an earlier version of this script did) silently drops every held item
// added since (e.g. Covert Cloak). Item categories stay accurate for new
// items, so held items are curated as an allowlist of categories instead.
// "evolution" is deliberately excluded even though a handful of its items
// (Dragon Scale, Up-Grade, Protector, etc.) are held to trigger a trade
// evolution: most of the category is stones used directly from the bag, and
// PokeAPI doesn't distinguish the two mechanically, so the category can't be
// safely included as a whole. "mega-stones", "z-crystals", and "memories"
// are omitted entirely: every item in them was introduced after
// MAX_GENERATION, so fetching them would only be discarded work.
const HELD_ITEM_CATEGORIES = [
    'held-items',
    'choice',
    'effort-training',
    'bad-held-items',
    'training',
    'plates',
    'species-specific',
    'type-enhancement',
    'type-protection',
    'scarves',
    'jewels',
    'medicine',
    'other',
    'in-a-pinch',
    'picky-healing',
];
// Like moves.json and abilities.json, this dataset isn't scoped to the
// current game, but unlike them it doesn't cover every generation the site
// will ever support: items (and their descriptions) are only fetched up
// through this generation.
const MAX_GENERATION = 5;
const DATA_PATH = path.join('src', 'lib', 'data', 'raw', 'items.json');
const SPRITE_DIR = path.join('public', 'items');
const FETCH_DELAY_MS = 75;

// PokeAPI's `names` field carries the item's real display name, including
// punctuation (apostrophes, periods, embedded hyphens) that a slug-based
// title-casing can't reconstruct.
const NAME_OVERRIDES: Record<string, string> = {
    'exp-share': 'Exp. Share',
    'kings-rock': "King's Rock",
    'never-melt-ice': 'Never-Melt Ice',
    // PokeAPI's slug is a holdover from this item's original Generation
    // III/IV name; it was renamed "Leek" starting in Generation VIII.
    stick: 'Leek',
};

// Z-Crystal slugs carry a "--held" suffix (distinguishing the held form
// PokeAPI models from the bag form this dataset doesn't fetch), which isn't
// part of the item's actual name and would otherwise leak into both the
// title-cased display name and the downloaded sprite's filename.
const HELD_SUFFIX = /--held$/;
const toItemSlug = (name: string): string => name.replace(HELD_SUFFIX, '');

// PokeAPI has no concept of an item being discontinued: its `game_indices`
// keep listing an item's original slot in every later generation's data
// files even once the item stopped being obtainable in-game, so this is
// curated by hand. Elemental Gems were nerfed in generation VI and cut
// entirely in generation VII, both beyond MAX_GENERATION, so only Contest
// Scarves (cut when generation V replaced Super Contests with Musicals) are
// relevant within this dataset's range.
const REMOVED_IN_GENERATION: Record<string, number> = {
    'red-scarf': 5,
    'blue-scarf': 5,
    'pink-scarf': 5,
    'green-scarf': 5,
    'yellow-scarf': 5,
};

// PokeAPI has no concept of "dangerous" items (ones that can end a run in a
// single unlucky turn via a hard-to-play-around evasion/survival effect), so
// this set is curated by hand rather than derived from the API.
const DANGEROUS_ITEMS = new Set(['focus-band', 'bright-powder', 'lax-incense']);

// PokeAPI's flavor/effect text uses a typographic apostrophe (’); this
// project's copy uses a plain one throughout, so every string in the
// written data is normalized to match.
const CURLY_APOSTROPHE = /’/g;

const writeData = (data: Record<string, ItemData>): void => {
    const json = JSON.stringify(data, null, 4).replace(CURLY_APOSTROPHE, "'");
    fs.writeFileSync(DATA_PATH, `${json}\n`);
};

type NamedApiResource = {
    name: string;
    url: string;
};

const fetchCategoryItems = async (
    category: string
): Promise<NamedApiResource[]> => {
    const response = await fetch(`${POKEAPI_ITEM_CATEGORY_URL}/${category}`);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch item category "${category}" from PokeAPI.`
        );
    }

    const body = await response.json();
    return body.items as NamedApiResource[];
};

// A few items are cross-listed under more than one held-item category, and
// PokeAPI's own "type-protection" category even lists Roseli Berry twice
// within itself, so the merged list is deduped by slug.
const fetchHeldItemList = async (): Promise<NamedApiResource[]> => {
    const itemsByCategory = await Promise.all(
        HELD_ITEM_CATEGORIES.map(fetchCategoryItems)
    );

    const uniqueItems = new Map<string, NamedApiResource>();
    for (const item of itemsByCategory.flat()) {
        uniqueItems.set(item.name, item);
    }

    return [...uniqueItems.values()];
};

type RawEffectEntry = {
    short_effect: string;
    language: { name: string };
};

type RawFlavorTextEntry = {
    text: string;
    language: { name: string };
    version_group: { name: string };
};

type RawGameIndex = {
    generation: { name: string };
};

type RawItem = {
    name: string;
    category: { name: string };
    effect_entries: RawEffectEntry[];
    flavor_text_entries: RawFlavorTextEntry[];
    game_indices: RawGameIndex[];
    sprites: { default: string | null };
};

const fetchItem = async (resource: NamedApiResource): Promise<RawItem> => {
    const response = await fetch(resource.url);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch item "${resource.name}" from PokeAPI.`
        );
    }

    return (await response.json()) as RawItem;
};

const toEnglishEffect = (entries: RawEffectEntry[]): string =>
    entries.find((entry) => entry.language.name === 'en')?.short_effect ?? '';

// Items have no `generation` field of their own (unlike moves/abilities), so
// the introducing generation is derived from the earliest generation listed
// in `game_indices`.
const toIntroducedInGeneration = (item: RawItem): number =>
    Math.min(
        ...item.game_indices.map((entry) =>
            toGenerationNumber(entry.generation.name)
        )
    );

// Items have no `past_values`/`effect_changes` equivalent (their mechanical
// effect is only ever given as a single current value), so unlike moves and
// abilities the only per-generation timeline available is flavor text,
// mirroring buildDescriptionTimeline in moves.ts.
const buildValuesByGeneration = (
    item: RawItem,
    versionGroupGenerations: Map<string, number>
): ItemValuesByGeneration[] => {
    const englishEntries = item.flavor_text_entries
        .filter((entry) => entry.language.name === 'en')
        .map((entry) => ({
            generation:
                versionGroupGenerations.get(entry.version_group.name) ?? 1,
            description: entry.text.replace(/[\n\f]+/g, ' '),
        }))
        .filter((entry) => entry.generation <= MAX_GENERATION)
        .sort((a, b) => a.generation - b.generation);

    const segments: ItemValuesByGeneration[] = [];
    for (const entry of englishEntries) {
        const previous = segments[segments.length - 1];
        if (
            previous &&
            (previous.fromGeneration === entry.generation ||
                previous.description === entry.description)
        ) {
            continue;
        }

        segments.push({
            fromGeneration: entry.generation,
            description: entry.description,
        });
    }

    return segments;
};

const downloadSprite = async (
    slug: string,
    spriteUrl: string
): Promise<string> => {
    const spriteResponse = await fetch(spriteUrl);
    const spriteBuffer = Buffer.from(await spriteResponse.arrayBuffer());

    fs.writeFileSync(path.join(SPRITE_DIR, `${slug}.png`), spriteBuffer);

    return `/items/${slug}.png`;
};

export const fetchItems = async (): Promise<void> => {
    fs.mkdirSync(SPRITE_DIR, { recursive: true });

    const versionGroupGenerations =
        await buildVersionGroupGenerations(FETCH_DELAY_MS);
    const heldItemList = await fetchHeldItemList();
    const data: Record<string, ItemData> = {};

    for (const resource of heldItemList) {
        const item = await fetchItem(resource);
        await sleep(FETCH_DELAY_MS);

        const introducedInGeneration = toIntroducedInGeneration(item);
        if (introducedInGeneration > MAX_GENERATION) {
            logWarning(
                `Skipping "${item.name}" (introduced after generation ${MAX_GENERATION}).`
            );
            continue;
        }

        if (!item.sprites.default) {
            logWarning(`Skipping "${item.name}" (no sprite available).`);
            continue;
        }

        const apiSlug = toItemSlug(item.name);
        const name =
            NAME_OVERRIDES[apiSlug] ?? StringHelpers.toTitleCase(apiSlug);
        // Keyed by the display name's own slug (not PokeAPI's raw item
        // slug) so lookups elsewhere in the codebase, which all resolve
        // data by slugifying a display name (e.g. AbilityHelpers), resolve
        // correctly even for names PokeAPI's slug doesn't cleanly encode
        // (e.g. "King's Rock" -> "kings-rock" vs. the correct "king-s-rock").
        const slug = StringHelpers.toSlug(name);
        const sprite = await downloadSprite(slug, item.sprites.default);
        const removedInGeneration = REMOVED_IN_GENERATION[apiSlug];

        data[slug] = {
            slug,
            name,
            category: item.category.name,
            effect: toEnglishEffect(item.effect_entries),
            introducedInGeneration,
            ...(removedInGeneration && { removedInGeneration }),
            isDangerous: DANGEROUS_ITEMS.has(slug),
            sprite,
            valuesByGeneration: buildValuesByGeneration(
                item,
                versionGroupGenerations
            ),
        };

        logSuccess(`Fetched "${name}".`);
    }

    writeData(data);
};

runScript(fetchItems);
