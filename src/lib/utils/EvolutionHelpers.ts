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
                    condition: EvolutionHelpers.getCondition(method),
                    gender: EvolutionHelpers.getGender(method),
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
        const heldItemText =
            !icon && method.heldItem
                ? StringHelpers.toTitleCase(method.heldItem)
                : undefined;
        const condition = [heldItemText, EvolutionHelpers.getTimeOfDay(method)]
            .filter((part): part is string => !!part)
            .join(', ');

        return {
            label: 'Trade',
            condition: EvolutionHelpers.wrapCondition(condition || undefined),
            gender: EvolutionHelpers.getGender(method),
            icon,
        };
    }

    private static getTimeOfDay(method: EvolutionMethod): string | undefined {
        return method.timeOfDay
            ? StringHelpers.toTitleCase(method.timeOfDay)
            : undefined;
    }

    private static wrapCondition(text: string | undefined): string | undefined {
        return text ? `(${text})` : undefined;
    }

    private static getCondition(method: EvolutionMethod): string | undefined {
        return EvolutionHelpers.wrapCondition(
            EvolutionHelpers.getTimeOfDay(method)
        );
    }

    private static getGender(
        method: EvolutionMethod
    ): 'male' | 'female' | undefined {
        return method.gender === 'male' || method.gender === 'female'
            ? method.gender
            : undefined;
    }

    private static getLevelUpLabel(
        method: EvolutionMethod
    ): EvolutionMethodLabel {
        if (method.minLevel) {
            return {
                label: `Lv. ${method.minLevel}`,
                condition: EvolutionHelpers.getCondition(method),
                gender: EvolutionHelpers.getGender(method),
            };
        }

        if (method.minHappiness) {
            return {
                label: 'Happiness',
                condition: EvolutionHelpers.getCondition(method),
                gender: EvolutionHelpers.getGender(method),
                icon: EvolutionHelpers.getIcon('friendship'),
            };
        }

        if (method.heldItem) {
            return {
                label: StringHelpers.toTitleCase(method.heldItem),
                condition: EvolutionHelpers.getCondition(method),
                gender: EvolutionHelpers.getGender(method),
                icon: EvolutionHelpers.getIcon(method.heldItem),
            };
        }

        if (method.knownMove) {
            return {
                label: 'Knows',
                condition: [
                    StringHelpers.toTitleCase(method.knownMove),
                    EvolutionHelpers.getTimeOfDay(method),
                ]
                    .filter((part): part is string => !!part)
                    .join(', '),
                gender: EvolutionHelpers.getGender(method),
            };
        }

        if (method.knownMoveType) {
            return {
                label: `Knows ${StringHelpers.toTitleCase(method.knownMoveType)} Move`,
                condition: EvolutionHelpers.getCondition(method),
                gender: EvolutionHelpers.getGender(method),
            };
        }

        return {
            label: 'Level Up',
            condition: EvolutionHelpers.getCondition(method),
            gender: EvolutionHelpers.getGender(method),
        };
    }
}
