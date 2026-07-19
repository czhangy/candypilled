import fs from 'fs';
import path from 'path';
import { createInterface, Interface } from 'readline/promises';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import { logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { CLASSES_SLUGGED_BY_NAME } from '@/lib/static/constants';
import { Nature } from '@/lib/static/enums';
import { AbilitySlot } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE = 'Usage: npm run gen:battle <location> [subarea]';
const LOCATION_NOT_FOUND = 'That location does not exist.';
const SUBAREA_NOT_FOUND = 'That subarea does not exist on this location.';
const NATURE_IMPORT = "import { Nature } from '@/lib/static/enums';";
const MAX_TEAM_SIZE = 6;
const DEFAULT_ABILITY_SLOT = 1;
const NATURE_NAMES = Object.values(Nature);

type BattleArgs = {
    location: string;
    subarea?: string;
};

type Range = {
    start: number;
    end: number;
};

type PromptedPokemon = {
    name: string;
    ability: AbilitySlot;
    level: number;
    nature: Nature;
};

type PromptedBattle = {
    trainerClass: string;
    name: string;
    team: PromptedPokemon[];
};

const parseArgs = (argv: string[]): BattleArgs => {
    const [location, subarea] = argv;
    if (!location) {
        throw new Error(USAGE);
    }
    return { location, subarea };
};

const getLocationPath = (gameSlug: string, slug: string): string =>
    path.join('src', 'lib', 'games', gameSlug, 'locations', `${slug}.ts`);

// The set of trainer class slugs the generated `trainerClass` field could
// validly take: those with a sprite under public/<game>/trainers, plus the
// classes sprited by trainer name instead of class.
const getValidTrainerClasses = (gameSlug: string): Set<string> => {
    const trainersDir = path.join('public', gameSlug, 'trainers');
    const spritedClasses = fs
        .readdirSync(trainersDir)
        .filter((file) => file.endsWith('.png'))
        .map((file) => path.basename(file, '.png'));
    const sluggedByNameClasses = CLASSES_SLUGGED_BY_NAME.map((name) =>
        StringHelpers.toSlug(name)
    );

    return new Set([...spritedClasses, ...sluggedByNameClasses]);
};

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

const getSubareaScope = (content: string, subarea: string): Range => {
    const nameIndex = content.indexOf(`name: '${subarea}'`);
    if (nameIndex === -1) {
        throw new Error(SUBAREA_NOT_FOUND);
    }
    const start = findEnclosingBrace(content, nameIndex);
    return { start, end: findMatchingBrace(content, start) };
};

type InsertionPoint = {
    defaultX: number;
    defaultY: number;
    entryIndent: string;
    insert: (content: string, entryText: string) => string;
};

// The last value of a `key: <number>,` field found in text, used to carry
// the previous battle's coordinates forward as the new entry's default.
const getLastNumericField = (text: string, key: string): number | null => {
    const regex = new RegExp(`${key}:\\s*(-?[0-9.]+),`, 'g');
    let last: string | null = null;
    for (const match of text.matchAll(regex)) {
        last = match[1];
    }
    return last === null ? null : Number(last);
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
        const arrayContent = content.slice(openBracket, closeBracket);

        return {
            defaultX: getLastNumericField(arrayContent, 'x') ?? 0,
            defaultY: getLastNumericField(arrayContent, 'y') ?? 0,
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
        defaultX: 0,
        defaultY: 0,
        entryIndent,
        insert: (text, entryText) =>
            text.slice(0, closingLineStart) +
            `${siblingIndent}battles: [\n${entryText}${siblingIndent}],\n` +
            text.slice(closingLineStart),
    };
};

const escapeQuotes = (value: string): string => value.replace(/'/g, "\\'");

const serializePokemon = (pokemon: PromptedPokemon, indent: string): string => {
    return (
        `${indent}{\n` +
        `${indent}    name: '${escapeQuotes(pokemon.name)}',\n` +
        `${indent}    ability: ${pokemon.ability},\n` +
        `${indent}    level: ${pokemon.level},\n` +
        `${indent}    nature: Nature.${pokemon.nature},\n` +
        `${indent}},\n`
    );
};

const serializeBattle = (
    battle: PromptedBattle,
    indent: string,
    x: number,
    y: number
): string => {
    const pokemonIndent = `${indent}        `;
    const team = battle.team
        .map((pokemon) => serializePokemon(pokemon, pokemonIndent))
        .join('');
    const teamField = battle.team.length
        ? `${indent}    team: [\n${team}${indent}    ],\n`
        : '';

    return (
        `${indent}{\n` +
        `${indent}    isOptional: true,\n` +
        `${indent}    trainerClass: '${escapeQuotes(battle.trainerClass)}',\n` +
        `${indent}    name: '${escapeQuotes(battle.name)}',\n` +
        teamField +
        `${indent}    x: ${x},\n` +
        `${indent}    y: ${y},\n` +
        `${indent}},\n`
    );
};

const promptPokemon = async (
    rl: Interface,
    index: number
): Promise<PromptedPokemon | null> => {
    let name: string | null = null;
    while (name === null) {
        const raw = (
            await rl.question(`  Pokemon ${index} name (blank to stop): `)
        ).trim();
        if (!raw) return null;

        const pokemon = PokemonHelpers.getPokemonData(raw);
        if (!pokemon) {
            console.log("  That isn't a valid Pokemon.");
            continue;
        }
        name = pokemon.name;
    }

    const ability: AbilitySlot = DEFAULT_ABILITY_SLOT;

    let level = NaN;
    while (!Number.isInteger(level) || level <= 0) {
        level = Number((await rl.question('  Level: ')).trim());
    }

    let nature: Nature | null = null;
    while (nature === null) {
        const raw = (
            await rl.question(`  Nature (${NATURE_NAMES.join('/')}): `)
        ).trim();
        nature =
            NATURE_NAMES.find(
                (candidate) => candidate.toLowerCase() === raw.toLowerCase()
            ) ?? null;
    }

    return { name, ability, level, nature };
};

const promptBattle = async (
    rl: Interface,
    validTrainerClasses: Set<string>
): Promise<PromptedBattle> => {
    let trainerClass: string | null = null;
    while (trainerClass === null) {
        const raw = (await rl.question('Trainer class: ')).trim();
        const slug = StringHelpers.toSlug(raw);
        if (!validTrainerClasses.has(slug)) {
            console.log("  That isn't a valid trainer class.");
            continue;
        }
        trainerClass = StringHelpers.toTitleCase(slug);
    }

    const name = (await rl.question('Trainer name: ')).trim();

    const team: PromptedPokemon[] = [];
    for (let i = 1; i <= MAX_TEAM_SIZE; i++) {
        const pokemon = await promptPokemon(rl, i);
        if (!pokemon) break;
        team.push(pokemon);
    }

    return { trainerClass, name, team };
};

const ensureNatureImport = (content: string): string => {
    if (/from '@\/lib\/static\/enums'/.test(content)) {
        return content;
    }

    const lines = content.split('\n');
    const gameImportIndex = lines.findIndex((line) =>
        line.includes("from '@/lib/games/")
    );
    lines.splice(gameImportIndex + 1, 0, NATURE_IMPORT);
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

    const validTrainerClasses = getValidTrainerClasses(gameSlug);

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let battle: PromptedBattle;
    try {
        battle = await promptBattle(rl, validTrainerClasses);
    } finally {
        rl.close();
    }

    const entryText = serializeBattle(
        battle,
        insertionPoint.entryIndent,
        insertionPoint.defaultX,
        insertionPoint.defaultY
    );
    const updated = ensureNatureImport(
        insertionPoint.insert(original, entryText)
    );

    fs.writeFileSync(filePath, updated);
    logSuccess(`A new battle was added to ${args.location}.`);
});
