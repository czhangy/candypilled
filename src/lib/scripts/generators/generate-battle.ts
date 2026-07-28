import fs from 'fs';
import path from 'path';
import { createInterface, Interface } from 'readline/promises';
import { TRAINER_CLASSES } from '@/lib/data/trainer-classes';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import { logError, logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { FieldCondition, Nature } from '@/lib/static/enums';
import { AbilitySlot } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE =
    'Usage: npm run gen:battle <location> [subarea] [--starter] ' +
    '[--miniboss] [--boss] [--required] [--true] [--double] [--tag] ' +
    '[--moves] [--items] [--field] [--dv] ' +
    '(--miniboss/--boss imply --moves and --dv)';
const GAME_NOT_FOUND = 'That game has no entry in STARTERS_BY_GAME.';
const LOCATION_NOT_FOUND = 'That location does not exist.';
const SUBAREA_NOT_FOUND = 'That subarea does not exist on this location.';
const BOSS_CLASS_NOT_ALLOWED =
    '--boss requires the trainer class to be Leader, Galactic Boss, Elite Four, or Champion.';
const MINIBOSS_CLASS_NOT_ALLOWED =
    '--miniboss requires the trainer class to be Galactic Boss, Commander, or PKMN Trainer.';
const ENUMS_IMPORT_PATH = '@/lib/static/enums';
const MAX_TEAM_SIZE = 6;
const MAX_MOVES = 4;
const DEFAULT_ABILITY_SLOT = 1;
const MAX_DV = 255;
const MAX_IV = 31;
const NATURE_NAMES = Object.values(Nature);
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
    isStarterDependent: boolean;
    isMiniboss: boolean;
    isBoss: boolean;
    isRequired: boolean;
    isTrueDouble: boolean;
    isDouble: boolean;
    isTag: boolean;
    isMovesEnabled: boolean;
    isItemsEnabled: boolean;
    isFieldEnabled: boolean;
    isDvEnabled: boolean;
};

type Range = {
    start: number;
    end: number;
};

type PromptedPokemon = {
    slug: string;
    ability: AbilitySlot;
    level: number;
    nature: Nature;
    moves?: string[];
};

type PromptedTeamPokemon = PromptedPokemon & {
    gender?: 'male' | 'female';
    ivs?: number;
};

type PromptedItem = {
    name: string;
    count: number;
};

type PromptedBattleTrainer = {
    trainerClass: string;
    name: string;
    team?: PromptedTeamPokemon[];
    teamsByStarter?: Record<string, PromptedTeamPokemon[]>;
};

type PromptedBattle = {
    trainerClass: string;
    isTrueDouble: boolean;
    isDouble: boolean;
    isTag: boolean;
    isOptional: boolean;
    isMiniboss: boolean;
    isBoss: boolean;
    name: string;
    team?: PromptedTeamPokemon[];
    teamsByStarter?: Record<string, PromptedTeamPokemon[]>;
    secondTrainer?: PromptedBattleTrainer;
    items?: PromptedItem[];
    fieldCondition?: FieldCondition;
    x: number;
    y: number;
};

const FLAGS = [
    '--starter',
    '--miniboss',
    '--boss',
    '--required',
    '--true',
    '--double',
    '--tag',
    '--moves',
    '--items',
    '--field',
    '--dv',
];

const parseArgs = (argv: string[]): BattleArgs => {
    const isStarterDependent = argv.includes('--starter');
    const isMiniboss = argv.includes('--miniboss');
    const isBoss = argv.includes('--boss');
    const isRequired = argv.includes('--required');
    const isTrueDouble = argv.includes('--true');
    const isDouble = argv.includes('--double');
    const isTag = argv.includes('--tag');
    const isMovesEnabled = argv.includes('--moves') || isMiniboss || isBoss;
    const isItemsEnabled = argv.includes('--items');
    const isFieldEnabled = argv.includes('--field');
    const isDvEnabled = argv.includes('--dv') || isMiniboss || isBoss;
    const [location, subarea] = argv.filter((arg) => !FLAGS.includes(arg));
    if (!location) {
        throw new Error(USAGE);
    }
    return {
        location,
        subarea,
        isStarterDependent,
        isMiniboss,
        isBoss,
        isRequired,
        isTrueDouble,
        isDouble,
        isTag,
        isMovesEnabled,
        isItemsEnabled,
        isFieldEnabled,
        isDvEnabled,
    };
};

