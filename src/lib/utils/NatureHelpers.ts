import { Nature } from '@/lib/static/enums';
import { StatValues } from '@/lib/static/types';

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
