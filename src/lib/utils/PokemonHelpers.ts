import { POKEMON } from '@/lib/data/pokemon';
import {
    Abilities,
    LearnsetMove,
    PokemonData,
    StatValues,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';

export default class PokemonHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * Every species introduced by generation or earlier, excluding forms
     * that can't actually persist as a caught Pokémon (e.g. Castform's
     * weather forms), sorted alphabetically by display name.
     */
    static getAllSpecies(generation: number): PokemonData[] {
        return Object.values(POKEMON)
            .filter(
                (pokemon) =>
                    pokemon.introducedInGeneration <= generation &&
                    !pokemon.isTemporaryForm
            )
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    /** The Pokémon data for `slug`, or undefined if no form matches. */
    static getPokemonData(slug: string): PokemonData | undefined {
        const [formKey] = PokemonHelpers.getPokemonForms(slug);
        return formKey ? POKEMON[formKey] : undefined;
    }

    /**
     * Every form key slug could resolve to. Species with multiple forms
     * (e.g. Wormadam) have no entry under their base slug, only under each
     * form's slug, so an ambiguous base slug (as evolution data reports
     * for a Burmy evolving into Wormadam, since its cloak isn't tracked by
     * the evolution chain) resolves to every matching form key instead of
     * just one, letting callers offer them all rather than silently
     * picking the alphabetically-first form. A slug with its own entry
     * always resolves to itself.
     */
    static getPokemonForms(slug: string): string[] {
        if (POKEMON[slug]) return [slug];

        return Object.keys(POKEMON)
            .filter((key) => key.startsWith(`${slug}-`))
            .sort((a, b) => a.localeCompare(b));
    }

    /**
     * The slug to actually display for a caught/battle Pokémon: its own
     * slug, unless its species has a `formChangeItem` and it's holding the
     * matching item, in which case the triggered form's slug is returned
     * instead (e.g. Giratina holding the Griseous Orb resolves to
     * "giratina-origin"). Never mutates the Pokémon's stored slug, so the
     * display reverts automatically once the item is removed.
     */
    static getDisplaySlug(pokemon: {
        slug: string;
        heldItem?: string;
    }): string {
        const formChangeItem = PokemonHelpers.getPokemonData(
            pokemon.slug
        )?.formChangeItem;

        return formChangeItem && pokemon.heldItem === formChangeItem.item
            ? formChangeItem.form
            : pokemon.slug;
    }

    /** slug's sprite, preferring variant if it has one, or undefined if no form matches. */
    static getPokemonSprite(
        slug: string,
        variant?: string
    ): string | undefined {
        const pokemon = PokemonHelpers.getPokemonData(slug);
        if (!pokemon) return undefined;

        if (variant && pokemon.sprites[variant]) {
            return pokemon.sprites[variant];
        }

        return Object.values(pokemon.sprites)[0];
    }

    /** slug's box/PC storage icon sprite path. */
    static getBoxSprite(slug: string): string {
        return `/box/${slug}.png`;
    }

    /** slug's types as of generation, or undefined if no form matches. */
    static getPokemonTypes(
        slug: string,
        generation: number
    ): string[] | undefined {
        const pokemon = PokemonHelpers.getPokemonData(slug);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(pokemon.types, generation)
            ?.types;
    }

    /** slug's abilities as of generation, or undefined if no form matches. */
    static getPokemonAbilities(
        slug: string,
        generation: number
    ): Abilities | undefined {
        const pokemon = PokemonHelpers.getPokemonData(slug);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(
            pokemon.abilities,
            generation
        )?.abilities;
    }

    /** slug's base stats as of generation, or undefined if no form matches. */
    static getPokemonStats(
        slug: string,
        generation: number
    ): StatValues | undefined {
        const pokemon = PokemonHelpers.getPokemonData(slug);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(pokemon.stats, generation)
            ?.stats;
    }

    /** slug's catch rate, or undefined if no form matches. */
    static getPokemonCatchRate(slug: string): number | undefined {
        return PokemonHelpers.getPokemonData(slug)?.catchRate;
    }

    /** Whether slug's species has no gender (PokeAPI gender_rate of -1). */
    static isGenderless(slug: string): boolean {
        return PokemonHelpers.getPokemonData(slug)?.genderRate === -1;
    }

    /**
     * The single gender slug's species is always born as (PokeAPI
     * gender_rate of 0 = always male, 8 = always female), or undefined if
     * the species can be either gender.
     */
    static getFixedGender(slug: string): 'male' | 'female' | undefined {
        const genderRate = PokemonHelpers.getPokemonData(slug)?.genderRate;
        if (genderRate === 0) return 'male';
        if (genderRate === 8) return 'female';
        return undefined;
    }

    /**
     * slug's learnset in version (a PokeAPI version group slug, e.g.
     * "platinum"), or undefined if no form or matching version group
     * exists.
     */
    static getPokemonLearnset(
        slug: string,
        version: string
    ): LearnsetMove[] | undefined {
        const pokemon = PokemonHelpers.getPokemonData(slug);
        if (!pokemon) return undefined;

        return pokemon.learnset.find((entry) => entry.versionGroup === version)
            ?.moves;
    }

    /**
     * The slugs of the moves slug would know at level in version, i.e. the
     * last MAX_KNOWN_MOVES distinct level-up moves learned at or before
     * level, in the order they were learned — matching how a Pokémon's
     * moveset is determined in-game when it's first encountered or evolves.
     */
    static getMovesAtLevel(
        slug: string,
        version: string,
        level: number
    ): string[] {
        const learnset = PokemonHelpers.getPokemonLearnset(slug, version) ?? [];
        const levelUpMoves = learnset
            .filter(
                (move) =>
                    move.method === 'level-up' &&
                    (move.level ?? Infinity) <= level
            )
            .map((move) => move.slug);

        return Array.from(new Set(levelUpMoves)).slice(
            -PokemonHelpers.MAX_KNOWN_MOVES
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly MAX_KNOWN_MOVES = 4;
}
