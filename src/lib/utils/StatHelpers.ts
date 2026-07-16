import { Nature } from '@/lib/static/enums';
import { StatValues } from '@/lib/static/types';
import NatureHelpers from '@/lib/utils/NatureHelpers';

export default class StatHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static calculate(
        base: StatValues,
        level: number,
        ivs: StatValues,
        evs: StatValues,
        nature?: Nature
    ): StatValues {
        return {
            atk: StatHelpers.calculateStat(
                'atk',
                base.atk,
                level,
                ivs.atk,
                evs.atk,
                nature
            ),
            def: StatHelpers.calculateStat(
                'def',
                base.def,
                level,
                ivs.def,
                evs.def,
                nature
            ),
            hp: StatHelpers.calculateHp(base.hp, level, ivs.hp, evs.hp),
            spa: StatHelpers.calculateStat(
                'spa',
                base.spa,
                level,
                ivs.spa,
                evs.spa,
                nature
            ),
            spd: StatHelpers.calculateStat(
                'spd',
                base.spd,
                level,
                ivs.spd,
                evs.spd,
                nature
            ),
            spe: StatHelpers.calculateStat(
                'spe',
                base.spe,
                level,
                ivs.spe,
                evs.spe,
                nature
            ),
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

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

        return Math.floor(raw * NatureHelpers.getModifier(nature, stat));
    }
}
