import {
    GameDataSource,
    ItemData,
    ItemValuesByGeneration,
} from '@/lib/static/types';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';

export default class ItemHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The held item data for slug in dataSource, or undefined if no held item matches. */
    static getHeldItemData(
        dataSource: GameDataSource,
        slug: string
    ): ItemData | undefined {
        return dataSource.items[slug];
    }

    /** The slug of the held item named name in dataSource, or undefined if none matches. */
    static getHeldItemSlugByName(
        dataSource: GameDataSource,
        name: string
    ): string | undefined {
        return Object.values(dataSource.items).find(
            (item) => item.name === name
        )?.slug;
    }

    /** The sprite path for the held item slug in dataSource, or undefined if no held item matches. */
    static getHeldItemSprite(
        dataSource: GameDataSource,
        slug: string
    ): string | undefined {
        return ItemHelpers.getHeldItemData(dataSource, slug)?.sprite;
    }

    /**
     * Every item in dataSource that exists as of generation and is worth
     * browsing or picking, excluding the recovery and X items that are in
     * the data only so trainers' battle items can resolve, and key items.
     */
    static getBrowsableItems(
        dataSource: GameDataSource,
        generation: number
    ): ItemData[] {
        return Object.values(dataSource.items).filter(
            (item) =>
                !ItemHelpers.HIDDEN_CATEGORIES.includes(item.category) &&
                item.introducedInGeneration <= generation &&
                (item.removedInGeneration === undefined ||
                    generation < item.removedInGeneration)
        );
    }

    /** Whether slug in dataSource is curated as a dangerous held item. */
    static isDangerousItem(dataSource: GameDataSource, slug: string): boolean {
        return (
            ItemHelpers.getHeldItemData(dataSource, slug)?.isDangerous ?? false
        );
    }

    /** The values slug had as of generation in dataSource, or undefined if no held item matches. */
    static getHeldItemForGeneration(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): ItemValuesByGeneration | undefined {
        const item = ItemHelpers.getHeldItemData(dataSource, slug);
        if (!item) return undefined;

        return GenerationHelpers.resolveGeneration(
            item.valuesByGeneration,
            generation
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly HIDDEN_CATEGORIES = [
        'all-machines',
        'event-items',
        'gameplay',
        'healing',
        'plot-advancement',
        'stat-boosts',
        'status-cures',
    ];
}
