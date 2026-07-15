import { ABILITIES } from '@/lib/data/abilities';
import { AbilityData, AbilityValuesByGeneration } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class AbilityHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static get(name: string): AbilityData | undefined {
        return ABILITIES[StringHelpers.toSlug(name)];
    }

    static getValues(
        name: string,
        generation: number
    ): AbilityValuesByGeneration | undefined {
        const ability = AbilityHelpers.get(name);
        if (!ability) return undefined;

        return [...ability.valuesByGeneration]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation);
    }
}
