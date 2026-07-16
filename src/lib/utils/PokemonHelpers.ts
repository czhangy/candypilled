import { POKEMON } from '@/lib/data/pokemon';
import {
    Abilities,
    EvolutionStep,
    LearnsetMove,
    PokemonData,
    StatValues,
} from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
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

    static getLearnset(
        name: string,
        generation: number
    ): LearnsetMove[] | undefined {
        const pokemon = PokemonHelpers.get(name);
        if (!pokemon) return undefined;

        return [...pokemon.learnset]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation)?.moves;
    }

    // The moves name would know at level, i.e. the last MAX_KNOWN_MOVES
    // distinct level-up moves learned at or before level, in the order
    // they were learned — matching how a Pokemon's moveset is determined
    // in-game when it's first encountered or evolves.
    static getMovesAtLevel(
        name: string,
        generation: number,
        level: number
    ): string[] {
        const learnset = PokemonHelpers.getLearnset(name, generation) ?? [];
        const levelUpMoves = learnset
            .filter(
                (move) =>
                    move.method === 'level-up' &&
                    (move.level ?? Infinity) <= level
            )
            .map((move) => MoveHelpers.get(move.name)?.name ?? move.name);

        return Array.from(new Set(levelUpMoves)).slice(
            -PokemonHelpers.MAX_KNOWN_MOVES
        );
    }

    // Every species slug in name's evolution family (ancestors and
    // descendants, including sibling branches like other eeveelutions),
    // for detecting Nuzlocke duplicate-evolution-line catches.
    static getEvolutionFamily(name: string, generation: number): string[] {
        const line = PokemonHelpers.getEvolutionLine(name, generation);
        if (!line) return [StringHelpers.toSlug(name)];

        // getEvolutionLine(name) only preserves branches at or after name
        // itself — sibling branches (e.g. Wurmple's other evolution path)
        // are pruned from ancestors leading up to it. Its root is always
        // the family's true base species though, so re-querying from there
        // returns the fully-branched tree instead.
        const fullLine =
            PokemonHelpers.getEvolutionLine(line.name, generation) ?? line;

        const slugs: string[] = [];
        const collect = (step: EvolutionStep): void => {
            slugs.push(step.name);
            step.evolvesTo.forEach(collect);
        };
        collect(fullLine);

        return slugs;
    }

    static isSameEvolutionLine(
        a: string,
        b: string,
        generation: number
    ): boolean {
        return PokemonHelpers.getEvolutionFamily(a, generation).includes(
            StringHelpers.toSlug(b)
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly MAX_KNOWN_MOVES = 4;
}
