import fs from 'fs';
import path from 'path';
import {
    logSuccess,
    runScript,
    writeToFile,
} from '@/lib/scripts/utils/helpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE = 'Usage: npm run gen:location <game> <map> [name] [subareaName]';
const SUBAREA_NAME_REQUIRED = 'If initializing a subarea, name is required';
const IMAGE_NOT_FOUND = 'No map image was found at the expected path';
const LOCATION_EXISTS = 'That location already exists.';
const CONVERTED_TO_SUBAREAS =
    'That location already has a map, so it was converted to use subareas instead. Add an entry for the original map by hand.';

type LocationArgs = {
    game: string;
    map: string;
    slug: string;
    // Set whenever a location name is passed, since a 2nd argument means
    // this map belongs to that location as a subarea rather than being its
    // sole top-level map.
    subareaName?: string;
};

const parseArgs = (argv: string[]): LocationArgs => {
    const [game, map, name, subareaName] = argv;
    if (!game || !map) {
        throw new Error(USAGE);
    }
    if (!name) {
        return { game, map, slug: map };
    }
    if (!subareaName) {
        throw new Error(SUBAREA_NAME_REQUIRED);
    }
    return { game, map, slug: name, subareaName };
};

const getMapsDir = (gameSlug: string): string =>
    path.join('src', 'lib', 'data', gameSlug, 'maps');

const getBarrelPath = (gameSlug: string): string =>
    path.join(getMapsDir(gameSlug), 'index.ts');

const getLocationPath = (gameSlug: string, slug: string): string =>
    path.join('src', 'lib', 'data', gameSlug, 'locations', `${slug}.ts`);

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

const MAP_FIELD_PATTERN = /^ {4}map: \w+,\n/m;
const MAPS_IMPORT_PATTERN = (gameSlug: string): RegExp =>
    new RegExp(`import \\{([^}]*)\\} from '@/lib/data/${gameSlug}/maps';\n`);

// A location that already has a map assigned can't take a second one as a
// flat `map` field, so once that map + location pairing is already in use,
// swap the field for an empty `subareas` array for the (pre-existing)
// entry to be filled in by hand instead of silently overwriting it.
const convertToSubareas = (filePath: string): boolean => {
    const contents = fs.readFileSync(filePath, 'utf-8');
    if (!MAP_FIELD_PATTERN.test(contents)) return false;

    fs.writeFileSync(
        filePath,
        contents.replace(MAP_FIELD_PATTERN, '    subareas: [],\n')
    );
    return true;
};

// Adds mapExportName to the file's `@/lib/data/{gameSlug}/maps` import,
// re-sorting it alphabetically, unless it's already imported (e.g. a
// subarea reusing an already-wired map).
const addMapImport = (
    filePath: string,
    gameSlug: string,
    mapExportName: string
): void => {
    const contents = fs.readFileSync(filePath, 'utf-8');
    const pattern = MAPS_IMPORT_PATTERN(gameSlug);
    const match = pattern.exec(contents);
    if (!match) return;

    const names = match[1]
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);
    if (names.includes(mapExportName)) return;

    const sorted = [...names, mapExportName].sort((a, b) => a.localeCompare(b));
    const importStatement =
        sorted.length === 1
            ? `import { ${sorted[0]} } from '@/lib/data/${gameSlug}/maps';\n`
            : `import {\n${sorted.map((name) => `    ${name},\n`).join('')}} from '@/lib/data/${gameSlug}/maps';\n`;

    fs.writeFileSync(filePath, contents.replace(pattern, importStatement));
};

// The index of the `]` closing the file's `subareas` array, found by
// tracking bracket depth from its opening `[` so nested arrays (e.g. a
// subarea's own `battles`) don't close it early.
const findSubareasArrayEnd = (contents: string): number => {
    const openIndex =
        contents.indexOf('subareas: [') + 'subareas: ['.length - 1;

    let depth = 0;
    for (let i = openIndex; i < contents.length; i++) {
        if (contents[i] === '[') depth++;
        else if (contents[i] === ']' && --depth === 0) return i;
    }

    throw new Error("Couldn't find the end of the subareas array.");
};

// Inserts a new `{ name, map }` subarea entry just before the closing `]`
// of the file's `subareas` array. Exact indentation isn't preserved (it's
// normalized by the pre-commit Prettier hook), just valid placement.
const insertSubarea = (
    filePath: string,
    mapExportName: string,
    subareaName: string
): void => {
    const contents = fs.readFileSync(filePath, 'utf-8');
    const closeIndex = findSubareasArrayEnd(contents);
    const entry = `        {\n            name: '${subareaName}',\n            map: ${mapExportName},\n        },\n`;

    fs.writeFileSync(
        filePath,
        contents.slice(0, closeIndex) + entry + contents.slice(closeIndex)
    );
};

const createLocation = (
    gameSlug: string,
    args: LocationArgs,
    mapExportName: string
): void => {
    const filePath = getLocationPath(gameSlug, args.slug);
    const constName = StringHelpers.toConstantCase(args.slug);
    const name = StringHelpers.toTitleCase(args.slug);

    const body = args.subareaName
        ? [
              `    name: '${name}',\n`,
              '    subareas: [\n',
              '        {\n',
              `            name: '${args.subareaName}',\n`,
              `            map: ${mapExportName},\n`,
              '        },\n',
              '    ],\n',
          ]
        : [`    name: '${name}',\n`, `    map: ${mapExportName},\n`];

    writeToFile(filePath, [
        `import { ${mapExportName} } from '@/lib/data/${gameSlug}/maps';\n`,
        `import { Location } from '@/lib/static/types';\n`,
        '\n',
        `const ${constName}: Location = {\n`,
        ...body,
        '};\n',
        '\n',
        `export default ${constName};\n`,
    ]);

    logSuccess(`${args.slug} was created successfully!`);
};

runScript(() => {
    const args = parseArgs(process.argv.slice(2));
    const gameSlug = StringHelpers.toSlug(args.game);

    wireMap(gameSlug, args.map);

    const mapExportName = StringHelpers.toCamelCase(args.map);
    const locationPath = getLocationPath(gameSlug, args.slug);

    if (fs.existsSync(locationPath)) {
        if (!args.subareaName) {
            logSuccess(
                convertToSubareas(locationPath)
                    ? CONVERTED_TO_SUBAREAS
                    : LOCATION_EXISTS
            );
            return;
        }

        convertToSubareas(locationPath);
        addMapImport(locationPath, gameSlug, mapExportName);
        insertSubarea(locationPath, mapExportName, args.subareaName);
        logSuccess(
            `${args.subareaName} was added to ${args.slug} successfully!`
        );
        return;
    }

    createLocation(gameSlug, args, mapExportName);
});
