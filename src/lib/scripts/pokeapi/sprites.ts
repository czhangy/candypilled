import fs from 'fs';
import path from 'path';
import {
    handleException,
    logSuccess,
    logWarning,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { PokemonData } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const DATA_PATH = path.join(
    'src',
    'lib',
    'scripts',
    'pokeapi',
    'output',
    'pokemon.json'
);
const FETCH_DELAY_MS = 75;

interface DexRange {
    generation: number;
    start: number;
    end: number;
}

interface SpriteVariant {
    id: string;
    label: string;
    generation: number;
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

const getDexNumbersForGeneration = (generation: number): number[] => {
    const range = DEX_RANGES.find(
        (candidate) => candidate.generation === generation
    );
    if (!range) return [];

    return Array.from(
        { length: range.end - range.start + 1 },
        (_value, index) => range.start + index
    );
};

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

    const variantDir = path.join('public', variant.id, 'pokemon');
    fs.mkdirSync(variantDir, { recursive: true });
    fs.writeFileSync(path.join(variantDir, `${slug}.png`), spriteBuffer);

    return `/${variant.id}/pokemon/${slug}.png`;
};

export const getSpriteVariants = (minGeneration: number): SpriteVariant[] =>
    SPRITE_VARIANTS.filter((variant) => variant.generation >= minGeneration);

export const fetchSprites = async (
    dexNumbers: number[],
    variant: SpriteVariant
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

            const spriteUrl = getSpriteUrl(entry.sprites, variant);
            if (!spriteUrl) {
                logWarning(`No ${variant.label} sprite for "${entry.name}".`);
            } else {
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

interface Args {
    generation: number;
    variantId: string;
}

const parseArgs = (): Args => {
    const args = new Map(
        process.argv.slice(2).map((arg) => {
            const [key, value] = arg.replace(/^--/, '').split('=');
            return [key, value];
        })
    );

    const generationArg = args.get('generation');
    const variantArg = args.get('variant');

    if (!generationArg || !variantArg) {
        throw new Error(
            'Usage: npm run pokeapi:sprites -- --generation=3 --variant=emerald'
        );
    }

    if (generationArg.includes(',') || variantArg.includes(',')) {
        throw new Error(
            'Only one --generation and one --variant may be specified per run.'
        );
    }

    return {
        generation: Number(generationArg),
        variantId: variantArg,
    };
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();

        const { generation, variantId } = parseArgs();
        const availableVariants = getSpriteVariants(generation);

        const variant = availableVariants.find(
            (candidate) => candidate.id === variantId
        );
        if (!variant) {
            throw new Error(
                `"${variantId}" is not a valid sprite variant for generation ${generation}. Valid options: ${availableVariants
                    .map((candidate) => candidate.id)
                    .join(', ')}`
            );
        }

        await fetchSprites(getDexNumbersForGeneration(generation), variant);
    } catch (error) {
        handleException(error);
    }
};

main();
