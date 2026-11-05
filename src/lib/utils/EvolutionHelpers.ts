import {
    EvolutionMethod,
    EvolutionMethodLabel,
    EvolutionStep,
    GameDataSource,
    LearnsetDifference,
    LearnsetMove,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class EvolutionHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The display label for methods (the first entry when multiple apply), with item names and icons resolved through dataSource. */
    static getEvolutionMethodLabel(
        dataSource: GameDataSource,
        methods: EvolutionMethod[]
    ): EvolutionMethodLabel {
        const method = methods[0];
        if (!method) return { label: '' };

        switch (method.trigger) {
            case 'level-up':
                return EvolutionHelpers.getLevelUpLabel(dataSource, method);
            case 'use-item':
                return {
                    label: method.item
                        ? EvolutionHelpers.getItemName(dataSource, method.item)
                        : 'Use Item',
                    ...EvolutionHelpers.getBaseLabel(method),
                    icon: method.item
                        ? ItemHelpers.getHeldItemSprite(dataSource, method.item)
                        : undefined,
                };
            case 'trade':
                return EvolutionHelpers.getTradeLabel(dataSource, method);
            default:
                return { label: StringHelpers.toTitleCase(method.trigger) };
        }
    }

    /** slug's evolution line in dataSource as of generation, or undefined if no form matches. */
    static getEvolutionLine(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): EvolutionStep | undefined {
        const pokemon = PokemonHelpers.getPokemonData(dataSource, slug);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(
            pokemon.evolutionLine,
            generation
        )?.line;
    }

    /**
     * The full evolution line reachable from slug's family, i.e. every
     * branch from the family's base species, not just the ones leading to
     * slug itself (which getEvolutionLine alone would prune, e.g. viewing
     * Mothim would otherwise exclude the Wormadam branch).
     */
    static getFullEvolutionLine(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): EvolutionStep | undefined {
        const line = EvolutionHelpers.getEvolutionLine(
            dataSource,
            slug,
            generation
        );
        if (!line) return undefined;

        return (
            EvolutionHelpers.getEvolutionLine(
                dataSource,
                line.slug,
                generation
            ) ?? line
        );
    }

    /**
     * Every species slug in slug's evolution family (ancestors and
     * descendants, including sibling branches like other eeveelutions),
     * for detecting Nuzlocke duplicate-evolution-line catches.
     */
    static getEvolutionFamily(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): string[] {
        const fullLine = EvolutionHelpers.getFullEvolutionLine(
            dataSource,
            slug,
            generation
        );
        if (!fullLine) return [slug];

        const slugs: string[] = [];
        const collect = (step: EvolutionStep): void => {
            // A step's slug is ambiguous when it doesn't resolve to its
            // own entry (e.g. "wormadam"), so every matching form counts
            // as part of the family, not just the (non-existent) bare slug.
            slugs.push(
                ...PokemonHelpers.getPokemonForms(dataSource, step.slug)
            );
            step.evolvesTo.forEach(collect);
        };
        collect(fullLine);

        return slugs;
    }

    /**
     * For each earlier stage slug evolves from (forms included), its
     * level-up moves in version that slug learns at a different level, plus
     * those neither slug nor any later stage can learn by any method (the
     * stage's lostMoves), plus slug's own level-up moves the stage can't
     * learn by any method (gainedMoves). Stages with none are omitted.
     */
    static getLearnsetDifferences(
        dataSource: GameDataSource,
        slug: string,
        version: string,
        generation: number
    ): LearnsetDifference[] {
        const line = EvolutionHelpers.getEvolutionLine(
            dataSource,
            slug,
            generation
        );
        if (!line) return [];

        const getLearnset = (stage: string): LearnsetMove[] =>
            PokemonHelpers.getPokemonLearnset(dataSource, stage, version) ?? [];
        const ownLearnset = getLearnset(slug);
        const ownKeys = new Set(
            ownLearnset.map(
                (move) => `${move.method}:${move.slug}:${move.level ?? ''}`
            )
        );
        const ownLevelUpSlugs = new Set(
            ownLearnset
                .filter((move) => move.method === 'level-up')
                .map((move) => move.slug)
        );
        const getLevelOffset = (move: LearnsetMove): number | undefined => {
            const level = move.level;
            if (level === undefined) return undefined;

            const offsets = ownLearnset.flatMap((own) =>
                own.method === 'level-up' &&
                own.slug === move.slug &&
                own.level !== undefined
                    ? [level - own.level]
                    : []
            );
            return offsets.sort((a, b) => Math.abs(a) - Math.abs(b))[0];
        };
        const isSlugStep = (step: EvolutionStep): boolean =>
            PokemonHelpers.getPokemonForms(dataSource, step.slug).includes(
                slug
            );
        const findStep = (step: EvolutionStep): EvolutionStep | undefined =>
            isSlugStep(step)
                ? step
                : step.evolvesTo.map(findStep).find(Boolean);
        const findAncestors = (
            step: EvolutionStep,
            path: EvolutionStep[]
        ): EvolutionStep[] | undefined =>
            isSlugStep(step)
                ? path
                : step.evolvesTo
                      .map((next) => findAncestors(next, [...path, step]))
                      .find(Boolean);
        const laterStages: string[] = [];
        const collect = (step: EvolutionStep): void => {
            laterStages.push(
                ...PokemonHelpers.getPokemonForms(dataSource, step.slug)
            );
            step.evolvesTo.forEach(collect);
        };
        findStep(line)?.evolvesTo.forEach(collect);

        const learnableSlugs = new Set(
            [slug, ...laterStages].flatMap((stage) =>
                getLearnset(stage).map((move) => move.slug)
            )
        );
        const earlierStages = Array.from(
            new Set(
                (findAncestors(line, []) ?? []).flatMap((step) =>
                    PokemonHelpers.getPokemonForms(dataSource, step.slug)
                )
            )
        );

        return earlierStages
            .map((stage): LearnsetDifference => {
                const levelUpMoves = getLearnset(stage).filter(
                    (move) => move.method === 'level-up'
                );
                const lostMoves = levelUpMoves
                    .filter((move) => !learnableSlugs.has(move.slug))
                    .map((move) => move.slug);
                const stageSlugs = new Set(
                    getLearnset(stage).map((move) => move.slug)
                );
                const gainedLevelUpMoves = ownLearnset.filter(
                    (move) =>
                        move.method === 'level-up' && !stageSlugs.has(move.slug)
                );
                const gainedMoves = Array.from(
                    new Set(gainedLevelUpMoves.map((move) => move.slug))
                );
                const differingMoves = levelUpMoves.filter(
                    (move) =>
                        lostMoves.includes(move.slug) ||
                        (ownLevelUpSlugs.has(move.slug) &&
                            !ownKeys.has(
                                `${move.method}:${move.slug}:${move.level ?? ''}`
                            ))
                );
                const moves = [...differingMoves, ...gainedLevelUpMoves].sort(
                    (a, b) => (a.level ?? 0) - (b.level ?? 0)
                );
                const levelOffsets: Record<string, number> = {};
                differingMoves.forEach((move) => {
                    const offset = getLevelOffset(move);
                    if (offset !== undefined) {
                        levelOffsets[`${move.slug}-${move.level}`] = offset;
                    }
                });

                return {
                    gainedMoves,
                    levelOffsets,
                    lostMoves,
                    moves,
                    slug: stage,
                };
            })
            .filter((difference) => difference.moves.length > 0);
    }

    /** Whether a and b are in the same evolution family as of generation. */
    static isSameEvolutionLine(
        dataSource: GameDataSource,
        a: string,
        b: string,
        generation: number
    ): boolean {
        return EvolutionHelpers.getEvolutionFamily(
            dataSource,
            a,
            generation
        ).includes(b);
    }

    /** Whether every method reaching a step requires a trade. */
    static isTradeEvolution(methods: EvolutionMethod[] | undefined): boolean {
        return (
            !!methods &&
            methods.length > 0 &&
            methods.every((method) => method.trigger === 'trade')
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static getItemName(
        dataSource: GameDataSource,
        slug: string
    ): string {
        return (
            ItemHelpers.getHeldItemData(dataSource, slug)?.name ??
            StringHelpers.toTitleCase(slug)
        );
    }

    private static getTradeLabel(
        dataSource: GameDataSource,
        method: EvolutionMethod
    ): EvolutionMethodLabel {
        const conditionIcon = method.heldItem
            ? ItemHelpers.getHeldItemSprite(dataSource, method.heldItem)
            : undefined;
        const heldItemText = method.heldItem
            ? EvolutionHelpers.getItemName(dataSource, method.heldItem)
            : undefined;
        // The icon already conveys the held item, so its tooltip skips the
        // time of day rather than mixing it into the same text.
        const condition = conditionIcon
            ? heldItemText
            : [heldItemText, EvolutionHelpers.getTimeOfDay(method)]
                  .filter((part): part is string => !!part)
                  .join(', ');

        return {
            label: 'Trade',
            condition: conditionIcon
                ? condition
                : EvolutionHelpers.wrapCondition(condition || undefined),
            conditionIcon,
            gender: EvolutionHelpers.getGender(method),
        };
    }

    private static getTimeOfDay(method: EvolutionMethod): string | undefined {
        return method.timeOfDay
            ? StringHelpers.toTitleCase(method.timeOfDay)
            : undefined;
    }

    // Locations named after a specific landmark the player must be near
    // (rather than the area as a whole), whose name doesn't match the raw
    // location slug and which renders as an icon instead of text.
    private static readonly LOCATION_LANDMARKS: Record<
        string,
        { name: string; icon: string }
    > = {
        'eterna-forest': { name: 'Moss Rock', icon: '/common/moss-rock.png' },
        'sinnoh-route-217': { name: 'Ice Rock', icon: '/common/ice-rock.png' },
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
        dataSource: GameDataSource,
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
                icon: '/common/friendship.png',
            };
        }

        if (method.heldItem) {
            return {
                label: EvolutionHelpers.getItemName(
                    dataSource,
                    method.heldItem
                ),
                ...base,
                icon: ItemHelpers.getHeldItemSprite(
                    dataSource,
                    method.heldItem
                ),
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
            const conditionIcon =
                EvolutionHelpers.LOCATION_LANDMARKS[method.location]?.icon;

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
