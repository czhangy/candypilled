import fs from 'fs';
import path from 'path';
import { TRAINER_CLASSES } from '@/lib/data/trainer-classes';
import { logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE =
    'Usage: npm run gen:trainer-class <assetFolder> <slug> <displayName> [spriteSlug]';
const INVALID_SLUG = 'slug must be a lowercase kebab-case identifier.';
const CLASS_EXISTS = 'That trainer class slug already exists.';
const SPRITE_NOT_FOUND = 'No sprite was found at the expected path';

const CATALOG_PATH = path.join('src', 'lib', 'data', 'trainer-classes.ts');
const CATALOG_OPEN = 'Record<string, TrainerClass> = {';
const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const IDENTIFIER_PATTERN = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

type TrainerClassArgs = {
    assetFolder: string;
    slug: string;
    displayName: string;
    spriteSlug: string;
};

const parseArgs = (argv: string[]): TrainerClassArgs => {
    const [assetFolder, slug, displayName, spriteSlug] = argv;
    if (!assetFolder || !slug || !displayName) {
        throw new Error(USAGE);
    }
    return {
        assetFolder,
        slug,
        displayName,
        spriteSlug: spriteSlug ?? slug,
    };
};

const validateArgs = (args: TrainerClassArgs, assetFolder: string): void => {
    if (!SLUG_PATTERN.test(args.slug)) {
        throw new Error(INVALID_SLUG);
    }
    if (args.slug in TRAINER_CLASSES) {
        throw new Error(CLASS_EXISTS);
    }

    const spritePath = path.join(
        'public',
        'trainers',
        assetFolder,
        `${args.spriteSlug}.png`
    );
    if (!fs.existsSync(spritePath)) {
        throw new Error(`${SPRITE_NOT_FOUND} ("${spritePath}").`);
    }
};

// The key exactly as it appears in trainerClasses.ts's source (quoted
// unless it's already a valid bare identifier), so it can be located or
// serialized verbatim.
const keyLiteral = (slug: string): string =>
    IDENTIFIER_PATTERN.test(slug) ? slug : `'${slug}'`;

// The index of the `}` closing TRAINER_CLASSES' object literal, found by
// tracking brace depth from its opening `{` so nested entry objects don't
// close it early.
const findCatalogEnd = (contents: string): number => {
    const openIndex = contents.indexOf(CATALOG_OPEN) + CATALOG_OPEN.length - 1;

    let depth = 0;
    for (let i = openIndex; i < contents.length; i++) {
        if (contents[i] === '{') depth++;
        else if (contents[i] === '}' && --depth === 0) return i;
    }

    throw new Error("Couldn't find the end of the TRAINER_CLASSES catalog.");
};

// Where a new entry for slug should be spliced in to keep the catalog
// alphabetically sorted: right before the first existing key that sorts
// after it, or catalogEnd if slug sorts after every existing key.
const findInsertionIndex = (
    contents: string,
    catalogEnd: number,
    slug: string
): number => {
    const nextSlug = Object.keys(TRAINER_CLASSES)
        .sort()
        .find((existingSlug) => existingSlug > slug);
    if (!nextSlug) return catalogEnd;

    const index = contents.indexOf(`    ${keyLiteral(nextSlug)}:`);
    if (index === -1) {
        throw new Error(`Couldn't find ${nextSlug} in the catalog file.`);
    }
    return index;
};

const serializeEntry = (args: TrainerClassArgs): string =>
    `    ${keyLiteral(args.slug)}: {\n` +
    `        displayName: '${args.displayName}',\n` +
    `        spriteSlug: '${args.spriteSlug}',\n` +
    `    },\n`;

const addTrainerClass = (args: TrainerClassArgs): void => {
    const contents = fs.readFileSync(CATALOG_PATH, 'utf-8');
    const catalogEnd = findCatalogEnd(contents);
    const insertionIndex = findInsertionIndex(contents, catalogEnd, args.slug);

    fs.writeFileSync(
        CATALOG_PATH,
        contents.slice(0, insertionIndex) +
            serializeEntry(args) +
            contents.slice(insertionIndex)
    );
};

runScript(() => {
    const args = parseArgs(process.argv.slice(2));
    const assetFolder = StringHelpers.toSlug(args.assetFolder);

    validateArgs(args, assetFolder);
    addTrainerClass(args);

    logSuccess(`${args.slug} was added to TRAINER_CLASSES successfully!`);
});
