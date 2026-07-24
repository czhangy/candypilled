import {
    Move as CalcMove,
    Pokemon as CalcPokemon,
    calculate,
    Generations,
    toID,
    type GenerationNum,
} from '@smogon/calc';
import type { Generation, StatusName } from '@smogon/calc/dist/data/interface';
import { CalcPokemonInput } from '@/lib/static/types';

export default class DamageCalcHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** @smogon/calc's Generation data for generation, memoized since it's pure/expensive to rebuild. */
    static getGeneration(generation: number): Generation {
        const cached = DamageCalcHelpers.generationCache.get(generation);
        if (cached) return cached;

        const resolved = Generations.get(generation as GenerationNum);
        DamageCalcHelpers.generationCache.set(generation, resolved);
        return resolved;
    }

    /**
     * The [min, max] damage percentage moveName (used by attacker) would
     * deal to defender in generation, or null if moveName is empty/unknown
     * or either Pokémon fails to resolve to valid @smogon/calc data.
     */
    static getDamagePercentRange(
        generation: number,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string
    ): [number, number] | null {
        if (!moveName) return null;

        const gen = DamageCalcHelpers.getGeneration(generation);
        const attackerPokemon = DamageCalcHelpers.buildPokemon(gen, attacker);
        const defenderPokemon = DamageCalcHelpers.buildPokemon(gen, defender);
        if (!attackerPokemon || !defenderPokemon) return null;
        if (!gen.moves.get(toID(moveName))) return null;

        try {
            const move = new CalcMove(gen, moveName);
            const result = calculate(
                gen,
                attackerPokemon,
                defenderPokemon,
                move
            );
            const [minDamage, maxDamage] = result.range();
            const maxHp = defenderPokemon.maxHP();
            if (maxHp === 0) return [0, 0];

            return [
                DamageCalcHelpers.toPercent(minDamage, maxHp),
                DamageCalcHelpers.toPercent(maxDamage, maxHp),
            ];
        } catch {
            return null;
        }
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly generationCache = new Map<number, Generation>();

    private static toPercent(damage: number, maxHp: number): number {
        return Math.floor((damage * 1000) / maxHp) / 10;
    }

    private static buildPokemon(
        gen: Generation,
        input: CalcPokemonInput
    ): CalcPokemon | null {
        if (!gen.species.get(toID(input.species))) return null;

        try {
            return new CalcPokemon(gen, input.species, {
                ability: input.abilityName || undefined,
                boosts: input.boosts,
                evs: input.evs,
                ivs: input.ivs,
                level: input.level,
                nature: input.nature,
                status: (input.status || undefined) as StatusName | undefined,
            });
        } catch {
            return null;
        }
    }
}
