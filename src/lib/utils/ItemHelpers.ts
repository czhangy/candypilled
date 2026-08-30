import { GameDataSource, ItemData } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class ItemHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The sprite path for the trainer battle item named name. */
    static getItemSprite(name: string): string {
        return `/battle-items/${StringHelpers.toSlug(name)}.png`;
    }

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

    /** Whether slug in dataSource is curated as a dangerous held item. */
    static isDangerousItem(dataSource: GameDataSource, slug: string): boolean {
        return (
            ItemHelpers.getHeldItemData(dataSource, slug)?.isDangerous ?? false
        );
    }
}
