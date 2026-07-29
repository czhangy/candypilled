import { ITEMS } from '@/lib/data/items';
import { ItemData } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class ItemHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The sprite path for the trainer battle item named name. */
    static getItemSprite(name: string): string {
        return `/battle-items/${StringHelpers.toSlug(name)}.png`;
    }

    /** The held item data for slug, or undefined if no held item matches. */
    static getHeldItemData(slug: string): ItemData | undefined {
        return ITEMS[slug];
    }

    /** The slug of the held item named name, or undefined if none matches. */
    static getHeldItemSlugByName(name: string): string | undefined {
        return Object.values(ITEMS).find((item) => item.name === name)?.slug;
    }

    /** The sprite path for the held item slug, or undefined if no held item matches. */
    static getHeldItemSprite(slug: string): string | undefined {
        return ItemHelpers.getHeldItemData(slug)?.sprite;
    }
}
