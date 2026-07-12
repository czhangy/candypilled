import StringHelpers from '@/lib/utils/StringHelpers';

export default class TrainerHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getSprite(trainerClass: string, variant: string): string {
        return `/${variant}/sprites/trainers/${StringHelpers.toSlug(trainerClass)}.png`;
    }
}
