import { ABILITIES } from '@/lib/data/abilities';
import { AbilityData, AbilityValuesByGeneration } from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';

export default class AbilityHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The ability data for `slug`, or undefined if no ability matches. */
    static getAbilityData(slug: string): AbilityData | undefined {
        return ABILITIES[slug];
    }

    /** The ability data for PokeAPI's numeric `id`, or undefined if no ability matches. */
    static getAbilityById(id: number): AbilityData | undefined {
        return Object.values(ABILITIES).find((ability) => ability.id === id);
    }

    /** Every ability introduced by generation or earlier, sorted alphabetically by display name. */
    static getAllAbilities(generation: number): string[] {
        return Object.values(ABILITIES)
            .filter((ability) => ability.introducedInGeneration <= generation)
            .map((ability) => ability.name)
            .sort((a, b) => a.localeCompare(b));
    }

    /** Whether `slug` is curated as a dangerous ability. */
    static isDangerousAbility(slug: string): boolean {
        return AbilityHelpers.getAbilityData(slug)?.isDangerous ?? false;
    }

    /** The values `slug` had as of `generation`, or undefined if no ability matches. */
    static getAbilityForGeneration(
        slug: string,
        generation: number
    ): AbilityValuesByGeneration | undefined {
        const ability = AbilityHelpers.getAbilityData(slug);
        if (!ability) return undefined;

        return GenerationHelpers.resolveGeneration(
            ability.valuesByGeneration,
            generation
        );
    }
}
