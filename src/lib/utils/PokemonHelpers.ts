import { POKEMON } from '@/lib/data/pokemon';
import {
    Abilities,
    EvolutionStep,
    PokemonData,
    StatValues,
} from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class PokemonHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static get(name: string): PokemonData | undefined {
        const slug = StringHelpers.toSlug(name);
        if (POKEMON[slug]) return POKEMON[slug];

        // Species with multiple forms (e.g. Wormadam) have no entry under
        // their base name, only under each form's name. Fall back to the
        // first form found.
        const formKey = Object.keys(POKEMON).find((key) =>
            key.startsWith(`${slug}-`)
        );
        return formKey ? POKEMON[formKey] : undefined;
    }

    static getSprite(name: string, variant?: string): string | undefined {
        const pokemon = PokemonHelpers.get(name);
        if (!pokemon) return undefined;

        if (variant && pokemon.sprites[variant]) {
            return pokemon.sprites[variant];
        }

        return Object.values(pokemon.sprites)[0];
    }

    static getTypes(name: string, generation: number): string[] | undefined {
        const pokemon = PokemonHelpers.get(name);
        if (!pokemon) return undefined;

        return [...pokemon.types]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation)?.types;
    }

    static getAbilities(
        name: string,
        generation: number
    ): Abilities | undefined {
        const pokemon = PokemonHelpers.get(name);
        if (!pokemon) return undefined;

        return [...pokemon.abilities]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation)?.abilities;
    }

    static getStats(name: string, generation: number): StatValues | undefined {
        const pokemon = PokemonHelpers.get(name);
        if (!pokemon) return undefined;

        return [...pokemon.stats]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation)?.stats;
    }

    static getCatchRate(name: string): number | undefined {
        return PokemonHelpers.get(name)?.catchRate;
    }

    static getEvolutionLine(
        name: string,
        generation: number
    ): EvolutionStep | undefined {
        const pokemon = PokemonHelpers.get(name);
        if (!pokemon) return undefined;

        return [...pokemon.evolutionLine]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation)?.line;
    }
}
