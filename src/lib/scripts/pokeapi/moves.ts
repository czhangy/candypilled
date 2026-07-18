import fs from 'fs';
import path from 'path';
import {
    buildVersionGroupGenerations,
    sleep,
    toGenerationNumber,
} from '@/lib/scripts/pokeapi/shared';
import { logSuccess, logWarning, runScript } from '@/lib/scripts/utils/helpers';
import { MoveData, MoveValuesByGeneration } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_MOVE_URL = 'https://pokeapi.co/api/v2/move';
// Unlike pokemon.json, this dataset isn't scoped to the current game: moves
// are shared across every game the site will ever support, so every move is
// fetched regardless of which generation introduced it.
const DATA_PATH = path.join('src', 'lib', 'data', 'raw', 'moves.json');
const FETCH_DELAY_MS = 75;
const MOVE_LIST_LIMIT = 2000;

// Shadow moves only exist in the GameCube spin-offs (Colosseum, XD), none of
// which this site supports. They're also the only moves with no PP, so
// excluding them lets `pp` stay a plain `number` everywhere else.
const SHADOW_MOVE_TYPE = 'shadow';

// 1 PP moves (e.g. Sketch) are single-use novelties that clutter the move
// list without being useful to look up.
const MIN_PP = 2;

// `StringHelpers.toTitleCase` joins slug words with a space, so moves whose
// official name keeps a hyphen (e.g. "Will-O-Wisp") need their title-cased
// name corrected here rather than in the shared helper, which is also used
// for names that are correctly space-joined.
const MOVE_NAME_OVERRIDES: Record<string, string> = {
    'will-o-wisp': 'Will-O-Wisp',
    'x-scissor': 'X-Scissor',
    'freeze-dry': 'Freeze-Dry',
    'soft-boiled': 'Soft-Boiled',
    'trick-or-treat': 'Trick-or-Treat',
    'multi-attack': 'Multi-Attack',
    'wake-up-slap': 'Wake-Up Slap',
    'lock-on': 'Lock-On',
    'u-turn': 'U-turn',
    'v-create': 'V-create',
    'double-edge': 'Double-Edge',
    'mud-slap': 'Mud-Slap',
    'topsy-turvy': 'Topsy-Turvy',
    'baby-doll-eyes': 'Baby-Doll Eyes',
    'power-up-punch': 'Power-Up Punch',
    'self-destruct': 'Self-Destruct',
};

// PokeAPI has no concept of "dangerous" moves (ones that can end a run in a
// single unlucky turn, e.g. via self-destruction or a hard-to-play-around
// counter), so this set is curated by hand rather than derived from the API.
const DANGEROUS_MOVES = new Set([
    'explosion',
    'self-destruct',
    'destiny-bond',
    'counter',
    'mirror-coat',
    'metal-burst',
    'bide',
    'pursuit',
    'swords-dance',
    'nasty-plot',
    'bulk-up',
    'tail-glow',
    'calm-mind',
    'dragon-dance',
    'guillotine',
    'sheer-cold',
    'fissure',
    'metronome',
    'quiver-dance',
    'belly-drum',
    'spore',
    'dragon-rage',
    'shell-smash',
    'flail',
    'perish-song',
]);

const writeData = (data: Record<string, MoveData>): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

type NamedApiResource = {
    name: string;
    url: string;
};

const fetchMoveList = async (): Promise<NamedApiResource[]> => {
    const response = await fetch(
        `${POKEAPI_MOVE_URL}?limit=${MOVE_LIST_LIMIT}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch move list from PokeAPI.');
    }

    const body = await response.json();
    return body.results as NamedApiResource[];
};

type RawEffectEntry = {
    short_effect: string;
    language: { name: string };
};

type RawFlavorTextEntry = {
    flavor_text: string;
    language: { name: string };
    version_group: { name: string };
};

type RawPastValue = {
    accuracy: number | null;
    effect_chance: number | null;
    effect_entries: RawEffectEntry[];
    power: number | null;
    pp: number | null;
    type: { name: string } | null;
    version_group: { name: string };
};

type RawMove = {
    name: string;
    accuracy: number | null;
    power: number | null;
    pp: number;
    priority: number;
    damage_class: { name: string };
    type: { name: string };
    generation: { name: string };
    effect_chance: number | null;
    effect_entries: RawEffectEntry[];
    flavor_text_entries: RawFlavorTextEntry[];
    past_values: RawPastValue[];
};

const fetchMove = async (resource: NamedApiResource): Promise<RawMove> => {
    const response = await fetch(resource.url);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch move "${resource.name}" from PokeAPI.`
        );
    }

    return (await response.json()) as RawMove;
};

const toEnglishEffect = (entries: RawEffectEntry[]): string | undefined =>
    entries.find((entry) => entry.language.name === 'en')?.short_effect;

type MoveValues = {
    type: string;
    power: number | null;
    accuracy: number | null;
    pp: number;
    effect: string;
    effectChance: number | null;
};

