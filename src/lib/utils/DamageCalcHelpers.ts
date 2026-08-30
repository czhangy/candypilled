import {
    Field as CalcField_,
    Move as CalcMove,
    Pokemon as CalcPokemon,
    Side as CalcSide,
    calculate,
    Generations,
    Result,
    toID,
    type GenerationNum,
} from '@smogon/calc';
import type {
    Move as CalcMoveData,
    Generation,
    StatusName,
    Terrain,
    Weather,
} from '@smogon/calc/dist/data/interface';
import {
    CalcField,
    CalcPokemonInput,
    CalcSideConditions,
    GameDataSource,
} from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';

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
     * deal to defender in generation under field, or null if moveName is
     * empty/unknown or either Pokémon fails to resolve to valid
     * @smogon/calc data.
     */
    static getDamagePercentRange(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField
    ): [number, number] | null {
        const result = DamageCalcHelpers.getResult(
            generation,
            dataSource,
            attacker,
            defender,
            moveName,
            field
        );
        if (!result) return null;

        const [minDamage, maxDamage] = result.range();
        const maxHp = result.defender.maxHP();
        if (maxHp === 0) return [0, 0];

        return [
            DamageCalcHelpers.toPercent(minDamage, maxHp),
            DamageCalcHelpers.toPercent(maxDamage, maxHp),
        ];
    }

    /**
     * A human-readable description of moveName's damage against defender
     * (e.g. "Player's Garchomp Earthquake vs. Enemy's Excadrill: 130-153
     * (45.2 - 53.4%) -- 0.1% chance to 3HKO"), or null if moveName is
     * empty/unknown or either Pokémon fails to resolve to valid
     * @smogon/calc data. attackerLabel/defenderLabel prefix each Pokémon's
     * species name (e.g. "Player's"/"Enemy's"). Deliberately omits EV/
     * nature notation (unlike @smogon/calc's own Result.fullDesc()).
     */
    static getDescription(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField,
        attackerLabel: string,
        defenderLabel: string
    ): string | null {
        const result = DamageCalcHelpers.getResult(
            generation,
            dataSource,
            attacker,
            defender,
            moveName,
            field
        );
        const percentRange = DamageCalcHelpers.getDamagePercentRange(
            generation,
            dataSource,
            attacker,
            defender,
            moveName,
            field
        );
        if (!result || !percentRange) return null;

        const [minDamage, maxDamage] = result.range();
        const [minPercent, maxPercent] = percentRange;
        const koChanceText = result.kochance(false).text;

        return `${attackerLabel} ${attacker.species} ${moveName} vs. ${defenderLabel} ${defender.species}: ${minDamage}-${maxDamage} (${minPercent} - ${maxPercent}%)${koChanceText ? ` -- ${koChanceText}` : ''}`;
    }

    /**
     * Every damage roll moveName (used by attacker) could deal to defender
     * in generation under field, sorted ascending (duplicates kept, since
     * each entry represents one of the possible rolls), or null if
     * moveName is empty/unknown or either Pokémon fails to resolve to
     * valid @smogon/calc data.
     */
    static getPossibleDamageAmounts(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField
    ): number[] | null {
        const result = DamageCalcHelpers.getResult(
            generation,
            dataSource,
            attacker,
            defender,
            moveName,
            field
        );
        if (!result) return null;

        const amounts = Array.isArray(result.damage)
            ? result.damage.flat()
            : [result.damage];

        return amounts.sort((a, b) => a - b);
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly generationCache = new Map<number, Generation>();

    private static getResult(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField
    ): Result | null {
        if (!moveName) return null;

        const gen = DamageCalcHelpers.getGeneration(generation);
        const attackerPokemon = DamageCalcHelpers.buildPokemon(gen, attacker);
        const defenderPokemon = DamageCalcHelpers.buildPokemon(gen, defender);
        if (!attackerPokemon || !defenderPokemon) return null;

        const ownOverrides = DamageCalcHelpers.getMoveOverrides(
            dataSource,
            moveName,
            generation,
            attacker.ivs
        );
        if (!ownOverrides) return null;

        // A move this game's data source has (e.g. a ROM hack backporting
        // a later-generation move as a Gen 4 replacement) may not exist in
        // @smogon/calc's dataset for `generation` at all, since that
        // dataset mirrors real vanilla move availability per generation.
        // When that happens, borrow the shape (flags/target/secondaries/
        // etc.) from the earliest later @smogon/calc generation that does
        // define it, since it's the same real move — this game's own
        // stats still take priority via ownOverrides.
        const knownMove = gen.moves.get(toID(moveName));
        const fallbackMove = knownMove
            ? undefined
            : DamageCalcHelpers.getFallbackMove(moveName, generation);
        if (!knownMove && !fallbackMove) return null;

        try {
            const move = new CalcMove(gen, moveName, {
                isCrit: field.isCrit,
                overrides: fallbackMove
                    ? { ...fallbackMove, ...ownOverrides }
                    : ownOverrides,
            });
            return calculate(
                gen,
                attackerPokemon,
                defenderPokemon,
                move,
                DamageCalcHelpers.buildField(field)
            );
        } catch {
            return null;
        }
    }

    // This game's data source may hold move stats patched away from
    // @smogon/calc's bundled vanilla dataset (e.g. a ROM hack rebalance),
    // so its base power/type/category/priority are passed through as
    // @smogon/calc overrides rather than trusting its own vanilla lookup.
    private static getMoveOverrides(
        dataSource: GameDataSource,
        moveName: string,
        generation: number,
        ivs: CalcPokemonInput['ivs']
    ): Partial<CalcMoveData> | undefined {
        const slug = MoveHelpers.getSlugByName(dataSource, moveName);
        if (!slug) return undefined;

        const moveData = MoveHelpers.getMoveData(dataSource, slug);
        const values = MoveHelpers.getMoveForGeneration(
            dataSource,
            slug,
            generation
        );
        const type = MoveHelpers.getMoveType(dataSource, slug, generation, ivs);
        if (!moveData || !values || !type) return undefined;

        return {
            basePower: values.power ?? 0,
            category: DamageCalcHelpers.capitalize(
                moveData.category
            ) as CalcMoveData['category'],
            priority: moveData.priority,
            type: DamageCalcHelpers.capitalize(type) as CalcMoveData['type'],
        };
    }

    // The earliest @smogon/calc generation after `generation` that
    // recognizes moveName, or undefined if no later generation does
    // either (a genuinely unknown move name).
    private static getFallbackMove(
        moveName: string,
        generation: number
    ): CalcMoveData | undefined {
        for (let laterGen = generation + 1; laterGen <= 9; laterGen++) {
            const found = DamageCalcHelpers.getGeneration(laterGen).moves.get(
                toID(moveName)
            );
            if (found) return found;
        }
        return undefined;
    }

    private static capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

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
                gender:
                    input.gender === 'male'
                        ? 'M'
                        : input.gender === 'female'
                          ? 'F'
                          : undefined,
                item: input.heldItem || undefined,
                ivs: input.ivs,
                level: input.level,
                nature: input.nature,
                status: (input.status || undefined) as StatusName | undefined,
            });
        } catch {
            return null;
        }
    }

    private static buildField(field: CalcField): CalcField_ {
        return new CalcField_({
            attackerSide: DamageCalcHelpers.buildSide(field.attackerSide),
            defenderSide: DamageCalcHelpers.buildSide(field.defenderSide),
            gameType: 'Singles',
            isAuraBreak: field.isAuraBreak,
            isBeadsOfRuin: field.isBeadsOfRuin,
            isDarkAura: field.isDarkAura,
            isFairyAura: field.isFairyAura,
            isGravity: field.isGravity,
            isMagicRoom: field.isMagicRoom,
            isSwordOfRuin: field.isSwordOfRuin,
            isTabletsOfRuin: field.isTabletsOfRuin,
            isVesselOfRuin: field.isVesselOfRuin,
            isWonderRoom: field.isWonderRoom,
            terrain: (field.terrain || undefined) as Terrain | undefined,
            weather: (field.weather || undefined) as Weather | undefined,
        });
    }

    private static buildSide(conditions: CalcSideConditions): CalcSide {
        return new CalcSide({
            cannonade: conditions.cannonade,
            isAuroraVeil: conditions.isAuroraVeil,
            isBattery: conditions.isBattery,
            isFlowerGift: conditions.isFlowerGift,
            isForesight: conditions.isForesight,
            isFriendGuard: conditions.isFriendGuard,
            isHelpingHand: conditions.isHelpingHand,
            isLightScreen: conditions.isLightScreen,
            isPowerSpot: conditions.isPowerSpot,
            isPowerTrick: conditions.isPowerTrick,
            isProtected: conditions.isProtected,
            isReflect: conditions.isReflect,
            isSaltCured: conditions.isSaltCured,
            isSeeded: conditions.isSeeded,
            isSR: conditions.isSR,
            isSteelySpirit: conditions.isSteelySpirit,
            isSwitching: conditions.isSwitching ? 'out' : undefined,
            isTailwind: conditions.isTailwind,
            spikes: conditions.spikes,
            steelsurge: conditions.steelsurge,
            vinelash: conditions.vinelash,
            volcalith: conditions.volcalith,
            wildfire: conditions.wildfire,
        });
    }
}
