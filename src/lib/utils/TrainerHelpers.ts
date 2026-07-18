import { CLASSES_SLUGGED_BY_NAME } from '@/lib/static/constants';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class TrainerHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The sprite path for the trainer named name, of trainerClass, in variant. */
    static getTrainerSprite(
        trainerClass: string,
        name: string,
        variant: string
    ): string {
        const slugSource = CLASSES_SLUGGED_BY_NAME.includes(trainerClass)
            ? name
            : trainerClass;
        const trimmedSlugSource = slugSource.replace(/ \d+$/, '');

        return `/${variant}/trainers/${StringHelpers.toSlug(trimmedSlugSource)}.png`;
    }
}
