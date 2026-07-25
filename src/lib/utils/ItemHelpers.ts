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

    /** The held item data for name, or undefined if no held item matches. */
    static getHeldItemData(name: string): ItemData | undefined {
        return ITEMS[StringHelpers.toSlug(name)];
    }

    /** The sprite path for the held item named name, or undefined if no held item matches. */
    static getHeldItemSprite(name: string): string | undefined {
        return ItemHelpers.getHeldItemData(name)?.sprite;
    }
}
