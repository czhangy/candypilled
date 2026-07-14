import { MOVES } from '@/lib/data/moves';
import { MoveData, MoveValuesByGeneration } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class MoveHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static get(name: string): MoveData | undefined {
        return MOVES[StringHelpers.toSlug(name)];
    }

    static getValues(
        name: string,
        generation: number
    ): MoveValuesByGeneration | undefined {
        const move = MoveHelpers.get(name);
        if (!move) return undefined;

        return [...move.valuesByGeneration]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation);
    }
}
