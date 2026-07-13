import StringHelpers from '@/lib/utils/StringHelpers';

export default class TrainerHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly CLASSES_SLUGGED_BY_NAME = [
        'PKMN Trainer',
        'Gym Leader',
    ];

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getSprite(
        trainerClass: string,
        name: string,
        variant: string
    ): string {
        const slugSource = TrainerHelpers.CLASSES_SLUGGED_BY_NAME.includes(
            trainerClass
        )
            ? name
            : trainerClass;
        const trimmedSlugSource = slugSource.replace(/ \d+$/, '');

        return `/${variant}/sprites/trainers/${StringHelpers.toSlug(trimmedSlugSource)}.png`;
    }
}
