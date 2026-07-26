import fs from 'fs';
import path from 'path';
import { createInterface, Interface } from 'readline/promises';
import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import { logError, logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { CLASSES_SLUGGED_BY_NAME } from '@/lib/static/constants';
import { FieldCondition, Nature } from '@/lib/static/enums';
import { AbilitySlot } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE =
    'Usage: npm run gen:battle <location> [subarea] [--starter] ' +
    '[--miniboss] [--boss] [--required] [--true] [--double] [--tag] ' +
    '[--moves] [--items] [--field] [--dv]';
const GAME_NOT_FOUND = 'That game has no entry in STARTERS_BY_GAME.';
const LOCATION_NOT_FOUND = 'That location does not exist.';
const SUBAREA_NOT_FOUND = 'That subarea does not exist on this location.';
const GENDER_NOT_FOUND = 'That trainer has no entry in TRAINER_CLASS_GENDERS.';
const ENUMS_IMPORT_PATH = '@/lib/static/enums';
const MAX_TEAM_SIZE = 6;
const MAX_MOVES = 4;
const DEFAULT_ABILITY_SLOT = 1;
const MAX_DV = 255;
const MAX_IV = 31;
const NATURE_NAMES = Object.values(Nature);
const FIELD_CONDITION_NAMES = Object.values(FieldCondition);
const SLUGGED_BY_NAME_CLASS_SLUGS = new Set(
    CLASSES_SLUGGED_BY_NAME.map((name) => StringHelpers.toSlug(name))
);

// Trainer classes that always field two trainers' full parties as a single
// battle, so a generated battle should default isTrueDouble to true, keyed
// by slug.
const TRUE_DOUBLE_TRAINER_CLASS_SLUGS = new Set(
    ['Twins', 'Young Couple', 'Belle & Pa', 'Sis and Bro', 'Old Couple'].map(
        (name) => StringHelpers.toSlug(name)
    )
);

// The gender fielded by each trainer class currently in the game, keyed by
// slug. All classes default to male until real genders are filled in.
const TRAINER_CLASS_GENDERS: Record<string, 'male' | 'female'> = {
    aaron: 'male',
    'ace-trainer-f': 'female',
    'ace-trainer-m': 'male',
    'ace-trainer-snow-f': 'female',
    'ace-trainer-snow-m': 'male',
    'aroma-lady': 'female',
    artist: 'male',
    barry: 'male',
    'battle-girl': 'female',
    beauty: 'female',
    'belle-and-pa': 'male',
    bertha: 'female',
    'bird-keeper': 'male',
    'black-belt': 'male',
    'bug-catcher': 'male',
    byron: 'male',
    camper: 'male',
    candice: 'female',
    collector: 'male',
    cowgirl: 'female',
    'cyclist-f': 'female',
    'cyclist-m': 'male',
    cynthia: 'female',
    cyrus: 'male',
    fantina: 'female',
    fisherman: 'male',
    flint: 'male',
    'galactic-grunt-f': 'female',
    'galactic-grunt-m': 'male',
    'galactic-grunt-m-and-galactic-grunt-m': 'male',
    gardenia: 'female',
    gentleman: 'male',
    guitarist: 'male',
    hiker: 'male',
    jogger: 'male',
    jupiter: 'female',
    lady: 'female',
    lass: 'female',
    lucian: 'male',
    mars: 'female',
    maylene: 'female',
    'ninja-boy': 'male',
    'parasol-lady': 'female',
    pi: 'male',
    picnicker: 'female',
    'pkmn-breeder-f': 'female',
    'pkmn-breeder-m': 'male',
    'pkmn-ranger-f': 'female',
    'pkmn-ranger-m': 'male',
    'poke-kid': 'female',
    'pokefan-f': 'female',
    'pokefan-m': 'male',
    policeman: 'male',
    'psychic-f': 'female',
    'psychic-m': 'male',
    rancher: 'male',
    'rich-boy': 'male',
    roark: 'male',
    roughneck: 'male',
    'ruin-maniac': 'male',
    sailor: 'male',
    saturn: 'male',
    'school-kid-f': 'female',
    'school-kid-m': 'male',
    scientist: 'male',
    socialite: 'female',
    'skier-f': 'female',
    'skier-m': 'male',
    'swimmer-f': 'female',
    'swimmer-m': 'male',
    'tuber-f': 'female',
    'tuber-m': 'male',
    twins: 'female',
    veteran: 'male',
    volkner: 'male',
    waiter: 'male',
    waitress: 'female',
    wake: 'male',
    worker: 'male',
    'young-couple': 'male',
    youngster: 'male',
};

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
    gender: 'male' | 'female';
    ivs?: number;
};

