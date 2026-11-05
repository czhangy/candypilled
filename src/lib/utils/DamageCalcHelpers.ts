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
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

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

    /** Whether moveName's damage can't be calculated at all (Psywave's level-based roll isn't modeled by @smogon/calc), so the UI shows "???" instead of a range or description. */
    static isUncalculableMove(
        dataSource: GameDataSource,
        moveName: string
    ): boolean {
        return MoveHelpers.getSlugByName(dataSource, moveName) === 'psywave';
    }

    /**
     * The [min, max] damage percentage moveName (used by attacker) would
     * deal to defender in generation under field, or null if moveName is
     * empty/unknown or either Pokémon fails to resolve to valid
     * @smogon/calc data. A variable multi-hit move spans every hit count
     * the attacker can reach (fewest hits' min to most hits' max).
     */
    static getDamagePercentRange(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField
    ): [number, number] | null {
        const results = DamageCalcHelpers.getResults(
            generation,
            dataSource,
            attacker,
            defender,
            moveName,
            field
        );
        if (!results) return null;

        const ranges = results.map(({ result }) =>
            DamageCalcHelpers.getPercentRange(result)
        );
        return [
            Math.min(...ranges.map(([min]) => min)),
            Math.max(...ranges.map(([, max]) => max)),
        ];
    }

    /**
     * A human-readable description of moveName's damage against defender:
     * a `heading` naming the matchup (e.g. "Player's Garchomp Earthquake
     * vs. Enemy's Excadrill"), the `lines` of damage text that follow it
     * (e.g. "130-153 (45.2 - 53.4%)") and the `koText` for the move
     * overall (e.g. "0.1% chance to 3HKO"), or null when it can't KO. A
     * variable multi-hit move gets one line per reachable hit count,
     * prefixed "N hits:", and one koText weighted across them. The
     * description is null if moveName is a status move,
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
    ): { heading: string; koText: string | null; lines: string[] } | null {
        const results = DamageCalcHelpers.getResults(
            generation,
            dataSource,
            attacker,
            defender,
            moveName,
            field
        );
        if (
            !results ||
            DamageCalcHelpers.isStatusMove(dataSource, generation, moveName)
        ) {
            return null;
        }

        const lines = results.map(({ hits, result }) => {
            const [minDamage, maxDamage] = result.range();
            const [minPercent, maxPercent] =
                DamageCalcHelpers.getPercentRange(result);
            const hitsText =
                hits !== undefined && results.length > 1
                    ? `${hits} hits: `
                    : '';

            return `${hitsText}${minDamage}-${maxDamage} (${minPercent} - ${maxPercent}%)`;
        });
        const fixedHits = results[0].hits;
        const fixedHitsText =
            fixedHits !== undefined && results.length === 1
                ? ` (${fixedHits} hits)`
                : '';

        return {
            heading: `${attackerLabel} ${attacker.species} ${moveName}${fixedHitsText} vs. ${defenderLabel} ${defender.species}`,
            koText: DamageCalcHelpers.getKoText(results),
            lines,
        };
    }

    /**
     * Every damage roll moveName (used by attacker) could deal to defender
     * in generation under field, sorted ascending (duplicates kept, since
     * each entry represents one of the possible rolls), or null if
     * moveName is a status move, is empty/unknown or either Pokémon fails
     * to resolve to valid @smogon/calc data. For a multi-hit move the
     * amounts are the rolls of a single hit (`perHit`), since every hit
     * rolls independently.
     */
    static getPossibleDamageAmounts(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField
    ): { amounts: number[]; perHit: boolean } | null {
        const results = DamageCalcHelpers.getResults(
            generation,
            dataSource,
            attacker,
            defender,
            moveName,
            field
        );
        if (
            !results ||
            DamageCalcHelpers.isStatusMove(dataSource, generation, moveName)
        ) {
            return null;
        }

        const { damage } = results[0].result;
        const hitRolls =
            Array.isArray(damage) && Array.isArray(damage[0])
                ? (damage[0] as number[])
                : undefined;
        const amounts =
            hitRolls ??
            (Array.isArray(damage) ? (damage as number[]) : [damage]);

        return {
            amounts: [...amounts].sort((a, b) => a - b),
            perHit: hitRolls !== undefined,
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static isStatusMove(
        dataSource: GameDataSource,
        generation: number,
        moveName: string
    ): boolean {
        const slug = MoveHelpers.getSlugByName(dataSource, moveName);
        return (
            !!slug &&
            MoveHelpers.getMoveCategory(dataSource, slug, generation) ===
                'status'
        );
    }

    // Moves whose name here differs from @smogon/calc's spelling of it.
    private static readonly CALC_MOVE_NAMES: Record<string, string> = {
        'Vice Grip': 'Vise Grip',
    };

    // One result per hit count moveName can reach: every count from its
    // minimum to its maximum, only the maximum under Skill Link, and at
    // least 4 under Loaded Dice. Any other move gets a single result.
    private static getResults(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField
    ): { hits: number | undefined; result: Result; weight: number }[] | null {
        const calcMoveName =
            DamageCalcHelpers.CALC_MOVE_NAMES[moveName] ?? moveName;
        const moveData =
            DamageCalcHelpers.getGeneration(generation).moves.get(
                toID(calcMoveName)
            ) ?? DamageCalcHelpers.getFallbackMove(calcMoveName, generation);
        const multihit = moveData?.multihit;

        let hitCounts: (number | undefined)[] = [undefined];
        if (Array.isArray(multihit)) {
            const [min, max] = multihit;
            const fewest =
                attacker.abilityName === 'Skill Link'
                    ? max
                    : attacker.heldItem === 'Loaded Dice'
                      ? Math.max(min, 4)
                      : min;
            hitCounts = Array.from(
                { length: max - fewest + 1 },
                (_, offset) => fewest + offset
            );
        }

        const totalWeight = hitCounts.reduce<number>(
            (sum, hits) => sum + DamageCalcHelpers.getHitWeight(hits),
            0
        );
        const results = hitCounts.map((hits) => ({
            hits,
            weight: DamageCalcHelpers.getHitWeight(hits) / totalWeight,
            result: DamageCalcHelpers.getResult(
                generation,
                dataSource,
                attacker,
                defender,
                moveName,
                field,
                hits
            ),
        }));
        return results.every(({ result }) => result)
            ? (results as {
                  hits: number | undefined;
                  result: Result;
                  weight: number;
              }[])
            : null;
    }

    // How likely a variable multi-hit move lands exactly `hits` hits,
    // before narrowing to the counts the attacker can reach. Moves that
    // don't vary (undefined) always land their one count.
    private static getHitWeight(hits: number | undefined): number {
        if (hits === undefined) return 1;

        return hits <= 3 ? 0.375 : 0.125;
    }

    // The chance to KO across every hit count, in the fewest uses any hit
    // count can manage it, e.g. "37.5% chance to 2HKO". A single result
    // keeps @smogon/calc's own text (qualifiers, end-of-turn damage).
    private static getKoText(
        results: { result: Result; weight: number }[]
    ): string | null {
        if (results.length === 1) {
            return results[0].result.kochance(false).text || null;
        }

        const chances = results.map(({ result, weight }) => ({
            ...result.kochance(false),
            weight,
        }));
        const possible = chances.filter(
            ({ chance, n }) => (chance ?? 0) > 0 && n > 0
        );
        if (possible.length === 0) return null;

        const fewestUses = Math.min(...possible.map(({ n }) => n));
        const overall = possible
            .filter(({ n }) => n === fewestUses)
            .reduce(
                (sum, { chance, weight }) => sum + (chance ?? 0) * weight,
                0
            );
        const koName = fewestUses === 1 ? 'OHKO' : `${fewestUses}HKO`;
        if (overall >= 1) return `guaranteed ${koName}`;

        const percent = Math.max(Math.min(Math.round(overall * 1000), 999), 1);
        return `${percent / 10}% chance to ${koName}`;
    }

    private static getPercentRange(result: Result): [number, number] {
        const [minDamage, maxDamage] = result.range();
        const maxHp = result.defender.maxHP();
        if (maxHp === 0) return [0, 0];

        return [
            DamageCalcHelpers.toPercent(minDamage, maxHp),
            DamageCalcHelpers.toPercent(maxDamage, maxHp),
        ];
    }

    private static readonly generationCache = new Map<number, Generation>();

    private static getResult(
        generation: number,
        dataSource: GameDataSource,
        attacker: CalcPokemonInput,
        defender: CalcPokemonInput,
        moveName: string,
        field: CalcField,
        hits: number | undefined
    ): Result | null {
        if (!moveName) return null;

        const gen = DamageCalcHelpers.getGeneration(generation);
        const attackerPokemon = DamageCalcHelpers.buildPokemon(
            gen,
            dataSource,
            generation,
            attacker
        );
        const defenderPokemon = DamageCalcHelpers.buildPokemon(
            gen,
            dataSource,
            generation,
            defender
        );
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
        const calcMoveName =
            DamageCalcHelpers.CALC_MOVE_NAMES[moveName] ?? moveName;
        const knownMove = gen.moves.get(toID(calcMoveName));
        const fallbackMove = knownMove
            ? undefined
            : DamageCalcHelpers.getFallbackMove(calcMoveName, generation);
        if (!knownMove && !fallbackMove) return null;

        try {
            const move = new CalcMove(gen, calcMoveName, {
                hits,
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
        const category = MoveHelpers.getMoveCategory(
            dataSource,
            slug,
            generation
        );
        if (!moveData || !values || !type || !category) return undefined;

        return {
            basePower: values.power ?? 0,
            category: DamageCalcHelpers.capitalize(
                category
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

    // The species' types and base stats come from this game's data source,
    // since a ROM hack may patch them away from @smogon/calc's vanilla data.
    private static buildPokemon(
        gen: Generation,
        dataSource: GameDataSource,
        generation: number,
        input: CalcPokemonInput
    ): CalcPokemon | null {
        if (!gen.species.get(toID(input.species))) return null;

        const slug = Object.values(dataSource.pokemon).find(
            (pokemon) => pokemon.name === input.species
        )?.slug;
        const baseStats = slug
            ? PokemonHelpers.getPokemonStats(dataSource, slug, generation)
            : undefined;
        const types = slug
            ? PokemonHelpers.getPokemonTypes(dataSource, slug, generation)
            : undefined;

        try {
            const pokemon = new CalcPokemon(gen, input.species, {
                overrides: { baseStats },
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

            // Current HP matters to HP-scaled moves (Flail, Eruption, ...).
            pokemon.originalCurHP = Math.min(
                input.currentHp ?? pokemon.rawStats.hp,
                pokemon.rawStats.hp
            );

            if (types) {
                // @smogon/calc deep-merges array overrides by index, which
                // would keep a dual type's 2nd slot when the game makes it
                // mono-typed, so the types are assigned directly instead.
                const calcTypes = types.map((type) =>
                    DamageCalcHelpers.capitalize(type)
                ) as CalcPokemon['types'];
                pokemon.types = calcTypes;
                pokemon.species = { ...pokemon.species, types: calcTypes };
            }
            return pokemon;
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
