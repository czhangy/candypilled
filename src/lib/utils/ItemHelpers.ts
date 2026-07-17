import StringHelpers from '@/lib/utils/StringHelpers';

export default class ItemHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The sprite path for the item named name. */
    static getItemSprite(name: string): string {
        return `/battle_items/${StringHelpers.toSlug(name)}.png`;
    }
}
