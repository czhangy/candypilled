import {
    BoxComparison,
    BoxFilters,
    CaughtPokemon,
    GameDataSource,
} from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

export default class BoxFilterHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The filters with nothing selected, which every Pokémon matches. */
    static readonly EMPTY: BoxFilters = {
        level: null,
        stat: null,
        tm: null,
        type: null,
    };

    /** How many of filters are currently set. */
    static countActive(filters: BoxFilters): number {
        return Object.values(filters).filter((filter) => filter !== null)
            .length;
    }

    /**
     * Whether pokemon satisfies every set filter. version is the game's
     * PokeAPI version group slug, used to look up TM/HM learnsets.
     */
    static matches(
        pokemon: CaughtPokemon,
        filters: BoxFilters,
        dataSource: GameDataSource,
        generation: number,
        version: string
    ): boolean {
        const displaySlug = PokemonHelpers.getDisplaySlug(dataSource, pokemon);

        return (
            BoxFilterHelpers.matchesComparison(filters.level, pokemon.level) &&
            BoxFilterHelpers.matchesType(
                filters.type,
                displaySlug,
                dataSource,
                generation
            ) &&
            BoxFilterHelpers.matchesStat(
                filters.stat,
                pokemon,
                dataSource,
                generation
            ) &&
            BoxFilterHelpers.matchesTm(
                filters.tm,
                displaySlug,
                dataSource,
                version
            )
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static matchesComparison(
        comparison: BoxComparison | null,
        value: number
    ): boolean {
        if (comparison === null) return true;

        return comparison.operator === '<'
            ? value < comparison.value
            : value > comparison.value;
    }

    private static matchesType(
        type: BoxFilters['type'],
        displaySlug: string,
        dataSource: GameDataSource,
        generation: number
    ): boolean {
        if (type === null) return true;

        return !!PokemonHelpers.getPokemonTypes(
            dataSource,
            displaySlug,
            generation
        )?.includes(type);
    }

    private static matchesStat(
        filter: BoxFilters['stat'],
        pokemon: CaughtPokemon,
        dataSource: GameDataSource,
        generation: number
    ): boolean {
        if (filter === null) return true;

        const stats = PokemonHelpers.getCaughtPokemonStats(
            dataSource,
            pokemon,
            generation
        );
        if (!stats) return false;

        return BoxFilterHelpers.matchesComparison(filter, stats[filter.stat]);
    }

    private static matchesTm(
        tm: BoxFilters['tm'],
        displaySlug: string,
        dataSource: GameDataSource,
        version: string
    ): boolean {
        if (tm === null) return true;

        return !!PokemonHelpers.getPokemonLearnset(
            dataSource,
            displaySlug,
            version
        )?.some((move) => move.method === 'machine' && move.slug === tm);
    }
}