// PokeAPI's `past_values` entries are diffs against the move's CURRENT
// (top-level) values rather than against the previous historical entry: a
// null field means that field already matched its current value as of that
// entry's version group, not that it carried over from an earlier change.
const buildValuesTimeline = (
    move: RawMove,
    current: MoveValues,
    versionGroupGenerations: Map<string, number>
): { fromGeneration: number; values: MoveValues }[] => {
    const pastEntries = move.past_values
        .map((entry) => ({
            generation:
                versionGroupGenerations.get(entry.version_group.name) ?? 1,
            values: {
                type: entry.type?.name ?? current.type,
                power: entry.power ?? current.power,
                accuracy: entry.accuracy ?? current.accuracy,
                pp: entry.pp ?? current.pp,
                effect: toEnglishEffect(entry.effect_entries) ?? current.effect,
                effectChance: entry.effect_chance ?? current.effectChance,
            },
        }))
        .sort((a, b) => a.generation - b.generation);

    const segments = pastEntries.map((entry, index) => ({
        fromGeneration: index === 0 ? 1 : pastEntries[index - 1].generation + 1,
        values: entry.values,
    }));

    const lastEntry = pastEntries[pastEntries.length - 1];
    segments.push({
        fromGeneration: lastEntry ? lastEntry.generation + 1 : 1,
        values: current,
    });

    return segments;
};

type DescriptionSegment = {
    fromGeneration: number;
    description: string;
};

// Flavor text entries are per version-group (not diffs like past_values), so
// this keeps the first English entry seen for each generation and lets it
// apply forward until the next generation with different text.
const buildDescriptionTimeline = (
    move: RawMove,
    versionGroupGenerations: Map<string, number>
): DescriptionSegment[] => {
    const englishEntries = move.flavor_text_entries
        .filter((entry) => entry.language.name === 'en')
        .map((entry) => ({
            generation:
                versionGroupGenerations.get(entry.version_group.name) ?? 1,
            description: entry.flavor_text.replace(/[\n\f]+/g, ' '),
        }))
        .sort((a, b) => a.generation - b.generation);

    const segments: DescriptionSegment[] = [];
    for (const entry of englishEntries) {
        const previous = segments[segments.length - 1];
        if (previous && previous.fromGeneration === entry.generation) continue;

        segments.push({
            fromGeneration: entry.generation,
            description: entry.description,
        });
    }

    return segments;
};

const isSameSegment = (
    a: MoveValuesByGeneration,
    b: MoveValuesByGeneration
): boolean =>
    a.type === b.type &&
    a.power === b.power &&
    a.accuracy === b.accuracy &&
    a.pp === b.pp &&
    a.effect === b.effect &&
    a.effectChance === b.effectChance &&
    a.description === b.description;

const buildValuesByGeneration = (
    move: RawMove,
    versionGroupGenerations: Map<string, number>
): MoveValuesByGeneration[] => {
    const current: MoveValues = {
        type: move.type.name,
        power: move.power,
        accuracy: move.accuracy,
        pp: move.pp,
        effect: toEnglishEffect(move.effect_entries) ?? '',
        effectChance: move.effect_chance,
    };

    const valuesTimeline = buildValuesTimeline(
        move,
        current,
        versionGroupGenerations
    );
    const descriptionTimeline = buildDescriptionTimeline(
        move,
        versionGroupGenerations
    );

    const valuesAt = (generation: number): MoveValues => {
        let values = current;
        for (const segment of valuesTimeline) {
            if (segment.fromGeneration > generation) break;
            values = segment.values;
        }
        return values;
    };

    const descriptionAt = (generation: number): string => {
        let description = '';
        for (const segment of descriptionTimeline) {
            if (segment.fromGeneration > generation) break;
            description = segment.description;
        }
        return description;
    };

    const boundaries = [
        ...new Set([
            ...valuesTimeline.map((segment) => segment.fromGeneration),
            ...descriptionTimeline.map((segment) => segment.fromGeneration),
        ]),
    ].sort((a, b) => a - b);

    const result: MoveValuesByGeneration[] = [];
    for (const fromGeneration of boundaries) {
        const entry: MoveValuesByGeneration = {
            fromGeneration,
            ...valuesAt(fromGeneration),
            description: descriptionAt(fromGeneration),
        };

        const previous = result[result.length - 1];
        if (previous && isSameSegment(previous, entry)) continue;

        result.push(entry);
    }

    return result;
};

export const fetchMoves = async (): Promise<void> => {
    const versionGroupGenerations =
        await buildVersionGroupGenerations(FETCH_DELAY_MS);
    const moveList = await fetchMoveList();
    const data: Record<string, MoveData> = {};

    for (const resource of moveList) {
        const move = await fetchMove(resource);
        await sleep(FETCH_DELAY_MS);

        if (move.type.name === SHADOW_MOVE_TYPE) {
            logWarning(`Skipping shadow move "${move.name}".`);
            continue;
        }

        if (move.pp < MIN_PP) {
            logWarning(`Skipping 1 PP move "${move.name}".`);
            continue;
        }

        const name =
            MOVE_NAME_OVERRIDES[move.name] ??
            StringHelpers.toTitleCase(move.name);
        data[move.name] = {
            name,
            category: move.damage_class.name,
            priority: move.priority,
            introducedInGeneration: toGenerationNumber(move.generation.name),
            isDangerous: DANGEROUS_MOVES.has(move.name),
            valuesByGeneration: buildValuesByGeneration(
                move,
                versionGroupGenerations
            ),
        };

        logSuccess(`Fetched "${name}".`);
    }

    writeData(data);
};

runScript(fetchMoves);
