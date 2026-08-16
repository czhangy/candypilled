import { MAX_IV, MIN_IV } from '@/lib/static/constants';
import { Nature, PokemonType } from '@/lib/static/enums';
import {
    BattlePokemon,
    CalcField,
    CalcPokemonInput,
    CalcSideConditions,
    GameDataSource,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import DamageCalcHelpers from '@/lib/utils/DamageCalcHelpers';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';

// One generation's implementation of the trainer AI's "which remaining
// party member gets sent in next" decision, resolved by
// GenerationHelpers against the requesting generation. Picks one index
// out of `pool` (indices into the original `candidates` array).
type SwitchInStrategy = {
    fromGeneration: number;
    pickNext: (
        dataSource: GameDataSource,
        pool: number[],
        candidates: BattlePokemon[],
        faintedPokemon: BattlePokemon,
        target: BattlePokemon,
        generation: number,
        version: string
    ) => number;
};

export default class SwitchInHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * The order the trainer AI would send `candidates` in, one at a time,
     * after `faintedPokemon` faints against `target` — as indices into
     * `candidates`. Simulates the AI's single-pick send-in decision
     * repeatedly, removing each pick from the pool before choosing the
     * next, since the real AI only ever decides one switch-in at a time.
     * Returns an empty array if `generation` has no registered strategy.
     */
    static getSwitchInOrder(
        dataSource: GameDataSource,
        candidates: BattlePokemon[],
        faintedPokemon: BattlePokemon,
        target: BattlePokemon,
        generation: number,
        version: string
    ): number[] {
        const strategy = GenerationHelpers.resolveGeneration(
            SwitchInHelpers.STRATEGIES,
            generation
        );
        if (!strategy) return [];

        let pool = candidates.map((_, index) => index);
        const order: number[] = [];

        while (pool.length > 0) {
            const pick = strategy.pickNext(
                dataSource,
                pool,
                candidates,
                faintedPokemon,
                target,
                generation,
                version
            );
            order.push(pick);
            pool = pool.filter((index) => index !== pick);
        }

        return order;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly BLANK_SIDE_CONDITIONS: CalcSideConditions = {
        cannonade: false,
        isAuroraVeil: false,
        isBattery: false,
        isFlowerGift: false,
        isForesight: false,
        isFriendGuard: false,
        isHelpingHand: false,
        isLightScreen: false,
        isPowerSpot: false,
        isPowerTrick: false,
        isProtected: false,
        isReflect: false,
        isSaltCured: false,
        isSeeded: false,
        isSR: false,
        isSteelySpirit: false,
        isSwitching: false,
        isTailwind: false,
        spikes: 0,
        steelsurge: false,
        vinelash: false,
        volcalith: false,
        wildfire: false,
    };

    // A field with no active hazards/screens/weather/terrain, since the
    // switch-in AI evaluates raw matchups rather than the current battle's
    // actual field state.
    private static readonly NEUTRAL_FIELD: CalcField = {
        attackerSide: SwitchInHelpers.BLANK_SIDE_CONDITIONS,
        defenderSide: SwitchInHelpers.BLANK_SIDE_CONDITIONS,
        isAuraBreak: false,
        isBeadsOfRuin: false,
        isCrit: false,
        isDarkAura: false,
        isFairyAura: false,
        isGravity: false,
        isMagicRoom: false,
        isSwordOfRuin: false,
        isTabletsOfRuin: false,
        isVesselOfRuin: false,
        isWonderRoom: false,
        terrain: '',
        weather: '',
    };

    private static readonly STRATEGIES: SwitchInStrategy[] = [
        { fromGeneration: 4, pickNext: SwitchInHelpers.pickNextGen4 },
    ];

    // Gen 4's send-in procedure: rank the pool by offensive type score
    // against `target` and send in the top scorer if it knows a
    // supereffective move of its own; otherwise send in whoever deals the
    // most damage, evaluated using `faintedPokemon`'s stats/typing rather
    // than the candidate's own (a documented AI quirk — the candidate's own
    // move list is used, but the attacker profile still belongs to
    // whichever Pokémon just fainted); otherwise fall back to party order.
    private static pickNextGen4(
        dataSource: GameDataSource,
        pool: number[],
        candidates: BattlePokemon[],
        faintedPokemon: BattlePokemon,
        target: BattlePokemon,
        generation: number,
        version: string
    ): number {
        const topScorer = [...pool].sort(
            (a, b) =>
                SwitchInHelpers.getTypeScore(
                    dataSource,
                    candidates[b],
                    target,
                    generation
                ) -
                SwitchInHelpers.getTypeScore(
                    dataSource,
                    candidates[a],
                    target,
                    generation
                )
        )[0];

        if (
            SwitchInHelpers.hasSupereffectiveMove(
                dataSource,
                candidates[topScorer],
                target,
                generation,
                version
            )
        ) {
            return topScorer;
        }

        return [...pool].sort(
            (a, b) =>
                SwitchInHelpers.getMaxDamagePercent(
                    dataSource,
                    candidates[b],
                    faintedPokemon,
                    target,
                    generation,
                    version
                ) -
                SwitchInHelpers.getMaxDamagePercent(
                    dataSource,
                    candidates[a],
                    faintedPokemon,
                    target,
                    generation,
                    version
                )
        )[0];
    }

    // The combined multiplier of a single attacking type against
    // (possibly dual-typed) `defenderTypes`.
    private static getCombinedMultiplier(
        attackerType: string,
        defenderTypes: string[],
        isGen6Plus: boolean
    ): number {
        return defenderTypes.reduce(
            (multiplier, defenderType) =>
                multiplier *
                TypeHelpers.getMultiplier(
                    attackerType as PokemonType,
                    defenderType as PokemonType,
                    isGen6Plus
                ),
            1
        );
    }

    private static getScoreForMultiplier(multiplier: number): number {
        if (multiplier >= 4) return 160;
        if (multiplier === 2) return 80;
        if (multiplier === 1) return 40;
        if (multiplier === 0.5) return 20;
        if (multiplier === 0.25) return 10;
        return 0;
    }

    // `pokemon`'s offensive type score against `target`: each of its own
    // types (doubled for a mono-type Pokémon) scored via the point table
    // and summed. The original AI stores this sum in a single byte, so a
    // double-4x matchup (320) silently overflows and wraps to 64 rather
    // than ranking highest — reproduced here via `% 256`.
    private static getTypeScore(
        dataSource: GameDataSource,
        pokemon: BattlePokemon,
        target: BattlePokemon,
        generation: number
    ): number {
        const pokemonTypes =
            PokemonHelpers.getPokemonTypes(
                dataSource,
                pokemon.slug,
                generation
            ) ?? [];
        const targetTypes =
            PokemonHelpers.getPokemonTypes(
                dataSource,
                target.slug,
                generation
            ) ?? [];
        if (pokemonTypes.length === 0 || targetTypes.length === 0) return 0;

        const isGen6Plus = generation >= 6;
        const attackingTypes =
            pokemonTypes.length === 1
                ? [pokemonTypes[0], pokemonTypes[0]]
                : pokemonTypes;

        const total = attackingTypes.reduce(
            (sum, type) =>
                sum +
                SwitchInHelpers.getScoreForMultiplier(
                    SwitchInHelpers.getCombinedMultiplier(
                        type,
                        targetTypes,
                        isGen6Plus
                    )
                ),
            0
        );

        return total % 256;
    }

    // Whether `pokemon` knows a damaging move (its own moveset, its own
    // typing for Hidden Power) that's supereffective against `target`.
    private static hasSupereffectiveMove(
        dataSource: GameDataSource,
        pokemon: BattlePokemon,
        target: BattlePokemon,
        generation: number,
        version: string
    ): boolean {
        const targetTypes =
            PokemonHelpers.getPokemonTypes(
                dataSource,
                target.slug,
                generation
            ) ?? [];
        const isGen6Plus = generation >= 6;
        const ivs = StatHelpers.normalizeStats(pokemon.ivs, MIN_IV);
        const moves =
            pokemon.moves ??
            PokemonHelpers.getMovesAtLevel(
                dataSource,
                pokemon.slug,
                version,
                pokemon.level
            );

        return moves.some((moveSlug) => {
            const moveValues = MoveHelpers.getMoveForGeneration(
                dataSource,
                moveSlug,
                generation
            );
            if (!moveValues || moveValues.power === null) return false;

            const moveType = MoveHelpers.getMoveType(
                dataSource,
                moveSlug,
                generation,
                ivs
            );
            if (!moveType) return false;

            return (
                SwitchInHelpers.getCombinedMultiplier(
                    moveType,
                    targetTypes,
                    isGen6Plus
                ) >= 2
            );
        });
    }

    // The highest damage percentage any of `candidate`'s own damaging
    // moves would deal to `target`, calculated using `attacker`'s stats/
    // ability/item/typing rather than `candidate`'s own (see
    // `pickNextGen4`). Nonstandard-damage moves (fixed damage, OHKO,
    // level-based, etc.) are excluded, since PokeAPI already represents
    // them with a null power. 0 if no valid move or either Pokémon fails
    // to resolve to calculator data.
    private static getMaxDamagePercent(
        dataSource: GameDataSource,
        candidate: BattlePokemon,
        attacker: BattlePokemon,
        target: BattlePokemon,
        generation: number,
        version: string
    ): number {
        const attackerInput = SwitchInHelpers.buildCalcInput(
            dataSource,
            attacker,
            MIN_IV
        );
        const defenderInput = SwitchInHelpers.buildCalcInput(
            dataSource,
            target,
            MAX_IV
        );
        if (!attackerInput || !defenderInput) return 0;

        const moves =
            candidate.moves ??
            PokemonHelpers.getMovesAtLevel(
                dataSource,
                candidate.slug,
                version,
                candidate.level
            );

        return moves.reduce((max, moveSlug) => {
            const moveValues = MoveHelpers.getMoveForGeneration(
                dataSource,
                moveSlug,
                generation
            );
            const moveName = MoveHelpers.getMoveData(
                dataSource,
                moveSlug
            )?.name;
            if (!moveValues || moveValues.power === null || !moveName) {
                return max;
            }

            const range = DamageCalcHelpers.getDamagePercentRange(
                generation,
                attackerInput,
                defenderInput,
                moveName,
                SwitchInHelpers.NEUTRAL_FIELD
            );
            if (!range) return max;

            return Math.max(max, range[1]);
        }, 0);
    }

    // `pokemon` as an @smogon/calc-ready input, with no stat boosts and no
    // status condition (the switch-in AI evaluates a fresh matchup, not
    // the current battle's actual state). `defaultIv` is used for any stat
    // whose IV isn't explicitly set on `pokemon`.
    private static buildCalcInput(
        dataSource: GameDataSource,
        pokemon: BattlePokemon,
        defaultIv: number
    ): CalcPokemonInput | null {
        const displaySlug = PokemonHelpers.getDisplaySlug(dataSource, pokemon);
        const species = PokemonHelpers.getPokemonData(
            dataSource,
            displaySlug
        )?.name;
        if (!species) return null;

        return {
            abilityName:
                (pokemon.ability &&
                    AbilityHelpers.getAbilityData(dataSource, pokemon.ability)
                        ?.name) ??
                pokemon.ability ??
                '',
            boosts: {},
            evs: StatHelpers.normalizeStats(pokemon.evs, 0),
            gender: pokemon.gender,
            heldItem:
                (pokemon.heldItem &&
                    ItemHelpers.getHeldItemData(dataSource, pokemon.heldItem)
                        ?.name) ??
                pokemon.heldItem ??
                '',
            ivs: StatHelpers.normalizeStats(pokemon.ivs, defaultIv),
            level: pokemon.level,
            nature: pokemon.nature ?? Object.values(Nature)[0],
            species,
            status: '',
        };
    }
}
