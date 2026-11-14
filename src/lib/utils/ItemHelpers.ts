import {
    Game,
    GameDataSource,
    ItemData,
    ItemLocation,
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
     * browsing or picking, excluding the recovery, status and X items that
     * are in the data only so trainers' battle items can resolve, key
     * items, and TMs/HMs (see getBrowsableTms).
     */
    static getBrowsableItems(
        dataSource: GameDataSource,
        generation: number
    ): ItemData[] {
        return Object.values(dataSource.items).filter(
            (item) =>
                !ItemHelpers.HIDDEN_CATEGORIES.includes(item.category) &&
                ItemHelpers.existsInGeneration(item, generation)
        );
    }

    /** Every TM and HM in dataSource that exists as of generation. */
    static getBrowsableTms(
        dataSource: GameDataSource,
        generation: number
    ): ItemData[] {
        return Object.values(dataSource.items).filter(
            (item) =>
                item.category === ItemHelpers.TM_CATEGORY &&
                ItemHelpers.existsInGeneration(item, generation)
        );
    }

    /**
     * Every location or subarea in game where the item slug can be found,
     * in the game's location order, with the count summed across all
     * pickups in the same place. Reads game.locations, so it is
     * independent of split progress.
     */
    static getItemLocations(game: Game, slug: string): ItemLocation[] {
        return game.locations.flatMap((location) => {
            const sources = location.subareas
                ? location.subareas.map((subarea) => ({
                      items: subarea.items,
                      name: `${location.name} (${subarea.name})`,
                  }))
                : [{ items: location.items, name: location.name }];

            return sources.flatMap(({ items, name }) => {
                const count = (items ?? [])
                    .filter((item) => item.slug === slug)
                    .reduce((total, item) => total + item.count, 0);

                return count > 0
                    ? [{ count, locationName: location.name, name }]
                    : [];
            });
        });
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

    private static readonly TM_CATEGORY = 'all-machines';

    private static readonly HIDDEN_CATEGORIES = [
        ItemHelpers.TM_CATEGORY,
        'event-items',
        'gameplay',
        'healing',
        'plot-advancement',
        'stat-boosts',
        'status-cures',
    ];

    private static existsInGeneration(
        item: ItemData,
        generation: number
    ): boolean {
        return (
            item.introducedInGeneration <= generation &&
            (item.removedInGeneration === undefined ||
                generation < item.removedInGeneration)
        );
    }
}
