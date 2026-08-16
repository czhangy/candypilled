import {
    AbilityData,
    AbilityValuesByGeneration,
    GameDataSource,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';

export default class AbilityHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The ability data for `slug` in dataSource, or undefined if no ability matches. */
    static getAbilityData(
        dataSource: GameDataSource,
        slug: string
    ): AbilityData | undefined {
        return dataSource.abilities[slug];
    }

    /** The ability data for PokeAPI's numeric `id` in dataSource, or undefined if no ability matches. */
    static getAbilityById(
        dataSource: GameDataSource,
        id: number
    ): AbilityData | undefined {
        return Object.values(dataSource.abilities).find(
            (ability) => ability.id === id
        );
    }

    /** Every ability in dataSource introduced by generation or earlier, sorted alphabetically by display name. */
    static getAllAbilities(
        dataSource: GameDataSource,
        generation: number
    ): string[] {
        return Object.values(dataSource.abilities)
            .filter((ability) => ability.introducedInGeneration <= generation)
            .map((ability) => ability.name)
            .sort((a, b) => a.localeCompare(b));
    }

    /** Whether `slug` in dataSource is curated as a dangerous ability. */
    static isDangerousAbility(
        dataSource: GameDataSource,
        slug: string
    ): boolean {
        return (
            AbilityHelpers.getAbilityData(dataSource, slug)?.isDangerous ??
            false
        );
    }

    /** The values `slug` had as of `generation` in dataSource, or undefined if no ability matches. */
    static getAbilityForGeneration(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): AbilityValuesByGeneration | undefined {
        const ability = AbilityHelpers.getAbilityData(dataSource, slug);
        if (!ability) return undefined;

        return GenerationHelpers.resolveGeneration(
            ability.valuesByGeneration,
            generation
        );
    }
}
