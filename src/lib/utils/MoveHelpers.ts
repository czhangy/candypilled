import { MOVES } from '@/lib/data/moves';
import {
    MoveData,
    MoveValuesByGeneration,
    StatValues,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class MoveHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The move data for `name`, or undefined if no move matches. */
    static getMoveData(name: string): MoveData | undefined {
        return MOVES[StringHelpers.toSlug(name)];
    }

    /** The values `name` had as of `generation`, or undefined if no move matches. */
    static getMoveForGeneration(
        name: string,
        generation: number
    ): MoveValuesByGeneration | undefined {
        const move = MoveHelpers.getMoveData(name);
        if (!move) return undefined;

        return GenerationHelpers.resolveGeneration(
            move.valuesByGeneration,
            generation
        );
    }

    /**
     * The type `name` should render as in `generation`, resolving Hidden
     * Power's IV-dependent type instead of its static "normal" data entry.
     */
    static getMoveType(
        name: string,
        generation: number,
        ivs: StatValues
    ): string | undefined {
        const values = MoveHelpers.getMoveForGeneration(name, generation);
        if (!values) return undefined;

        return StringHelpers.toSlug(name) === 'hidden-power'
            ? MoveHelpers.getHiddenPowerType(ivs)
            : values.type;
    }

    /** Whether `name` is curated as a dangerous move. */
    static isDangerousMove(name: string): boolean {
        return MoveHelpers.getMoveData(name)?.isDangerous ?? false;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

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
