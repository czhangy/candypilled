import fs from 'fs';
import path from 'path';
import { createInterface, Interface } from 'readline/promises';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import { logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { Nature } from '@/lib/static/enums';
import { AbilitySlot } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE = 'Usage: npm run gen:battle <location> [subarea]';
const LOCATION_NOT_FOUND = 'That location does not exist.';
const SUBAREA_NOT_FOUND = 'That subarea does not exist on this location.';
const NATURE_IMPORT = "import { Nature } from '@/lib/static/enums';";
const MAX_TEAM_SIZE = 6;
const MAX_MOVES = 4;
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
    moves: string[];
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

    const nameMatch = /^([ \t]*)name:.*$/m.exec(scopeText);
    if (!nameMatch) {
        throw new Error(SUBAREA_NOT_FOUND);
    }
    const siblingIndent = nameMatch[1];
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

const serializePokemon = (pokemon: PromptedPokemon, indent: string): string => {
    const moves = pokemon.moves
        .map((move) => `'${escapeQuotes(move)}'`)
        .join(', ');

    return (
        `${indent}{\n` +
        `${indent}    name: '${escapeQuotes(pokemon.name)}',\n` +
        `${indent}    ability: ${pokemon.ability},\n` +
        `${indent}    level: ${pokemon.level},\n` +
        `${indent}    nature: Nature.${pokemon.nature},\n` +
        `${indent}    moves: [${moves}],\n` +
        `${indent}},\n`
    );
};

const serializeBattle = (battle: PromptedBattle, indent: string): string => {
    const pokemonIndent = `${indent}        `;
    const team = battle.team
        .map((pokemon) => serializePokemon(pokemon, pokemonIndent))
        .join('');
    const teamField = battle.team.length
        ? `${indent}    team: [\n${team}${indent}    ],\n`
        : '';

    return (
        `${indent}{\n` +
        `${indent}    trainerClass: '${escapeQuotes(battle.trainerClass)}',\n` +
        `${indent}    name: '${escapeQuotes(battle.name)}',\n` +
        teamField +
        `${indent}    x: 0,\n` +
        `${indent}    y: 0,\n` +
        `${indent}},\n`
    );
};

const promptPokemon = async (
    rl: Interface,
    index: number
): Promise<PromptedPokemon | null> => {
    const name = (
        await rl.question(`  Pokemon ${index} name (blank to stop): `)
    ).trim();
    if (!name) return null;

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

    const moves: string[] = [];
    for (let i = 1; i <= MAX_MOVES; i++) {
        const move = (
            await rl.question(`  Move ${i} (blank to stop): `)
        ).trim();
        if (!move) break;
        moves.push(move);
    }

    return { name, ability, level, moves, nature };
};

const promptBattle = async (rl: Interface): Promise<PromptedBattle> => {
    const trainerClass = (await rl.question('Trainer class: ')).trim();
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

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let battle: PromptedBattle;
    try {
        battle = await promptBattle(rl);
    } finally {
        rl.close();
    }

    const entryText = serializeBattle(battle, insertionPoint.entryIndent);
    const updated = ensureNatureImport(
        insertionPoint.insert(original, entryText)
    );

    fs.writeFileSync(filePath, updated);
    logSuccess(`A new battle was added to ${args.location}.`);
});
