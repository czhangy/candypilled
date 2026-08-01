import fs from 'fs';
import path from 'path';
import { createInterface, Interface } from 'readline/promises';
import { TRAINER_CLASSES } from '@/lib/data/trainer-classes';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import { logError, logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { FieldCondition } from '@/lib/static/enums';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE =
    'Usage: npm run gen:battle <location> [subarea] ' +
    '[--miniboss] [--boss] [--required] [--true] [--double] [--tag] [--field]';
const LOCATION_NOT_FOUND = 'That location does not exist.';
const SUBAREA_NOT_FOUND = 'That subarea does not exist on this location.';
const BOSS_CLASS_NOT_ALLOWED =
    '--boss requires the trainer class to be Leader, Galactic Boss, Elite Four, or Champion.';
const MINIBOSS_CLASS_NOT_ALLOWED =
    '--miniboss requires the trainer class to be Galactic Boss, Commander, or PKMN Trainer.';
const ENUMS_IMPORT_PATH = '@/lib/static/enums';
const FIELD_CONDITION_NAMES = Object.values(FieldCondition);
// FieldCondition's keys don't all match their values (e.g. RemovableFog =
// 'Removable Fog'), so the generated `FieldCondition.<Key>` reference has to
// be looked up from the prompted display value rather than assumed equal.
const FIELD_CONDITION_KEYS_BY_VALUE = new Map(
    Object.entries(FieldCondition).map(([key, value]) => [value, key])
);
const BOSS_DISPLAY_NAMES = new Set([
    'Leader',
    'Galactic Boss',
    'Elite Four',
    'Champion',
]);
const MINIBOSS_DISPLAY_NAMES = new Set([
    'Galactic Boss',
    'Commander',
    'PKMN Trainer',
]);

type BattleArgs = {
    location: string;
    subarea?: string;
    isMiniboss: boolean;
    isBoss: boolean;
    isRequired: boolean;
    isTrueDouble: boolean;
    isDouble: boolean;
    isTag: boolean;
    isFieldEnabled: boolean;
};

type Range = {
    start: number;
    end: number;
};

// Only placement + metadata is scaffolded here — a battle's trainer info
// (team, items, etc.) lives in battles.json, keyed by battleKey, and isn't
// something this generator writes.
type PromptedBattle = {
    battleKey: string;
    isTrueDouble: boolean;
    isDouble: boolean;
    isTag: boolean;
    isOptional: boolean;
    isMiniboss: boolean;
    isBoss: boolean;
    fieldCondition?: FieldCondition;
    x: number;
    y: number;
};

const FLAGS = [
    '--miniboss',
    '--boss',
    '--required',
    '--true',
    '--double',
    '--tag',
    '--field',
];

const parseArgs = (argv: string[]): BattleArgs => {
    const isMiniboss = argv.includes('--miniboss');
    const isBoss = argv.includes('--boss');
    const isRequired = argv.includes('--required');
    const isTrueDouble = argv.includes('--true');
    const isDouble = argv.includes('--double');
    const isTag = argv.includes('--tag');
    const isFieldEnabled = argv.includes('--field');
    const [location, subarea] = argv.filter((arg) => !FLAGS.includes(arg));
    if (!location) {
        throw new Error(USAGE);
    }
    return {
        location,
        subarea,
        isMiniboss,
        isBoss,
        isRequired,
        isTrueDouble,
        isDouble,
        isTag,
        isFieldEnabled,
    };
};

const getLocationPath = (gameSlug: string, slug: string): string =>
    path.join('src', 'lib', 'data', gameSlug, 'locations', `${slug}.ts`);

const getIndent = (content: string, index: number): string => {
    const lineStart = content.lastIndexOf('\n', index) + 1;
    return content.slice(lineStart, index).match(/^[ \t]*/)?.[0] ?? '';
};

const getLineStart = (content: string, index: number): number =>
    content.lastIndexOf('\n', index) + 1;

// Scans backward from `index` to find the nearest brace that isn't already
// closed by a `}` between it and `index`, i.e. the object literal
// enclosing that position.
const findEnclosingBrace = (content: string, index: number): number => {
    let depth = 0;
    for (let i = index - 1; i >= 0; i--) {
        if (content[i] === '}') depth++;
        else if (content[i] === '{') {
            if (depth === 0) return i;
            depth--;
        }
    }
    throw new Error(SUBAREA_NOT_FOUND);
};

const findMatchingBrace = (content: string, openIndex: number): number => {
    let depth = 0;
    for (let i = openIndex; i < content.length; i++) {
        if (content[i] === '{') depth++;
        if (content[i] === '}') {
            depth--;
            if (depth === 0) return i;
        }
    }
    throw new Error(SUBAREA_NOT_FOUND);
};

const findMatchingBracket = (content: string, openIndex: number): number => {
    let depth = 0;
    for (let i = openIndex; i < content.length; i++) {
        if (content[i] === '[') depth++;
        if (content[i] === ']') {
            depth--;
            if (depth === 0) return i;
        }
    }
    throw new Error(SUBAREA_NOT_FOUND);
};

const getLocationScope = (content: string): Range => {
    const match = /:\s*Location\s*=\s*\{/.exec(content);
    if (!match) {
        throw new Error(LOCATION_NOT_FOUND);
    }
    const start = match.index + match[0].length - 1;
    return { start, end: findMatchingBrace(content, start) };
};

const escapeRegExp = (value: string): string =>
    value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSubareaScope = (content: string, subarea: string): Range => {
    const nameMatch = new RegExp(`name: '${escapeRegExp(subarea)}'`, 'i').exec(
        content
    );
    if (!nameMatch) {
        throw new Error(SUBAREA_NOT_FOUND);
    }
    const start = findEnclosingBrace(content, nameMatch.index);
    return { start, end: findMatchingBrace(content, start) };
};

type InsertionPoint = {
    entryIndent: string;
    insert: (content: string, entryText: string) => string;
};

// Locates where a new battle entry should be spliced in: appended to the
// scope's `battles` array if one exists, otherwise a new `battles` field
// created right before the scope's closing brace.
const findInsertionPoint = (content: string, scope: Range): InsertionPoint => {
    const scopeText = content.slice(scope.start, scope.end);
    const battlesMatch = /battles:\s*\[/.exec(scopeText);

    if (battlesMatch) {
        const battlesKeywordIndex = scope.start + battlesMatch.index;
        const battlesIndent = getIndent(content, battlesKeywordIndex);
        const entryIndent = `${battlesIndent}    `;
        const openBracket = battlesKeywordIndex + battlesMatch[0].length - 1;
        const closeBracket = findMatchingBracket(content, openBracket);
        const closeLineStart = getLineStart(content, closeBracket);

        return {
            entryIndent,
            insert: (text, entryText) =>
                text.slice(0, closeLineStart) +
                entryText +
                text.slice(closeLineStart),
        };
    }

    const siblingIndent = `${getIndent(content, scope.start)}    `;
    const entryIndent = `${siblingIndent}    `;
    const closingLineStart = getLineStart(content, scope.end);

    return {
        entryIndent,
        insert: (text, entryText) =>
            text.slice(0, closingLineStart) +
            `${siblingIndent}battles: [\n${entryText}${siblingIndent}],\n` +
            text.slice(closingLineStart),
    };
};

const escapeQuotes = (value: string): string => value.replace(/'/g, "\\'");

// Title-cases a trainer name word by word (e.g. "ty & sue" -> "Ty & Sue"),
// leaving punctuation like "&" and disambiguator digits untouched, unlike
// StringHelpers.toTitleCase which slugs first and would turn "&" into "and".
const toTitleCaseName = (value: string): string =>
    value.replace(
        /\S+/g,
        (word) =>
            `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
    );

const serializeBattle = (battle: PromptedBattle, indent: string): string => {
    const fieldIndent = `${indent}    `;
    const fieldConditionField = battle.fieldCondition
        ? `${fieldIndent}fieldCondition: FieldCondition.${FIELD_CONDITION_KEYS_BY_VALUE.get(battle.fieldCondition)},\n`
        : '';
    const optionalField = battle.isOptional
        ? `${indent}    isOptional: true,\n`
        : '';
    const minibossField = battle.isMiniboss
        ? `${indent}    isMiniboss: true,\n`
        : '';
    const bossField = battle.isBoss ? `${indent}    isBoss: true,\n` : '';
    const trueDoubleField = battle.isTrueDouble
        ? `${indent}    isTrueDouble: true,\n`
        : '';
    const doubleField = battle.isDouble ? `${indent}    isDouble: true,\n` : '';
    const tagField = battle.isTag ? `${indent}    isTag: true,\n` : '';

    return (
        `${indent}{\n` +
        optionalField +
        minibossField +
        bossField +
        trueDoubleField +
        doubleField +
        tagField +
        `${indent}    battleKey: '${escapeQuotes(battle.battleKey)}',\n` +
        fieldConditionField +
        `${indent}    x: ${battle.x},\n` +
        `${indent}    y: ${battle.y},\n` +
        `${indent}},\n`
    );
};

const promptCoordinate = async (
    rl: Interface,
    label: string
): Promise<number> => {
    let value = NaN;
    while (!Number.isFinite(value)) {
        value = Number((await rl.question(`${label}: `)).trim());
        if (!Number.isFinite(value)) {
            logError(`  That is not a valid ${label}.`);
        }
    }
    return value;
};

const promptFieldCondition = async (rl: Interface): Promise<FieldCondition> => {
    while (true) {
        const raw = (await rl.question('Field condition: ')).trim();
        const fieldCondition = FIELD_CONDITION_NAMES.find(
            (candidate) => candidate.toLowerCase() === raw.toLowerCase()
        );
        if (!fieldCondition) {
            logError('  That is not a valid field condition.');
            continue;
        }
        return fieldCondition;
    }
};

const promptTrainerClass = async (
    rl: Interface,
    validTrainerClasses: Set<string>
): Promise<string> => {
    while (true) {
        const raw = (await rl.question('Trainer class: ')).trim();
        const slug = StringHelpers.toSlug(raw);
        if (!validTrainerClasses.has(slug)) {
            logError("  That isn't a valid trainer class.");
            continue;
        }
        return slug;
    }
};

const promptBattle = async (
    rl: Interface,
    validTrainerClasses: Set<string>,
    isMiniboss: boolean,
    isBoss: boolean,
    isRequired: boolean,
    isTrueDouble: boolean,
    isDouble: boolean,
    isTag: boolean,
    isFieldEnabled: boolean
): Promise<PromptedBattle> => {
    const trainerClass = await promptTrainerClass(rl, validTrainerClasses);
    const isOptional = !isMiniboss && !isBoss && !isRequired;
    const { displayName } = TRAINER_CLASSES[trainerClass];

    if (isBoss && !BOSS_DISPLAY_NAMES.has(displayName)) {
        throw new Error(BOSS_CLASS_NOT_ALLOWED);
    }
    if (isMiniboss && !MINIBOSS_DISPLAY_NAMES.has(displayName)) {
        throw new Error(MINIBOSS_CLASS_NOT_ALLOWED);
    }

    const name = toTitleCaseName((await rl.question('Trainer name: ')).trim());
    const battleKey = `${trainerClass}::${name}`;

    const x = await promptCoordinate(rl, 'X');
    const y = await promptCoordinate(rl, 'Y');

    const fieldCondition = isFieldEnabled
        ? await promptFieldCondition(rl)
        : undefined;

    return {
        battleKey,
        isTrueDouble,
        isDouble,
        isTag,
        isOptional,
        isMiniboss,
        isBoss,
        fieldCondition,
        x,
        y,
    };
};

// Ensures `name` (e.g. `FieldCondition`) is imported from
// @/lib/static/enums, adding it to an existing import statement from that
// module or creating a new one right after the game import.
const ensureEnumImport = (content: string, name: string): string => {
    const importLineRegex = new RegExp(
        `^import \\{([^}]*)\\} from '${ENUMS_IMPORT_PATH}';$`,
        'm'
    );
    const match = importLineRegex.exec(content);
    if (match) {
        const names = match[1]
            .split(',')
            .map((importedName) => importedName.trim())
            .filter(Boolean);
        if (names.includes(name)) {
            return content;
        }
        names.push(name);
        names.sort();
        return content.replace(
            match[0],
            `import { ${names.join(', ')} } from '${ENUMS_IMPORT_PATH}';`
        );
    }

    const lines = content.split('\n');
    const gameImportIndex = lines.findIndex((line) =>
        line.includes("from '@/lib/data/")
    );
    lines.splice(
        gameImportIndex + 1,
        0,
        `import { ${name} } from '${ENUMS_IMPORT_PATH}';`
    );
    return lines.join('\n');
};

runScript(async () => {
    const args = parseArgs(process.argv.slice(2));
    const gameSlug = StringHelpers.toSlug(GAME_ID);
    const filePath = getLocationPath(gameSlug, args.location);

    if (!fs.existsSync(filePath)) {
        throw new Error(LOCATION_NOT_FOUND);
    }

    const original = fs.readFileSync(filePath, 'utf-8');
    const scope = args.subarea
        ? getSubareaScope(original, args.subarea)
        : getLocationScope(original);
    const insertionPoint = findInsertionPoint(original, scope);

    const validTrainerClasses = new Set(Object.keys(TRAINER_CLASSES));

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let battle: PromptedBattle;
    try {
        battle = await promptBattle(
            rl,
            validTrainerClasses,
            args.isMiniboss,
            args.isBoss,
            args.isRequired,
            args.isTrueDouble,
            args.isDouble,
            args.isTag,
            args.isFieldEnabled
        );
    } finally {
        rl.close();
    }

    const entryText = serializeBattle(battle, insertionPoint.entryIndent);
    let updated = insertionPoint.insert(original, entryText);
    if (battle.fieldCondition) {
        updated = ensureEnumImport(updated, 'FieldCondition');
    }

    fs.writeFileSync(filePath, updated);
    logSuccess(
        `A new battle was added to ${args.location}. Add its trainer info ` +
            `(team, items, etc.) to battles.json under the key "${battle.battleKey}".`
    );
});
