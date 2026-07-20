import { PokemonType } from '@/lib/static/enums';

type TypeMatchup = {
    attacker: PokemonType;
    defender: PokemonType;
    // The Gen 6+ multiplier. Usually non-neutral, but can be 1 (neutral)
    // for a matchup that was non-neutral pre-Gen 6, e.g. Steel losing its
    // resistances to Ghost and Dark in Gen 6.
    multiplier: 0 | 0.5 | 1 | 2;
    // Set only when the pre-Gen 6 matchup differs from `multiplier`.
    preGen6Multiplier?: 0 | 0.5 | 2;
};

export default class TypeHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** type's display color, or undefined if type doesn't match a known type. */
    static getTypeColor(type: string): string | undefined {
        return TypeHelpers.COLORS[type];
    }

    /** All 18 types, or the 17 pre-Gen 6 types (Fairy didn't exist yet). */
    static getTypes(isGen6Plus: boolean): PokemonType[] {
        const types = Object.values(PokemonType);
        return isGen6Plus
            ? types
            : types.filter((type) => type !== PokemonType.Fairy);
    }

    /**
     * The damage multiplier when `attacker` hits `defender`, for the
     * requested chart version. Matchups not present in `TYPE_MATCHUPS`
     * are neutral (1x).
     */
    static getMultiplier(
        attacker: PokemonType,
        defender: PokemonType,
        isGen6Plus: boolean
    ): number {
        const matchup = TypeHelpers.TYPE_MATCHUPS.find(
            (entry) =>
                entry.attacker === attacker && entry.defender === defender
        );
        if (!matchup) return 1;

        return isGen6Plus
            ? matchup.multiplier
            : (matchup.preGen6Multiplier ?? matchup.multiplier);
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Every attacking-type/defending-type matchup that's non-neutral in
    // either the Gen 6+ or the pre-Gen 6 chart. Matchups not listed here
    // are neutral (1x) in both. Fairy didn't exist before Gen 6, so it's
    // simply omitted from the pre-Gen 6 chart rather than represented
    // here.
    private static readonly TYPE_MATCHUPS: TypeMatchup[] = [
        // Normal
        {
            attacker: PokemonType.Normal,
            defender: PokemonType.Rock,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Normal,
            defender: PokemonType.Ghost,
            multiplier: 0,
        },
        {
            attacker: PokemonType.Normal,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        // Fire
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Fire,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Water,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Grass,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Ice,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Bug,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Rock,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Dragon,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fire,
            defender: PokemonType.Steel,
            multiplier: 2,
        },
        // Water
        {
            attacker: PokemonType.Water,
            defender: PokemonType.Fire,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Water,
            defender: PokemonType.Water,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Water,
            defender: PokemonType.Grass,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Water,
            defender: PokemonType.Ground,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Water,
            defender: PokemonType.Rock,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Water,
            defender: PokemonType.Dragon,
            multiplier: 0.5,
        },
        // Electric
        {
            attacker: PokemonType.Electric,
            defender: PokemonType.Water,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Electric,
            defender: PokemonType.Electric,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Electric,
            defender: PokemonType.Grass,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Electric,
            defender: PokemonType.Ground,
            multiplier: 0,
        },
        {
            attacker: PokemonType.Electric,
            defender: PokemonType.Flying,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Electric,
            defender: PokemonType.Dragon,
            multiplier: 0.5,
        },
        // Grass
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Fire,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Water,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Grass,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Poison,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Ground,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Flying,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Bug,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Rock,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Dragon,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Grass,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        // Ice
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Fire,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Water,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Grass,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Ice,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Ground,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Flying,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Dragon,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ice,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        // Fighting
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Normal,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Ice,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Poison,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Flying,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Psychic,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Bug,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Rock,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Ghost,
            multiplier: 0,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Dark,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Steel,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fighting,
            defender: PokemonType.Fairy,
            multiplier: 0.5,
        },
        // Poison
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Grass,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Poison,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Ground,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Rock,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Ghost,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Steel,
            multiplier: 0,
        },
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Fairy,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Poison,
            defender: PokemonType.Bug,
            multiplier: 1,
            preGen6Multiplier: 2,
        },
        // Ground
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Fire,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Electric,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Grass,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Poison,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Flying,
            multiplier: 0,
        },
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Bug,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Rock,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ground,
            defender: PokemonType.Steel,
            multiplier: 2,
        },
        // Flying
        {
            attacker: PokemonType.Flying,
            defender: PokemonType.Electric,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Flying,
            defender: PokemonType.Grass,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Flying,
            defender: PokemonType.Fighting,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Flying,
            defender: PokemonType.Bug,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Flying,
            defender: PokemonType.Rock,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Flying,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        // Psychic
        {
            attacker: PokemonType.Psychic,
            defender: PokemonType.Fighting,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Psychic,
            defender: PokemonType.Poison,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Psychic,
            defender: PokemonType.Psychic,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Psychic,
            defender: PokemonType.Dark,
            multiplier: 0,
        },
        {
            attacker: PokemonType.Psychic,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        // Bug
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Fire,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Grass,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Fighting,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Poison,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Flying,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Psychic,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Ghost,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Dark,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Bug,
            defender: PokemonType.Fairy,
            multiplier: 0.5,
        },
        // Rock
        {
            attacker: PokemonType.Rock,
            defender: PokemonType.Fire,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Rock,
            defender: PokemonType.Ice,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Rock,
            defender: PokemonType.Fighting,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Rock,
            defender: PokemonType.Ground,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Rock,
            defender: PokemonType.Flying,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Rock,
            defender: PokemonType.Bug,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Rock,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        // Ghost
        {
            attacker: PokemonType.Ghost,
            defender: PokemonType.Normal,
            multiplier: 0,
        },
        {
            attacker: PokemonType.Ghost,
            defender: PokemonType.Psychic,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ghost,
            defender: PokemonType.Ghost,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Ghost,
            defender: PokemonType.Dark,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Ghost,
            defender: PokemonType.Steel,
            multiplier: 1,
            preGen6Multiplier: 0.5,
        },
        // Dragon
        {
            attacker: PokemonType.Dragon,
            defender: PokemonType.Dragon,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Dragon,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Dragon,
            defender: PokemonType.Fairy,
            multiplier: 0,
        },
        // Dark
        {
            attacker: PokemonType.Dark,
            defender: PokemonType.Fighting,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Dark,
            defender: PokemonType.Psychic,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Dark,
            defender: PokemonType.Ghost,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Dark,
            defender: PokemonType.Dark,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Dark,
            defender: PokemonType.Fairy,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Dark,
            defender: PokemonType.Steel,
            multiplier: 1,
            preGen6Multiplier: 0.5,
        },
        // Steel
        {
            attacker: PokemonType.Steel,
            defender: PokemonType.Fire,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Steel,
            defender: PokemonType.Water,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Steel,
            defender: PokemonType.Electric,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Steel,
            defender: PokemonType.Ice,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Steel,
            defender: PokemonType.Rock,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Steel,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Steel,
            defender: PokemonType.Fairy,
            multiplier: 2,
        },
        // Fairy
        {
            attacker: PokemonType.Fairy,
            defender: PokemonType.Fighting,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fairy,
            defender: PokemonType.Poison,
            multiplier: 0.5,
        },
        {
            attacker: PokemonType.Fairy,
            defender: PokemonType.Dragon,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fairy,
            defender: PokemonType.Dark,
            multiplier: 2,
        },
        {
            attacker: PokemonType.Fairy,
            defender: PokemonType.Steel,
            multiplier: 0.5,
        },
    ];

    // Sampled from each type's dominant fill color in /public/types/*.png.
    private static readonly COLORS: Record<string, string> = {
        bug: '#a8b820',
        dark: '#705848',
        dragon: '#7038f8',
        electric: '#f8d030',
        fairy: '#f890a8',
        fighting: '#c03028',
        fire: '#f08030',
        flying: '#a890f0',
        ghost: '#705898',
        grass: '#78c850',
        ground: '#e0c068',
        ice: '#98d8d8',
        normal: '#a8a878',
        poison: '#a040a0',
        psychic: '#f85888',
        rock: '#b8a038',
        steel: '#b8b8d0',
        unknown: '#68a090',
        water: '#6890f0',
    };
}
