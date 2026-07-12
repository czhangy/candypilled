import fs from 'fs';
import path from 'path';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import { GAMES } from '@/lib/static/constants';
import { Pokemon } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const SPRITES_DIR = path.join('public', 'pokemon');
const DATA_PATH = path.join('src', 'lib', 'static', 'pokemon.json');
const USAGE = 'Usage: npm run sync:pokemon -- [--force] [names...]';

interface FetchArgs {
    force: boolean;
    names: string[];
}

const getDefaultNames = (): string[] =>
    Array.from(new Set(GAMES.flatMap((game) => game.starters)));

const parseArgs = (argv: string[]): FetchArgs => {
    const force = argv.includes('--force');
    const names = argv.filter((arg) => arg !== '--force');

    if (names.some((name) => name.startsWith('--'))) {
        throw new Error(USAGE);
    }

    return { force, names: names.length > 0 ? names : getDefaultNames() };
};

const readExistingData = (): Record<string, Pokemon> => {
    if (!fs.existsSync(DATA_PATH)) return {};
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
};

const fetchPokemon = async (name: string, slug: string): Promise<Pokemon> => {
    const response = await fetch(`${POKEAPI_BASE_URL}/${slug}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch "${name}" from PokeAPI.`);
    }

    const data = await response.json();
    const spriteUrl = data.sprites?.front_default;
    if (!spriteUrl) {
        throw new Error(`"${name}" has no sprite available.`);
    }

    const spriteResponse = await fetch(spriteUrl);
    const spriteBuffer = Buffer.from(await spriteResponse.arrayBuffer());

    fs.mkdirSync(SPRITES_DIR, { recursive: true });
    fs.writeFileSync(path.join(SPRITES_DIR, `${slug}.png`), spriteBuffer);

    return { name, sprite: `/pokemon/${slug}.png` };
};

const syncPokemon = async (args: FetchArgs): Promise<void> => {
    const data = readExistingData();

    for (const name of args.names) {
        const slug = StringHelpers.toSlug(name);

        if (!args.force && data[slug]) {
            logSuccess(`Skipping "${name}" (already cached).`);
            continue;
        }

        data[slug] = await fetchPokemon(name, slug);
        logSuccess(`Synced "${name}".`);
    }

    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        const args = parseArgs(process.argv.slice(2));
        await syncPokemon(args);
        logSuccess('Pokemon data synced successfully!');
    } catch (error) {
        handleException(error);
    }
};

main();
