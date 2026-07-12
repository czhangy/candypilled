import fs from 'fs';
import path from 'path';
import { logSuccess, logWarning } from '@/lib/scripts/utils/helpers';
import { promptCheckbox } from '@/lib/scripts/utils/prompt-checkbox';
import { Pokemon, SpriteVariant } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const SPRITES_DIR = path.join('public', 'sprites', 'pokemon');
const DATA_PATH = path.join('src', 'lib', 'static', 'pokemon.json');
const FETCH_DELAY_MS = 75;

interface DexRange {
    generation: number;
    start: number;
    end: number;
}

const DEX_RANGES: DexRange[] = [
    { generation: 1, start: 1, end: 151 },
    { generation: 2, start: 152, end: 251 },
    { generation: 3, start: 252, end: 386 },
    { generation: 4, start: 387, end: 493 },
];

export const SPRITE_VARIANTS: SpriteVariant[] = [
    { id: 'red-blue', label: 'Red/Blue', generation: 1 },
    { id: 'yellow', label: 'Yellow', generation: 1 },
    { id: 'gold', label: 'Gold', generation: 2 },
    { id: 'silver', label: 'Silver', generation: 2 },
    { id: 'crystal', label: 'Crystal', generation: 2 },
    { id: 'ruby-sapphire', label: 'Ruby/Sapphire', generation: 3 },
    { id: 'emerald', label: 'Emerald', generation: 3 },
    { id: 'firered-leafgreen', label: 'FireRed/LeafGreen', generation: 3 },
    { id: 'diamond-pearl', label: 'Diamond/Pearl', generation: 4 },
    { id: 'platinum', label: 'Platinum', generation: 4 },
    {
        id: 'heartgold-soulsilver',
        label: 'HeartGold/SoulSilver',
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

const getDexNumbersForGenerations = (generations: number[]): number[] =>
    DEX_RANGES.filter((range) =>
        generations.includes(range.generation)
    ).flatMap((range) =>
        Array.from(
            { length: range.end - range.start + 1 },
            (_value, index) => range.start + index
        )
    );

const readData = (): Record<string, Pokemon> => {
    if (!fs.existsSync(DATA_PATH)) return {};
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
};

const writeData = (data: Record<string, Pokemon>): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

interface Variety {
    name: string;
    url: string;
}

interface DexEntry {
    name: string;
    slug: string;
    sprites: unknown;
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

const fetchDexEntry = async (variety: Variety): Promise<DexEntry> => {
    const response = await fetch(variety.url);
    if (!response.ok) {
        throw new Error(`Failed to fetch "${variety.name}" from PokeAPI.`);
    }

    const body = await response.json();
    return {
        name: toDisplayName(body.name),
        slug: body.name,
        sprites: body.sprites,
    };
};

const getSpriteUrl = (
    sprites: unknown,
    variant: SpriteVariant
): string | null => {
    const generationKey = `generation-${StringHelpers.toRoman(
        variant.generation
    ).toLowerCase()}`;

    return (
        (
            sprites as {
                versions?: Record<
                    string,
                    Record<string, { front_default: string | null }>
                >;
            }
        )?.versions?.[generationKey]?.[variant.id]?.front_default ?? null
    );
};

const downloadSprite = async (
    slug: string,
    variant: SpriteVariant,
    spriteUrl: string
): Promise<string> => {
    const spriteResponse = await fetch(spriteUrl);
    const spriteBuffer = Buffer.from(await spriteResponse.arrayBuffer());

    const variantDir = path.join(SPRITES_DIR, variant.id);
    fs.mkdirSync(variantDir, { recursive: true });
    fs.writeFileSync(path.join(variantDir, `${slug}.png`), spriteBuffer);

    return `/sprites/pokemon/${variant.id}/${slug}.png`;
};

export const getSpriteVariants = (minGeneration: number): SpriteVariant[] =>
    SPRITE_VARIANTS.filter((variant) => variant.generation >= minGeneration);

export const fetchSprites = async (
    dexNumbers: number[],
    variants: SpriteVariant[]
): Promise<void> => {
    const data = readData();

    for (const dexNumber of dexNumbers) {
        const varieties = await fetchVarieties(dexNumber);

        for (const variety of varieties) {
            const entry = await fetchDexEntry(variety);
            const pokemon = data[entry.slug] ?? {
                name: entry.name,
                sprites: {},
            };

            for (const variant of variants) {
                const spriteUrl = getSpriteUrl(entry.sprites, variant);
                if (!spriteUrl) {
                    logWarning(
                        `No ${variant.label} sprite for "${entry.name}".`
                    );
                    continue;
                }

                pokemon.sprites[variant.id] = await downloadSprite(
                    entry.slug,
                    variant,
                    spriteUrl
                );
                logSuccess(`Fetched "${entry.name}" (${variant.label}).`);
            }

            if (Object.keys(pokemon.sprites).length > 0) {
                data[entry.slug] = pokemon;
            }

            await sleep(FETCH_DELAY_MS);
        }
    }

    writeData(data);
};

export const promptSprites = async (generations: number[]): Promise<void> => {
    const minGeneration = Math.max(...generations);
    const variantIds = await promptCheckbox(
        'Select sprite variants',
        getSpriteVariants(minGeneration).map((variant) => ({
            label: variant.label,
            value: variant.id,
        }))
    );

    if (variantIds.length === 0) {
        logSuccess('No sprite variants selected. Exiting.');
        return;
    }

    const variants = SPRITE_VARIANTS.filter((variant) =>
        variantIds.includes(variant.id)
    );

    await fetchSprites(getDexNumbersForGenerations(generations), variants);
};
