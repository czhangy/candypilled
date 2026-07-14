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
                    icon: EvolutionHelpers.getIcon(method.item),
                };
            case 'trade':
                return EvolutionHelpers.getTradeLabel(method);
            default:
                return { label: StringHelpers.toTitleCase(method.trigger) };
        }
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Slugs with an icon available in public/evolution_methods. Methods not
    // listed here fall back to their text label.
    private static readonly ICON_SLUGS = new Set([
        'chipped-pot',
        'cracked-pot',
        'dawn-stone',
        'deep-sea-scale',
        'deep-sea-tooth',
        'dragon-scale',
        'dubious-disc',
        'dusk-stone',
        'electirizer',
        'fire-stone',
        'friendship',
        'ice-stone',
        'kings-rock',
        'leaf-stone',
        'magmarizer',
        'metal-coat',
        'moon-stone',
        'oval-stone',
        'prism-scale',
        'protector',
        'razor-claw',
        'reaper-cloth',
        'shiny-stone',
        'sun-stone',
        'thunder-stone',
        'up-grade',
        'water-stone',
    ]);

    private static getIcon(slug: string | undefined): string | undefined {
        return slug && EvolutionHelpers.ICON_SLUGS.has(slug) ? slug : undefined;
    }

    private static getTradeLabel(
        method: EvolutionMethod
    ): EvolutionMethodLabel {
        const icon = EvolutionHelpers.getIcon(method.heldItem);

        return {
            label: 'Trade',
            condition:
                !icon && method.heldItem
                    ? StringHelpers.toTitleCase(method.heldItem)
                    : undefined,
            icon,
        };
    }

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
                icon: EvolutionHelpers.getIcon('friendship'),
            };
        }

        if (method.heldItem) {
            return {
                label: StringHelpers.toTitleCase(method.heldItem),
                condition: method.timeOfDay
                    ? StringHelpers.toTitleCase(method.timeOfDay)
                    : undefined,
                icon: EvolutionHelpers.getIcon(method.heldItem),
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
