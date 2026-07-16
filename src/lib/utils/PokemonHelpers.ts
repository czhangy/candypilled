import { POKEMON } from '@/lib/data/pokemon';
import {
    Abilities,
    AbilitySlot,
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

    // Every species introduced by generation or earlier, excluding forms
    // that can't actually persist as a caught Pokemon (e.g. Castform's
    // weather forms), deduped and sorted alphabetically by display name.
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

    static get(name: string): PokemonData | undefined {
        const [formKey] = PokemonHelpers.getFormOptions(name);
        return formKey ? POKEMON[formKey] : undefined;
    }

    // Every form key name could resolve to. Species with multiple forms
    // (e.g. Wormadam) have no entry under their base name, only under each
    // form's name, so an ambiguous base name (as evolution data reports
    // for a Burmy evolving into Wormadam, since its cloak isn't tracked by
    // the evolution chain) resolves to every matching form key instead of
    // just one, letting callers offer them all rather than silently
    // picking the alphabetically-first form. A name with its own entry
    // always resolves to itself.
    static getFormOptions(name: string): string[] {
        const slug = StringHelpers.toSlug(name);
        if (POKEMON[slug]) return [slug];

        return Object.keys(POKEMON)
            .filter((key) => key.startsWith(`${slug}-`))
            .sort((a, b) => a.localeCompare(b));
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

    static getAbilityName(
        name: string,
        generation: number,
        slot: AbilitySlot
    ): string | undefined {
        const abilities = PokemonHelpers.getAbilities(name, generation);
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

    // The full evolution line reachable from name's family, i.e. every
    // branch from the family's base species, not just the ones leading to
    // name itself (which getEvolutionLine alone would prune, e.g. viewing
    // Mothim would otherwise exclude the Wormadam branch).
    static getFullEvolutionLine(
        name: string,
        generation: number
    ): EvolutionStep | undefined {
        const line = PokemonHelpers.getEvolutionLine(name, generation);
        if (!line) return undefined;

        return PokemonHelpers.getEvolutionLine(line.name, generation) ?? line;
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
        const fullLine = PokemonHelpers.getFullEvolutionLine(name, generation);
        if (!fullLine) return [StringHelpers.toSlug(name)];

        const slugs: string[] = [];
        const collect = (step: EvolutionStep): void => {
            // A step's name is ambiguous when it doesn't resolve to its
            // own entry (e.g. "wormadam"), so every matching form counts
            // as part of the family, not just the (non-existent) bare name.
            slugs.push(...PokemonHelpers.getFormOptions(step.name));
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

    // The evolution steps directly reachable from name, i.e. the species it
    // can evolve into right now (empty if name doesn't evolve further).
    static getNextEvolutions(
        name: string,
        generation: number
    ): EvolutionStep[] {
        const line = PokemonHelpers.getEvolutionLine(name, generation);
        if (!line) return [];

        const slug = StringHelpers.toSlug(name);
        const findStep = (step: EvolutionStep): EvolutionStep | undefined => {
            if (step.name === slug) return step;
            return step.evolvesTo
                .map(findStep)
                .find((found): found is EvolutionStep => !!found);
        };

        return findStep(line)?.evolvesTo ?? [];
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly MAX_KNOWN_MOVES = 4;
}
