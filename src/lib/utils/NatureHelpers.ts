import { Nature } from '@/lib/static/enums';

interface NatureEffect {
    increased: string;
    decreased: string;
}

export default class NatureHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getEffectLabel(nature: Nature): string | null {
        const effect = NatureHelpers.EFFECTS[nature];
        if (!effect) return null;

        return `[+${effect.increased} -${effect.decreased}]`;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

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
