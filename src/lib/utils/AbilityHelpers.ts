import { ABILITIES } from '@/lib/data/abilities';
import { AbilityData, AbilityValuesByGeneration } from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class AbilityHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The ability data for `name`, or undefined if no ability matches. */
    static getAbilityData(name: string): AbilityData | undefined {
        return ABILITIES[StringHelpers.toSlug(name)];
    }

    /** The values `name` had as of `generation`, or undefined if no ability matches. */
    static getAbilityForGeneration(
        name: string,
        generation: number
    ): AbilityValuesByGeneration | undefined {
        const ability = AbilityHelpers.getAbilityData(name);
        if (!ability) return undefined;

        return GenerationHelpers.resolveGeneration(
            ability.valuesByGeneration,
            generation
        );
    }
}
