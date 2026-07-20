import {
    EvolutionMethod,
    EvolutionMethodLabel,
    EvolutionStep,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class EvolutionHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The display label for methods (the first entry when multiple apply). */
    static getEvolutionMethodLabel(
        methods: EvolutionMethod[]
    ): EvolutionMethodLabel {
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
                    ...EvolutionHelpers.getBaseLabel(method),
                    icon: EvolutionHelpers.getIcon(method.item),
                };
            case 'trade':
                return EvolutionHelpers.getTradeLabel(method);
            default:
                return { label: StringHelpers.toTitleCase(method.trigger) };
        }
    }

    /** name's evolution line as of generation, or undefined if no form matches. */
    static getEvolutionLine(
        name: string,
        generation: number
    ): EvolutionStep | undefined {
        const pokemon = PokemonHelpers.getPokemonData(name);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(
            pokemon.evolutionLine,
            generation
        )?.line;
    }

    /**
     * The full evolution line reachable from name's family, i.e. every
     * branch from the family's base species, not just the ones leading to
     * name itself (which getEvolutionLine alone would prune, e.g. viewing
     * Mothim would otherwise exclude the Wormadam branch).
     */
    static getFullEvolutionLine(
        name: string,
        generation: number
    ): EvolutionStep | undefined {
        const line = EvolutionHelpers.getEvolutionLine(name, generation);
        if (!line) return undefined;

        return EvolutionHelpers.getEvolutionLine(line.name, generation) ?? line;
    }

    /**
     * Every species slug in name's evolution family (ancestors and
     * descendants, including sibling branches like other eeveelutions),
     * for detecting Nuzlocke duplicate-evolution-line catches.
     */
    static getEvolutionFamily(name: string, generation: number): string[] {
        const fullLine = EvolutionHelpers.getFullEvolutionLine(
            name,
            generation
        );
        if (!fullLine) return [StringHelpers.toSlug(name)];

        const slugs: string[] = [];
        const collect = (step: EvolutionStep): void => {
            // A step's name is ambiguous when it doesn't resolve to its
            // own entry (e.g. "wormadam"), so every matching form counts
            // as part of the family, not just the (non-existent) bare name.
            slugs.push(...PokemonHelpers.getPokemonForms(step.name));
            step.evolvesTo.forEach(collect);
        };
        collect(fullLine);

        return slugs;
    }

    /** Whether a and b are in the same evolution family as of generation. */
    static isSameEvolutionLine(
        a: string,
        b: string,
        generation: number
    ): boolean {
        return EvolutionHelpers.getEvolutionFamily(a, generation).includes(
            StringHelpers.toSlug(b)
        );
    }

    /** Whether every method reaching a step requires a trade. */
    static isTradeEvolution(methods: EvolutionMethod[] | undefined): boolean {
        return (
            !!methods &&
            methods.length > 0 &&
            methods.every((method) => method.trigger === 'trade')
        );
    }

    /**
     * The evolution steps directly reachable from name, i.e. the species it
     * can evolve into right now (empty if name doesn't evolve further).
     */
    static getNextEvolutions(
        name: string,
        generation: number
    ): EvolutionStep[] {
        const line = EvolutionHelpers.getEvolutionLine(name, generation);
        if (!line) return [];

        const slug = StringHelpers.toSlug(name);
        const findStep = (step: EvolutionStep): EvolutionStep | undefined => {
            if (step.name === slug) return step;
            return step.evolvesTo
                .map(findStep)
                .find((found): found is EvolutionStep => !!found);
        };

        return findStep(line)?.evolvesTo ?? [];
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
        'ice-rock',
        'ice-stone',
        'kings-rock',
        'leaf-stone',
        'magmarizer',
        'metal-coat',
        'moon-stone',
        'moss-rock',
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

    // Locations named after a specific landmark the player must be near
    // (rather than the area as a whole), whose name doesn't match the raw
    // location slug and which renders as an icon (slug in
    // public/evolution_methods) instead of text.
    private static readonly LOCATION_LANDMARKS: Record<
        string,
        { name: string; icon: string }
    > = {
        'eterna-forest': { name: 'Moss Rock', icon: 'moss-rock' },
        'sinnoh-route-217': { name: 'Ice Rock', icon: 'ice-rock' },
    };

    // "Mt" is an abbreviation of "Mount", so it needs a period that
    // toTitleCase's generic slug formatting doesn't add.
    private static getLocationName(location: string): string {
        return (
            EvolutionHelpers.LOCATION_LANDMARKS[location]?.name ??
            StringHelpers.toTitleCase(location).replace(/^Mt /, 'Mt. ')
        );
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

    // The condition/gender pair shared by nearly every label variant, so
    // callers only need to spread it and override what differs.
    private static getBaseLabel(
        method: EvolutionMethod
    ): Pick<EvolutionMethodLabel, 'condition' | 'gender'> {
        return {
            condition: EvolutionHelpers.getCondition(method),
            gender: EvolutionHelpers.getGender(method),
        };
    }

    private static getLevelUpLabel(
        method: EvolutionMethod
    ): EvolutionMethodLabel {
        const base = EvolutionHelpers.getBaseLabel(method);

        if (method.minLevel) {
            return { label: `Lv. ${method.minLevel}`, ...base };
        }

        if (method.minHappiness) {
            return {
                label: 'Happiness',
                ...base,
                icon: EvolutionHelpers.getIcon('friendship'),
            };
        }

        if (method.heldItem) {
            return {
                label: StringHelpers.toTitleCase(method.heldItem),
                ...base,
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
                gender: base.gender,
            };
        }

        if (method.knownMoveType) {
            return {
                label: `Knows ${StringHelpers.toTitleCase(method.knownMoveType)} Move`,
                ...base,
            };
        }

        if (method.location) {
            const locationName = EvolutionHelpers.getLocationName(
                method.location
            );
            const conditionIcon = EvolutionHelpers.getIcon(
                EvolutionHelpers.LOCATION_LANDMARKS[method.location]?.icon
            );

            return {
                label: 'Level Up',
                condition: conditionIcon
                    ? locationName
                    : EvolutionHelpers.wrapCondition(locationName),
                conditionIcon,
                gender: base.gender,
            };
        }

        return { label: 'Level Up', ...base };
    }
}
