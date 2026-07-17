import { Nature } from '@/lib/static/enums';
import { StatValues } from '@/lib/static/types';
import NatureHelpers from '@/lib/utils/NatureHelpers';

export default class StatHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** stats broadcast to every stat if a single number or fallback, or passed through as-is if already per-stat. */
    static normalizeStats(
        stats: number | StatValues | undefined,
        fallback: number
    ): StatValues {
        if (typeof stats === 'object') return stats;

        const value = stats ?? fallback;
        return StatHelpers.STAT_KEYS.reduce(
            (values, key) => ({ ...values, [key]: value }),
            {} as StatValues
        );
    }

    /** base stats at level, given ivs, evs, and nature. */
    static calculateStats(
        base: StatValues,
        level: number,
        ivs: StatValues,
        evs: StatValues,
        nature?: Nature
    ): StatValues {
        return StatHelpers.STAT_KEYS.reduce(
            (values, stat) => ({
                ...values,
                [stat]:
                    stat === 'hp'
                        ? StatHelpers.calculateHp(
                              base.hp,
                              level,
                              ivs.hp,
                              evs.hp
                          )
                        : StatHelpers.calculateStat(
                              stat,
                              base[stat],
                              level,
                              ivs[stat],
                              evs[stat],
                              nature
                          ),
            }),
            {} as StatValues
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STAT_KEYS: (keyof StatValues)[] = [
        'hp',
        'atk',
        'def',
        'spa',
        'spd',
        'spe',
    ];

    private static calculateHp(
        base: number,
        level: number,
        iv: number,
        ev: number
    ): number {
        return (
            Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) +
            level +
            10
        );
    }

    private static calculateStat(
        stat: keyof StatValues,
        base: number,
        level: number,
        iv: number,
        ev: number,
        nature: Nature | undefined
    ): number {
        const raw =
            Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) +
            5;

        return Math.floor(raw * NatureHelpers.getNatureModifier(nature, stat));
    }
}
