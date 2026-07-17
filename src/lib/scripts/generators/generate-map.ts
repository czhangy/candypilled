import fs from 'fs';
import path from 'path';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import { logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE = 'Usage: npm run gen:map <slug>';
const IMAGE_NOT_FOUND = 'No map image was found at the expected path';

type MapArgs = {
    map: string;
};

const parseArgs = (argv: string[]): MapArgs => {
    const [map] = argv;
    if (!map) {
        throw new Error(USAGE);
    }
    return { map };
};

const getMapsDir = (gameSlug: string): string =>
    path.join('src', 'lib', 'games', gameSlug, 'splits', 'maps');

const getBarrelPath = (gameSlug: string): string =>
    path.join(getMapsDir(gameSlug), 'index.ts');

const readBarrelExports = (barrelPath: string): Map<string, string> => {
    const exports = new Map<string, string>();
    if (!fs.existsSync(barrelPath)) return exports;

    const pattern = /^export \{ default as (\w+) \} from '\.\/(.+)\.png';$/gm;
    const contents = fs.readFileSync(barrelPath, 'utf-8');

    for (const match of contents.matchAll(pattern)) {
        exports.set(match[1], match[2]);
    }

    return exports;
};

const writeBarrelExports = (
    barrelPath: string,
    exports: Map<string, string>
): void => {
    const lines = [...exports.entries()]
        .sort(([nameA], [nameB]) => nameA.localeCompare(nameB))
        .map(
            ([name, slug]) =>
                `export { default as ${name} } from './${slug}.png';\n`
        );

    fs.mkdirSync(path.dirname(barrelPath), { recursive: true });
    fs.writeFileSync(barrelPath, lines.join(''));
};

runScript(() => {
    const args = parseArgs(process.argv.slice(2));

    const gameSlug = StringHelpers.toSlug(GAME_ID);
    const slug = args.map;
    const exportName = StringHelpers.toCamelCase(slug);

    const imagePath = path.join(getMapsDir(gameSlug), `${slug}.png`);
    if (!fs.existsSync(imagePath)) {
        throw new Error(`${IMAGE_NOT_FOUND} ("${imagePath}").`);
    }

    const barrelPath = getBarrelPath(gameSlug);
    const exports = readBarrelExports(barrelPath);

    if (exports.has(exportName)) {
        logSuccess(`"${slug}.png" is already wired up. Nothing to do.`);
        return;
    }

    exports.set(exportName, slug);
    writeBarrelExports(barrelPath, exports);

    logSuccess(`Wired "${slug}.png" into the maps barrel!`);
});
