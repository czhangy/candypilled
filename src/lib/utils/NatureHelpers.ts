import { Nature } from '@/lib/static/enums';
import {
    NatureGridCell,
    NatureGridStat,
    NatureStatPair,
    StatValues,
} from '@/lib/static/types';

type NatureEffect = {
    increased: string;
    decreased: string;
};

export default class NatureHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** nature's effect label (e.g. "[+Atk -SpA]"), or null if nature is neutral. */
    static getNatureEffect(nature: Nature): string | null {
        const effect = NatureHelpers.EFFECTS[nature];
        if (!effect) return null;

        return `[+${effect.increased} -${effect.decreased}]`;
    }

    /**
     * The full nature pivot table: rows indexed by increased stat, columns
     * indexed by decreased stat, both in `STAT_ORDER`. Cells on the diagonal
     * are neutral (the stat is both increased and decreased).
     */
    static getNatureGrid(): NatureGridCell[][] {
        return NatureHelpers.STAT_ORDER.map((increased) =>
            NatureHelpers.STAT_ORDER.map((decreased) => ({
                nature:
                    increased === decreased
                        ? NatureHelpers.NEUTRALS[increased]
                        : NatureHelpers.findNature(increased, decreased),
                neutral: increased === decreased,
            }))
        );
    }

    /** the increased/decreased stat pair a nature occupies in the grid. */
    static getNatureStats(nature: Nature): NatureStatPair {
        const effect = NatureHelpers.EFFECTS[nature];
        if (!effect) {
            const stat = NatureHelpers.STAT_ORDER.find(
                (key) => NatureHelpers.NEUTRALS[key] === nature
            ) as NatureGridStat;
            return { increased: stat, decreased: stat };
        }

        return {
            increased: NatureHelpers.LABEL_TO_STAT[
                effect.increased
            ] as NatureGridStat,
            decreased: NatureHelpers.LABEL_TO_STAT[
                effect.decreased
            ] as NatureGridStat,
        };
    }

    /** parses a case-insensitive nature name (e.g. from a URL query param). */
    static parseNature(value: string | null | undefined): Nature | undefined {
        if (!value) return undefined;

        return Object.values(Nature).find(
            (nature) => nature.toLowerCase() === value.toLowerCase()
        );
    }

    /** stat keys in the order they're displayed in the nature grid. */
    static readonly STAT_ORDER: NatureGridStat[] = [
        'atk',
        'def',
        'spa',
        'spd',
        'spe',
    ];

    /**
     * The multiplier nature applies to stat: 1.1 when boosted, 0.9 when
     * hindered, 1 otherwise. HP is never affected by nature.
     */
    static getNatureModifier(
        nature: Nature | undefined,
        stat: keyof StatValues
    ): number {
        const effect = nature ? NatureHelpers.EFFECTS[nature] : undefined;
        if (!effect) return 1;

        if (NatureHelpers.LABEL_TO_STAT[effect.increased] === stat) return 1.1;
        if (NatureHelpers.LABEL_TO_STAT[effect.decreased] === stat) return 0.9;

        return 1;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly LABEL_TO_STAT: Record<string, keyof StatValues> = {
        Atk: 'atk',
        Def: 'def',
        SpA: 'spa',
        SpD: 'spd',
        Spe: 'spe',
    };

    private static readonly NEUTRALS: Record<NatureGridStat, Nature> = {
        atk: Nature.Hardy,
        def: Nature.Docile,
        spa: Nature.Bashful,
        spd: Nature.Quirky,
        spe: Nature.Serious,
    };

    /** the non-neutral nature that increases `increased` and decreases `decreased`. */
    private static findNature(
        increased: NatureGridStat,
        decreased: NatureGridStat
    ): Nature {
        const [nature] = Object.entries(NatureHelpers.EFFECTS).find(
            ([, effect]) =>
                NatureHelpers.LABEL_TO_STAT[effect.increased] === increased &&
                NatureHelpers.LABEL_TO_STAT[effect.decreased] === decreased
        ) as [Nature, NatureEffect];

        return nature;
    }

    private static readonly EFFECTS: Partial<Record<Nature, NatureEffect>> = {
        [Nature.Adamant]: { increased: 'Atk', decreased: 'SpA' },
        [Nature.Bold]: { increased: 'Def', decreased: 'Atk' },
        [Nature.Brave]: { increased: 'Atk', decreased: 'Spe' },
        [Nature.Calm]: { increased: 'SpD', decreased: 'Atk' },
        [Nature.Careful]: { increased: 'SpD', decreased: 'SpA' },
        [Nature.Gentle]: { increased: 'SpD', decreased: 'Def' },
        [Nature.Hasty]: { increased: 'Spe', decreased: 'Def' },
        [Nature.Impish]: { increased: 'Def', decreased: 'SpA' },
        [Nature.Jolly]: { increased: 'Spe', decreased: 'SpA' },
        [Nature.Lax]: { increased: 'Def', decreased: 'SpD' },
        [Nature.Lonely]: { increased: 'Atk', decreased: 'Def' },
        [Nature.Mild]: { increased: 'SpA', decreased: 'Def' },
        [Nature.Modest]: { increased: 'SpA', decreased: 'Atk' },
        [Nature.Naive]: { increased: 'Spe', decreased: 'SpD' },
        [Nature.Naughty]: { increased: 'Atk', decreased: 'SpD' },
        [Nature.Quiet]: { increased: 'SpA', decreased: 'Spe' },
        [Nature.Rash]: { increased: 'SpA', decreased: 'SpD' },
        [Nature.Relaxed]: { increased: 'Def', decreased: 'Spe' },
        [Nature.Sassy]: { increased: 'SpD', decreased: 'Spe' },
        [Nature.Timid]: { increased: 'Spe', decreased: 'Atk' },
    };
}
