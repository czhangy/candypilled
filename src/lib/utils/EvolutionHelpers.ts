import { EvolutionMethod, EvolutionMethodLabel } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class EvolutionHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getMethodLabel(methods: EvolutionMethod[]): EvolutionMethodLabel {
        const method = methods[0];
        if (!method) return { label: '' };

        switch (method.trigger) {
            case 'level-up':
                return EvolutionHelpers.getLevelUpLabel(method);
            case 'use-item':
                return {
                    label: method.item
                        ? StringHelpers.toTitleCase(method.item)
                        : 'Use Item',
                };
            case 'trade':
                return {
                    label: 'Trade',
                    condition: method.heldItem
                        ? StringHelpers.toTitleCase(method.heldItem)
                        : undefined,
                };
            default:
                return { label: StringHelpers.toTitleCase(method.trigger) };
        }
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static getLevelUpLabel(
        method: EvolutionMethod
    ): EvolutionMethodLabel {
        if (method.minLevel) return { label: `Lv. ${method.minLevel}` };

        if (method.minHappiness) {
            return {
                label: 'Happiness',
                condition: method.timeOfDay
                    ? StringHelpers.toTitleCase(method.timeOfDay)
                    : undefined,
            };
        }

        if (method.knownMoveType) {
            return {
                label: `Knows ${StringHelpers.toTitleCase(method.knownMoveType)} Move`,
            };
        }

        return { label: 'Level Up' };
    }
}
