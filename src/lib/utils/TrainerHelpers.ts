import StringHelpers from '@/lib/utils/StringHelpers';

export default class TrainerHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly CLASSES_SLUGGED_BY_NAME = [
        'PKMN Trainer',
        'Gym Leader',
        'Elite Four',
        'Champion',
        'Commander',
    ];

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The sprite path for the trainer named name, of trainerClass, in variant. */
    static getTrainerSprite(
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

        return `/${variant}/trainers/${StringHelpers.toSlug(trimmedSlugSource)}.png`;
    }
}