type PromptedItem = {
    name: string;
    count: number;
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
    const isMovesEnabled = argv.includes('--moves');
    const isItemsEnabled = argv.includes('--items');
    const isFieldEnabled = argv.includes('--field');
    const isDvEnabled = argv.includes('--dv');
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
    path.join('src', 'lib', 'games', gameSlug, 'locations', `${slug}.ts`);

// Each game's starter slugs, keyed by game slug. Kept separate from the
// `Game` objects in src/lib/games since those transitively import every
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

const serializePokemon = (
    pokemon: PromptedTeamPokemon,
    indent: string
): string => {
    return (
        `${indent}{\n` +
        `${indent}    slug: '${escapeQuotes(pokemon.slug)}',\n` +
        `${indent}    ability: ${pokemon.ability},\n` +
        `${indent}    gender: '${pokemon.gender}',\n` +
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
    const itemsField = battle.items
        ? `${fieldIndent}items: ${serializeItems(battle.items, fieldIndent)},\n`
        : '';
    const fieldConditionField = battle.fieldCondition
        ? `${fieldIndent}fieldCondition: FieldCondition.${battle.fieldCondition},\n`
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

type PromptedTrainerClass = {
    trainerClass: string;
    slug: string;
};

const promptTrainerClass = async (
    rl: Interface,
    validTrainerClasses: Set<string>
): Promise<PromptedTrainerClass> => {
    while (true) {
        const raw = (await rl.question('Trainer class: ')).trim();
        const slug = StringHelpers.toSlug(raw);
        if (!validTrainerClasses.has(slug)) {
            logError("  That isn't a valid trainer class.");
            continue;
        }
        return { slug, trainerClass: raw };
    }
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
        team.push({ ...pokemon, gender, ivs });
    }
    return team;
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
    const { trainerClass, slug } = await promptTrainerClass(
        rl,
        validTrainerClasses
    );
    isTrueDouble ||= TRUE_DOUBLE_TRAINER_CLASS_SLUGS.has(slug);
    const isOptional = !isMiniboss && !isBoss && !isRequired;
    const isSluggedByName = SLUGGED_BY_NAME_CLASS_SLUGS.has(slug);

    // Classes not fielded by a single named trainer have a fixed gender, so
    // that can be validated right after the trainer class is entered rather
    // than waiting on later prompts.
    if (!isSluggedByName && !TRAINER_CLASS_GENDERS[slug]) {
        throw new Error(GENDER_NOT_FOUND);
    }

    const name = (await rl.question('Trainer name: ')).trim();

    // Classes fielded by a single named trainer (e.g. Leader, Champion) have
    // no gender of their own; fall back to the specific trainer's name,
    // stripping a trailing disambiguator (e.g. "Barry 2") some repeat
    // battles use to stay unique within a location.
    const genderSlug = isSluggedByName
        ? StringHelpers.toSlug(name.replace(/\s+\d+$/, ''))
        : slug;
    const gender = TRAINER_CLASS_GENDERS[genderSlug];
    if (!gender) {
        throw new Error(GENDER_NOT_FOUND);
    }

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
        line.includes("from '@/lib/games/")
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

    const validTrainerClasses = getValidTrainerClasses(gameSlug);
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
