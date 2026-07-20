import { POKEMON } from '@/lib/data/pokemon';
import {
    Abilities,
    AbilitySlot,
    LearnsetMove,
    PokemonData,
    StatValues,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class PokemonHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * Every species introduced by generation or earlier, excluding forms
     * that can't actually persist as a caught Pokémon (e.g. Castform's
     * weather forms), deduped and sorted alphabetically by display name.
     */
    static getAllSpecies(generation: number): string[] {
        const names = new Set(
            Object.values(POKEMON)
                .filter(
                    (pokemon) =>
                        pokemon.introducedInGeneration <= generation &&
                        !pokemon.isTemporaryForm
                )
                .map((pokemon) => pokemon.name)
        );

        return [...names].sort((a, b) => a.localeCompare(b));
    }

    /** The Pokémon data for `name`, or undefined if no form matches. */
    static getPokemonData(name: string): PokemonData | undefined {
        const [formKey] = PokemonHelpers.getPokemonForms(name);
        return formKey ? POKEMON[formKey] : undefined;
    }

    /**
     * Every form key name could resolve to. Species with multiple forms
     * (e.g. Wormadam) have no entry under their base name, only under each
     * form's name, so an ambiguous base name (as evolution data reports
     * for a Burmy evolving into Wormadam, since its cloak isn't tracked by
     * the evolution chain) resolves to every matching form key instead of
     * just one, letting callers offer them all rather than silently
     * picking the alphabetically-first form. A name with its own entry
     * always resolves to itself.
     */
    static getPokemonForms(name: string): string[] {
        const slug = StringHelpers.toSlug(name);
        if (POKEMON[slug]) return [slug];

        return Object.keys(POKEMON)
            .filter((key) => key.startsWith(`${slug}-`))
            .sort((a, b) => a.localeCompare(b));
    }

    /** name's sprite, preferring variant if it has one, or undefined if no form matches. */
    static getPokemonSprite(
        name: string,
        variant?: string
    ): string | undefined {
        const pokemon = PokemonHelpers.getPokemonData(name);
        if (!pokemon) return undefined;

        if (variant && pokemon.sprites[variant]) {
            return pokemon.sprites[variant];
        }

        return Object.values(pokemon.sprites)[0];
    }

    /** name's types as of generation, or undefined if no form matches. */
    static getPokemonTypes(
        name: string,
        generation: number
    ): string[] | undefined {
        const pokemon = PokemonHelpers.getPokemonData(name);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(pokemon.types, generation)
            ?.types;
    }

    /** name's abilities as of generation, or undefined if no form matches. */
    static getPokemonAbilities(
        name: string,
        generation: number
    ): Abilities | undefined {
        const pokemon = PokemonHelpers.getPokemonData(name);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(
            pokemon.abilities,
            generation
        )?.abilities;
    }

    /** The name of name's ability in slot, as of generation. */
    static getAbilityName(
        name: string,
        generation: number,
        slot: AbilitySlot
    ): string | undefined {
        const abilities = PokemonHelpers.getPokemonAbilities(name, generation);
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

    /** name's base stats as of generation, or undefined if no form matches. */
    static getPokemonStats(
        name: string,
        generation: number
    ): StatValues | undefined {
        const pokemon = PokemonHelpers.getPokemonData(name);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(pokemon.stats, generation)
            ?.stats;
    }

    /** name's catch rate, or undefined if no form matches. */
    static getPokemonCatchRate(name: string): number | undefined {
        return PokemonHelpers.getPokemonData(name)?.catchRate;
    }

    /**
     * name's learnset in version (a PokeAPI version group slug, e.g.
     * "platinum"), or undefined if no form or matching version group
     * exists.
     */
    static getPokemonLearnset(
        name: string,
        version: string
    ): LearnsetMove[] | undefined {
        const pokemon = PokemonHelpers.getPokemonData(name);
        if (!pokemon) return undefined;

        return pokemon.learnset.find((entry) => entry.versionGroup === version)
            ?.moves;
    }

    /**
     * The moves name would know at level in version, i.e. the last
     * MAX_KNOWN_MOVES distinct level-up moves learned at or before level, in
     * the order they were learned — matching how a Pokémon's moveset is
     * determined in-game when it's first encountered or evolves.
     */
    static getMovesAtLevel(
        name: string,
        version: string,
        level: number
    ): string[] {
        const learnset = PokemonHelpers.getPokemonLearnset(name, version) ?? [];
        const levelUpMoves = learnset
            .filter(
                (move) =>
                    move.method === 'level-up' &&
                    (move.level ?? Infinity) <= level
            )
            .map(
                (move) => MoveHelpers.getMoveData(move.name)?.name ?? move.name
            );

        return Array.from(new Set(levelUpMoves)).slice(
            -PokemonHelpers.MAX_KNOWN_MOVES
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly MAX_KNOWN_MOVES = 4;
}
