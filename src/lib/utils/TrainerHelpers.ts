import { TRAINER_CLASSES } from '@/lib/data/trainer-classes';
import { TrainerAssetFolder } from '@/lib/static/enums';

export default class TrainerHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** trainerClass's display label combined with name, e.g. "Leader Roark". name is omitted if purely numeric (a disambiguator with no in-universe meaning, e.g. a Galactic Grunt's battle number). */
    static getDisplayName(trainerClass: string, name: string): string {
        const { displayName } = TRAINER_CLASSES[trainerClass];
        return /^\d+$/.test(name) ? displayName : `${displayName} ${name}`;
    }

    /** The sprite path for the trainer of trainerClass, served from trainerAssetFolder. */
    static getTrainerSprite(
        trainerClass: string,
        trainerAssetFolder: TrainerAssetFolder
    ): string {
        const { spriteSlug } = TRAINER_CLASSES[trainerClass];
        return `/trainers/${trainerAssetFolder}/${spriteSlug}.png`;
    }

    /** The back-sprite path used for trainerClass when shown as a tag partner, served from trainerAssetFolder. */
    static getTagPartnerSprite(
        trainerClass: string,
        trainerAssetFolder: TrainerAssetFolder
    ): string {
        const { spriteSlug } = TRAINER_CLASSES[trainerClass];
        return `/trainers/${trainerAssetFolder}/${spriteSlug}-tag.png`;
    }
}
