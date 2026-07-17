import { MOVES } from '@/lib/data/moves';
import { MoveData, MoveValuesByGeneration } from '@/lib/static/types';
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

    /** Whether `name` is curated as a dangerous move. */
    static isDangerousMove(name: string): boolean {
        return MoveHelpers.getMoveData(name)?.isDangerous ?? false;
    }
}
