import { MOVES } from '@/lib/data/moves';
import {
    LearnsetMethod,
    LearnsetMove,
    MoveData,
    MoveValuesByGeneration,
    StatValues,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';

export default class MoveHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The move data for `slug`, or undefined if no move matches. */
    static getMoveData(slug: string): MoveData | undefined {
        return MOVES[slug];
    }

    /**
     * How a learnset entry's method should read (e.g. "Lv. 15", "TM",
     * "Tutor").
     */
    static getLearnsetMethodLabel(move: LearnsetMove): string {
        return move.method === 'level-up'
            ? `Lv. ${move.level}`
            : MoveHelpers.LEARNSET_METHOD_LABELS[move.method];
    }

    /** The move data for PokeAPI's numeric `id`, or undefined if no move matches. */
    static getMoveById(id: number): MoveData | undefined {
        return Object.values(MOVES).find((move) => move.id === id);
    }

    /** Every move introduced by generation or earlier, sorted alphabetically by display name. */
    static getAllMoves(generation: number): string[] {
        return Object.values(MOVES)
            .filter((move) => move.introducedInGeneration <= generation)
            .map((move) => move.name)
            .sort((a, b) => a.localeCompare(b));
    }

    /** The values `slug` had as of `generation`, or undefined if no move matches. */
    static getMoveForGeneration(
        slug: string,
        generation: number
    ): MoveValuesByGeneration | undefined {
        const move = MoveHelpers.getMoveData(slug);
        if (!move) return undefined;

        return GenerationHelpers.resolveGeneration(
            move.valuesByGeneration,
            generation
        );
    }

    /**
     * The type `slug` should render as in `generation`, resolving Hidden
     * Power's IV-dependent type instead of its static "normal" data entry.
     */
    static getMoveType(
        slug: string,
        generation: number,
        ivs: StatValues
    ): string | undefined {
        const values = MoveHelpers.getMoveForGeneration(slug, generation);
        if (!values) return undefined;

        return slug === 'hidden-power'
            ? MoveHelpers.getHiddenPowerType(ivs)
            : values.type;
    }

    /** Whether `slug` is curated as a dangerous move. */
    static isDangerousMove(slug: string): boolean {
        return MoveHelpers.getMoveData(slug)?.isDangerous ?? false;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly LEARNSET_METHOD_LABELS: Record<
        LearnsetMethod,
        string
    > = {
        'level-up': 'Level',
        machine: 'TM',
        tutor: 'Tutor',
    };

    // Hidden Power's 16 possible types, in the fixed order the formula
    // indexes into.
    private static readonly HIDDEN_POWER_TYPES = [
        'fighting',
        'flying',
        'poison',
        'ground',
        'rock',
        'bug',
        'ghost',
        'steel',
        'fire',
        'water',
        'grass',
        'electric',
        'psychic',
        'ice',
        'dragon',
        'dark',
    ];

    private static getHiddenPowerType(ivs: StatValues): string {
        const lowBit = (iv: number): number => iv % 2;
        const sum =
            lowBit(ivs.hp) * 1 +
            lowBit(ivs.atk) * 2 +
            lowBit(ivs.def) * 4 +
            lowBit(ivs.spe) * 8 +
            lowBit(ivs.spa) * 16 +
            lowBit(ivs.spd) * 32;

        return MoveHelpers.HIDDEN_POWER_TYPES[Math.floor((sum * 15) / 63)];
    }
}