const getLocationPath = (gameSlug: string, slug: string): string =>
    path.join('src', 'lib', 'data', gameSlug, 'locations', `${slug}.ts`);

// Each game's starter slugs, keyed by game slug. Kept separate from the
// `Game` objects in src/lib/data since those transitively import every
// location's map image, which tsx (running outside the Next.js bundler)
// can't load.
const STARTERS_BY_GAME: Record<string, string[]> = {
    platinum: ['turtwig', 'chimchar', 'piplup'],
};

const getStarters = (gameSlug: string): string[] => {
    const starters = STARTERS_BY_GAME[gameSlug];
    if (!starters) {
        throw new Error(GAME_NOT_FOUND);
    }
    return starters;
};

// The set of battle item slugs the generated `items` field could validly
// take: those with a sprite under public/battle-items.
const getValidItemSlugs = (): Set<string> => {
    const itemsDir = path.join('public', 'battle-items');
    return new Set(
        fs
            .readdirSync(itemsDir)
            .filter((file) => file.endsWith('.png'))
            .map((file) => path.basename(file, '.png'))
    );
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

const serializePokemon = (
    pokemon: PromptedTeamPokemon,
    indent: string
): string => {
    return (
        `${indent}{\n` +
        `${indent}    slug: '${escapeQuotes(pokemon.slug)}',\n` +
        `${indent}    ability: ${pokemon.ability},\n` +
        (pokemon.gender ? `${indent}    gender: '${pokemon.gender}',\n` : '') +
        (pokemon.ivs ? `${indent}    ivs: ${pokemon.ivs},\n` : '') +
        `${indent}    level: ${pokemon.level},\n` +
        `${indent}    nature: Nature.${pokemon.nature},\n` +
        (pokemon.moves
            ? `${indent}    moves: [${pokemon.moves
                  .map((move) => `'${escapeQuotes(move)}'`)
                  .join(', ')}],\n`
            : '') +
        `${indent}},\n`
    );
};

// Serializes a `[{...}, ...]` team array, itself indented by `indent`, with
// pokemon entries one level deeper.
const serializeTeam = (team: PromptedTeamPokemon[], indent: string): string => {
    const pokemonIndent = `${indent}    `;
    const pokemon = team
        .map((member) => serializePokemon(member, pokemonIndent))
        .join('');
    return `[\n${pokemon}${indent}]`;
};

const serializeSecondTrainer = (
    secondTrainer: PromptedBattleTrainer,
    indent: string
): string => {
    const fieldIndent = `${indent}    `;
    const teamField = secondTrainer.team
        ? `${fieldIndent}team: ${serializeTeam(secondTrainer.team, fieldIndent)},\n`
        : '';
    const teamsByStarterField = secondTrainer.teamsByStarter
        ? `${fieldIndent}teamsByStarter: {\n` +
          Object.entries(secondTrainer.teamsByStarter)
              .map(
                  ([starter, team]) =>
                      `${fieldIndent}    ${starter}: ${serializeTeam(team, `${fieldIndent}    `)},\n`
              )
              .join('') +
          `${fieldIndent}},\n`
        : '';

    return (
        `${indent}secondTrainer: {\n` +
        `${fieldIndent}trainerClass: '${escapeQuotes(secondTrainer.trainerClass)}',\n` +
        `${fieldIndent}name: '${escapeQuotes(secondTrainer.name)}',\n` +
        teamField +
        teamsByStarterField +
        `${indent}},\n`
    );
};

const serializeItems = (items: PromptedItem[], indent: string): string => {
    const itemIndent = `${indent}    `;
    const entries = items
        .map(
            (item) =>
                `${itemIndent}{ count: ${item.count}, name: '${escapeQuotes(item.name)}' },\n`
        )
        .join('');
    return `[\n${entries}${indent}]`;
};

const serializeBattle = (battle: PromptedBattle, indent: string): string => {
    const fieldIndent = `${indent}    `;
    const teamField = battle.team
        ? `${fieldIndent}team: ${serializeTeam(battle.team, fieldIndent)},\n`
        : '';
    const teamsByStarterField = battle.teamsByStarter
        ? `${fieldIndent}teamsByStarter: {\n` +
          Object.entries(battle.teamsByStarter)
              .map(
                  ([starter, team]) =>
                      `${fieldIndent}    ${starter}: ${serializeTeam(team, `${fieldIndent}    `)},\n`
              )
              .join('') +
          `${fieldIndent}},\n`
        : '';
    const secondTrainerField = battle.secondTrainer
        ? serializeSecondTrainer(battle.secondTrainer, fieldIndent)
        : '';
    const itemsField = battle.items
        ? `${fieldIndent}items: ${serializeItems(battle.items, fieldIndent)},\n`
        : '';
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
        `${indent}    trainerClass: '${escapeQuotes(battle.trainerClass)}',\n` +
        `${indent}    name: '${escapeQuotes(battle.name)}',\n` +
        teamField +
        teamsByStarterField +
        secondTrainerField +
        itemsField +
        fieldConditionField +
        `${indent}    x: ${battle.x},\n` +
        `${indent}    y: ${battle.y},\n` +
        `${indent}},\n`
    );
};

