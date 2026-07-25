import { POKEMON } from '@/lib/data/pokemon';
import {
    Abilities,
    AbilitySlot,
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

    /** The slug of slug's ability in slot, as of generation. */
    static getAbilitySlug(
        slug: string,
        generation: number,
        slot: AbilitySlot
    ): string | undefined {
        const abilities = PokemonHelpers.getPokemonAbilities(slug, generation);
        if (!abilities) return undefined;

        switch (slot) {
            case 1:
                return abilities.slot1;
            case 2:
                return abilities.slot2;
            case 3:
                return abilities.hidden;
        }
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
