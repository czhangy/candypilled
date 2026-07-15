import StringHelpers from '@/lib/utils/StringHelpers';

export default class ItemHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getSprite(name: string): string {
        return `/battle_items/${StringHelpers.toSlug(name)}.png`;
    }
}
