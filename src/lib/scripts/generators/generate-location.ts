import fs from 'fs';
import path from 'path';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import {
    logSuccess,
    runScript,
    writeToFile,
} from '@/lib/scripts/utils/helpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE = 'Usage: npm run gen:location <map> [name]';
const IMAGE_NOT_FOUND = 'No map image was found at the expected path';
const LOCATION_EXISTS = 'That location already exists.';

type LocationArgs = {
    map: string;
    slug: string;
};

const parseArgs = (argv: string[]): LocationArgs => {
    const [map, name] = argv;
    if (!map) {
        throw new Error(USAGE);
    }
    return { map, slug: name ?? map };
};

const getMapsDir = (gameSlug: string): string =>
    path.join('src', 'lib', 'games', gameSlug, 'maps');

const getBarrelPath = (gameSlug: string): string =>
    path.join(getMapsDir(gameSlug), 'index.ts');

const getLocationPath = (gameSlug: string, slug: string): string =>
    path.join('src', 'lib', 'games', gameSlug, 'locations', `${slug}.ts`);

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

const wireMap = (gameSlug: string, mapSlug: string): void => {
    const exportName = StringHelpers.toCamelCase(mapSlug);

    const imagePath = path.join(getMapsDir(gameSlug), `${mapSlug}.png`);
    if (!fs.existsSync(imagePath)) {
        throw new Error(`${IMAGE_NOT_FOUND} ("${imagePath}").`);
    }

    const barrelPath = getBarrelPath(gameSlug);
    const exports = readBarrelExports(barrelPath);

    if (exports.has(exportName)) return;

    exports.set(exportName, mapSlug);
    writeBarrelExports(barrelPath, exports);
};

const createLocation = (gameSlug: string, args: LocationArgs): void => {
    const filePath = getLocationPath(gameSlug, args.slug);
    const constName = StringHelpers.toConstantCase(args.slug);
    const name = StringHelpers.toTitleCase(args.slug);
    const mapExportName = StringHelpers.toCamelCase(args.map);

    writeToFile(filePath, [
        `import { ${mapExportName} } from '@/lib/games/${gameSlug}/maps';\n`,
        `import { Location } from '@/lib/static/types';\n`,
        '\n',
        `const ${constName}: Location = {\n`,
        `    name: '${name}',\n`,
        `    map: ${mapExportName},\n`,
        '};\n',
        '\n',
        `export default ${constName};\n`,
    ]);

    logSuccess(`${args.slug} was created successfully!`);
};

runScript(() => {
    const args = parseArgs(process.argv.slice(2));
    const gameSlug = StringHelpers.toSlug(GAME_ID);

    wireMap(gameSlug, args.map);

    if (fs.existsSync(getLocationPath(gameSlug, args.slug))) {
        logSuccess(LOCATION_EXISTS);
        return;
    }

    createLocation(gameSlug, args);
});