// Prompts for up to MAX_MOVES move slugs. A blank first move is invalid and
// re-prompts; a blank move after that ends the list early and moves on to
// the next Pokémon.
const promptMoves = async (rl: Interface): Promise<string[]> => {
    const moves: string[] = [];
    for (let i = 1; i <= MAX_MOVES; i++) {
        while (true) {
            const raw = (await rl.question(`  Move ${i}: `)).trim();
            if (!raw) {
                if (i === 1) {
                    logError('  The first move is required.');
                    continue;
                }
                return moves;
            }

            const slug = StringHelpers.toSlug(raw);
            if (!MoveHelpers.getMoveData(slug)) {
                logError("  That isn't a valid move.");
                continue;
            }

            moves.push(slug);
            break;
        }
    }
    return moves;
};

// Prompts for battle items: a slug validated against public/battle-items and
// a count. A blank first slug is invalid and re-prompts; a blank slug after
// that ends the list.
const promptItems = async (
    rl: Interface,
    validItemSlugs: Set<string>
): Promise<PromptedItem[]> => {
    const items: PromptedItem[] = [];
    while (true) {
        const raw = (
            await rl.question(`  Item ${items.length + 1} slug: `)
        ).trim();
        if (!raw) {
            if (items.length === 0) {
                logError('  The first item is required.');
                continue;
            }
            return items;
        }

        const slug = StringHelpers.toSlug(raw);
        if (!validItemSlugs.has(slug)) {
            logError("  That isn't a valid item.");
            continue;
        }

        let count = NaN;
        while (!Number.isInteger(count) || count <= 0) {
            count = Number((await rl.question('  Count: ')).trim());
            if (!Number.isInteger(count) || count <= 0) {
                logError('  That is not a valid count.');
            }
        }

        items.push({ name: StringHelpers.toTitleCase(slug), count });
    }
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

// Prompts for a DV (0-MAX_DV) and converts it to the equivalent IV. A DV of
// 0 maps to no ivs override (the default IV is used instead).
const promptIvs = async (rl: Interface): Promise<number | undefined> => {
    let dv = NaN;
    while (!Number.isInteger(dv) || dv < 0 || dv > MAX_DV) {
        dv = Number((await rl.question('DV: ')).trim());
        if (!Number.isInteger(dv) || dv < 0 || dv > MAX_DV) {
            logError('  That is not a valid DV.');
        }
    }
    return dv ? Math.floor((dv * MAX_IV) / MAX_DV) : undefined;
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

const promptPokemon = async (
    rl: Interface,
    index: number,
    isMovesEnabled: boolean
): Promise<PromptedPokemon | null> => {
    let slug: string | null = null;
    while (slug === null) {
        const raw = (await rl.question(`  Pokémon ${index} name: `)).trim();
        if (!raw) return null;

        const rawSlug = StringHelpers.toSlug(raw);
        const pokemon =
            PokemonHelpers.getPokemonForms(rawSlug).length === 1
                ? PokemonHelpers.getPokemonData(rawSlug)
                : undefined;
        if (!pokemon) {
            logError("  That isn't a valid Pokémon.");
            continue;
        }
        slug = pokemon.slug;
    }

    const ability: AbilitySlot = DEFAULT_ABILITY_SLOT;

    let level = NaN;
    while (!Number.isInteger(level) || level <= 0) {
        level = Number((await rl.question('  Level: ')).trim());
        if (!Number.isInteger(level) || level <= 0) {
            logError('  That is not a valid level.');
        }
    }

    let nature: Nature | null = null;
    while (nature === null) {
        const raw = (await rl.question('  Nature: ')).trim();
        nature =
            NATURE_NAMES.find(
                (candidate) => candidate.toLowerCase() === raw.toLowerCase()
            ) ?? null;
        if (nature === null) {
            logError('  That is not a valid nature.');
        }
    }

    const moves = isMovesEnabled ? await promptMoves(rl) : undefined;

    return { slug, ability, level, nature, moves };
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

// In Platinum, a trainer's Pokémon doesn't roll its personality value
// randomly like a wild Pokémon: the engine fixes the value's gender byte to
// 120 for a female trainer or 136 for a male trainer, then resolves gender
// the normal way against the species' gender-ratio threshold (out of 256,
// 32 per eighth). A species only actually shares the trainer's own gender
// when that threshold falls strictly between 120 and 136 — true only for an
// exact 50/50 ratio (threshold 127). Any species skewed roughly 75% or more
// toward one gender always produces that gender, regardless of the
// trainer's.
const TRAINER_GENDER_BYTE: Record<'male' | 'female', number> = {
    female: 120,
    male: 136,
};

const resolveTeamMemberGender = (
    slug: string,
    trainerGender: 'male' | 'female'
): 'male' | 'female' | undefined => {
    const genderRate = PokemonHelpers.getPokemonData(slug)?.genderRate;
    if (genderRate === undefined || genderRate === -1) return undefined;
    if (genderRate === 0) return 'male';
    if (genderRate === 8) return 'female';

    const threshold = genderRate * 32 - 1;
    return TRAINER_GENDER_BYTE[trainerGender] < threshold ? 'female' : 'male';
};

const promptTeam = async (
    rl: Interface,
    gender: 'male' | 'female',
    ivs: number | undefined,
    isMovesEnabled: boolean
): Promise<PromptedTeamPokemon[]> => {
    const team: PromptedTeamPokemon[] = [];
    for (let i = 1; i <= MAX_TEAM_SIZE; i++) {
        const pokemon = await promptPokemon(rl, i, isMovesEnabled);
        if (!pokemon) break;
        team.push({
            ...pokemon,
            gender: resolveTeamMemberGender(pokemon.slug, gender),
            ivs,
        });
    }
    return team;
};

const promptSecondTrainer = async (
    rl: Interface,
    validTrainerClasses: Set<string>,
    starters: string[],
    isStarterDependent: boolean,
    isMovesEnabled: boolean,
    isDvEnabled: boolean
): Promise<PromptedBattleTrainer> => {
    logSuccess('  Second trainer:');
    const trainerClass = await promptTrainerClass(rl, validTrainerClasses);
    const name = toTitleCaseName(
        (await rl.question('Second trainer name: ')).trim()
    );
    const gender = TRAINER_CLASSES[trainerClass].gender;

    const ivs = isDvEnabled ? await promptIvs(rl) : undefined;

    const team = isStarterDependent
        ? undefined
        : await promptTeam(rl, gender, ivs, isMovesEnabled);

    const teamsByStarter: Record<string, PromptedTeamPokemon[]> | undefined =
        isStarterDependent ? {} : undefined;
    if (teamsByStarter) {
        for (const starter of starters) {
            logSuccess(
                `  Second trainer's team for ${StringHelpers.toTitleCase(starter)}:`
            );
            teamsByStarter[starter] = await promptTeam(
                rl,
                gender,
                ivs,
                isMovesEnabled
            );
        }
    }

    return { trainerClass, name, team, teamsByStarter };
};

const promptBattle = async (
    rl: Interface,
    validTrainerClasses: Set<string>,
    validItemSlugs: Set<string>,
    starters: string[],
    isStarterDependent: boolean,
    isMiniboss: boolean,
    isBoss: boolean,
    isRequired: boolean,
    isTrueDouble: boolean,
    isDouble: boolean,
    isTag: boolean,
    isMovesEnabled: boolean,
    isItemsEnabled: boolean,
    isFieldEnabled: boolean,
    isDvEnabled: boolean
): Promise<PromptedBattle> => {
    const trainerClass = await promptTrainerClass(rl, validTrainerClasses);
    const isOptional = !isMiniboss && !isBoss && !isRequired;
    const { displayName, gender } = TRAINER_CLASSES[trainerClass];

    if (isBoss && !BOSS_DISPLAY_NAMES.has(displayName)) {
        throw new Error(BOSS_CLASS_NOT_ALLOWED);
    }
    if (isMiniboss && !MINIBOSS_DISPLAY_NAMES.has(displayName)) {
        throw new Error(MINIBOSS_CLASS_NOT_ALLOWED);
    }

    const name = toTitleCaseName((await rl.question('Trainer name: ')).trim());

    const x = await promptCoordinate(rl, 'X');
    const y = await promptCoordinate(rl, 'Y');

    const ivs = isDvEnabled ? await promptIvs(rl) : undefined;

    const fieldCondition = isFieldEnabled
        ? await promptFieldCondition(rl)
        : undefined;

    const items = isItemsEnabled
        ? await promptItems(rl, validItemSlugs)
        : undefined;

    const team = isStarterDependent
        ? undefined
        : await promptTeam(rl, gender, ivs, isMovesEnabled);

    const teamsByStarter: Record<string, PromptedTeamPokemon[]> | undefined =
        isStarterDependent ? {} : undefined;
    if (teamsByStarter) {
        for (const starter of starters) {
            logSuccess(`  Team for ${StringHelpers.toTitleCase(starter)}:`);
            teamsByStarter[starter] = await promptTeam(
                rl,
                gender,
                ivs,
                isMovesEnabled
            );
        }
    }

    const secondTrainer =
        isTag || isDouble
            ? await promptSecondTrainer(
                  rl,
                  validTrainerClasses,
                  starters,
                  isStarterDependent,
                  isMovesEnabled,
                  isDvEnabled
              )
            : undefined;

    return {
        trainerClass,
        isTrueDouble,
        isDouble,
        isTag,
        isOptional,
        isMiniboss,
        isBoss,
        name,
        team,
        teamsByStarter,
        secondTrainer,
        items,
        fieldCondition,
        x,
        y,
    };
};

// Ensures `name` (e.g. `Nature`, `FieldCondition`) is imported from
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
    const validItemSlugs = getValidItemSlugs();
    const starters = getStarters(gameSlug);

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let battle: PromptedBattle;
    try {
        battle = await promptBattle(
            rl,
            validTrainerClasses,
            validItemSlugs,
            starters,
            args.isStarterDependent,
            args.isMiniboss,
            args.isBoss,
            args.isRequired,
            args.isTrueDouble,
            args.isDouble,
            args.isTag,
            args.isMovesEnabled,
            args.isItemsEnabled,
            args.isFieldEnabled,
            args.isDvEnabled
        );
    } finally {
        rl.close();
    }

    const entryText = serializeBattle(battle, insertionPoint.entryIndent);
    let updated = ensureEnumImport(
        insertionPoint.insert(original, entryText),
        'Nature'
    );
    if (battle.fieldCondition) {
        updated = ensureEnumImport(updated, 'FieldCondition');
    }

    fs.writeFileSync(filePath, updated);
    logSuccess(`A new battle was added to ${args.location}.`);
});
