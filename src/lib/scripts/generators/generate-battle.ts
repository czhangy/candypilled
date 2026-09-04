import fs from 'fs';
import path from 'path';
import { createInterface, Interface } from 'readline/promises';
import { logError, logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE =
    'Usage: npm run gen:battle <game> <location> [subarea] ' +
    '[--miniboss] [--boss] [--required] [--true] [--double] [--tag] [--field]';
const LOCATION_NOT_FOUND = 'That location does not exist.';
const SUBAREA_NOT_FOUND = 'That subarea does not exist on this location.';
const ENUMS_IMPORT_PATH = '@/lib/static/enums';
const FIELD_CONDITION_NAMES = Object.values(FieldCondition);
// FieldCondition's keys don't all match their values (e.g. RemovableFog =
// 'Removable Fog'), so the generated `FieldCondition.<Key>` reference has to
// be looked up from the prompted display value rather than assumed equal.
const FIELD_CONDITION_KEYS_BY_VALUE = new Map(
    Object.entries(FieldCondition).map(([key, value]) => [value, key])
);

type BattleArgs = {
    game: string;
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

// Only the map placement is scaffolded here — a battle's trainer info
// (team, items, metadata, etc.) lives in battles.ts, keyed by battleKey,
// and isn't something this generator writes. `metadata` is still prompted
// so it can be printed for the user to paste into that BattleData entry.
type PromptedBattle = {
    battleKey: string;
    metadata: BattleMetadata[];
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
    const [game, location, subarea] = argv.filter(
        (arg) => !FLAGS.includes(arg)
    );
    if (!game || !location) {
        throw new Error(USAGE);
    }
    return {
        game,
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

const BATTLE_METADATA_KEYS_BY_VALUE = new Map(
    Object.entries(BattleMetadata).map(([key, value]) => [value, key])
);

const serializeBattle = (battle: PromptedBattle, indent: string): string => {
    const fieldIndent = `${indent}    `;
    const fieldConditionField = battle.fieldCondition
        ? `${fieldIndent}fieldCondition: FieldCondition.${FIELD_CONDITION_KEYS_BY_VALUE.get(battle.fieldCondition)},\n`
        : '';

    return (
        `${indent}{\n` +
        `${indent}    battleKey: '${escapeQuotes(battle.battleKey)}',\n` +
        fieldConditionField +
        `${indent}    x: ${battle.x},\n` +
        `${indent}    y: ${battle.y},\n` +
        `${indent}},\n`
    );
};

const serializeMetadata = (metadata: BattleMetadata[]): string =>
    `[${metadata
        .map(
            (value) =>
                `BattleMetadata.${BATTLE_METADATA_KEYS_BY_VALUE.get(value)}`
        )
        .join(', ')}]`;

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

const promptBattleKey = async (rl: Interface): Promise<string> => {
    while (true) {
        const raw = (await rl.question('Battle key: ')).trim();
        if (raw) return raw;
        logError('  Battle key is required.');
    }
};

const promptBattle = async (
    rl: Interface,
    isMiniboss: boolean,
    isBoss: boolean,
    isRequired: boolean,
    isTrueDouble: boolean,
    isDouble: boolean,
    isTag: boolean,
    isFieldEnabled: boolean
): Promise<PromptedBattle> => {
    const battleKey = await promptBattleKey(rl);
    const isOptional = !isMiniboss && !isBoss && !isRequired;

    const x = await promptCoordinate(rl, 'X');
    const y = await promptCoordinate(rl, 'Y');

    const fieldCondition = isFieldEnabled
        ? await promptFieldCondition(rl)
        : undefined;

    const metadata = [
        isOptional && BattleMetadata.Optional,
        isMiniboss && BattleMetadata.Miniboss,
        isBoss && BattleMetadata.Boss,
        isTrueDouble && BattleMetadata.TrueDouble,
        isDouble && BattleMetadata.Double,
        isTag && BattleMetadata.Tag,
    ].filter((value): value is BattleMetadata => value !== false);

    return {
        battleKey,
        metadata,
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
    const gameSlug = StringHelpers.toSlug(args.game);
    const filePath = getLocationPath(gameSlug, args.location);

    if (!fs.existsSync(filePath)) {
        throw new Error(LOCATION_NOT_FOUND);
    }

    const original = fs.readFileSync(filePath, 'utf-8');
    const scope = args.subarea
        ? getSubareaScope(original, args.subarea)
        : getLocationScope(original);
    const insertionPoint = findInsertionPoint(original, scope);

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let battle: PromptedBattle;
    try {
        battle = await promptBattle(
            rl,
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
            `to battles.ts under the key "${battle.battleKey}", including ` +
            `metadata: ${serializeMetadata(battle.metadata)}.`
    );
});
