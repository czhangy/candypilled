import fs from 'fs';
import path from 'path';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import {
    logSuccess,
    runScript,
    writeToFile,
} from '@/lib/scripts/utils/helpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE = 'Usage: npm run gen:location <slug>';
const LOCATION_EXISTS = 'That location already exists.';

type LocationArgs = {
    slug: string;
};

const parseArgs = (argv: string[]): LocationArgs => {
    const [slug] = argv;
    if (!slug) {
        throw new Error(USAGE);
    }
    return { slug };
};

const getMapsBarrelPath = (): string =>
    path.join(
        'src',
        'lib',
        'games',
        StringHelpers.toSlug(GAME_ID),
        'splits',
        'maps',
        'index.ts'
    );

const getLocationPath = (slug: string): string =>
    path.join(
        'src',
        'lib',
        'games',
        StringHelpers.toSlug(GAME_ID),
        'splits',
        'locations',
        `${slug}.ts`
    );

const validateArgs = (args: LocationArgs): void => {
    if (fs.existsSync(getLocationPath(args.slug))) {
        throw new Error(LOCATION_EXISTS);
    }
};

const hasMap = (slug: string): boolean => {
    const mapsBarrelPath = getMapsBarrelPath();
    const mapExportName = StringHelpers.toCamelCase(slug);
    const mapsBarrel = fs.existsSync(mapsBarrelPath)
        ? fs.readFileSync(mapsBarrelPath, 'utf-8')
        : '';

    return mapsBarrel.includes(`as ${mapExportName} }`);
};

const createLocation = (args: LocationArgs): void => {
    const filePath = getLocationPath(args.slug);
    const constName = StringHelpers.toConstantCase(args.slug);
    const name = StringHelpers.toTitleCase(args.slug);
    const mapExportName = StringHelpers.toCamelCase(args.slug);
    const includeMap = hasMap(args.slug);

    writeToFile(filePath, [
        ...(includeMap
            ? [
                  `import { ${mapExportName} } from '@/lib/games/${StringHelpers.toSlug(
                      GAME_ID
                  )}/splits/maps';\n`,
              ]
            : []),
        `import { Location } from '@/lib/static/types';\n`,
        '\n',
        `const ${constName}: Location = {\n`,
        `    name: '${name}',\n`,
        ...(includeMap ? [`    map: ${mapExportName},\n`] : []),
        '};\n',
        '\n',
        `export default ${constName};\n`,
    ]);

    logSuccess(`${args.slug} was created successfully!`);
};

runScript(() => {
    const args = parseArgs(process.argv.slice(2));
    validateArgs(args);
    createLocation(args);
});
