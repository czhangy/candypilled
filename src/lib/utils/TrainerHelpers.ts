import { TRAINER_CLASSES } from '@/lib/data/trainer-classes';

export default class TrainerHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** trainerClass's display label combined with name, e.g. "Leader Roark". name is omitted if purely numeric (a disambiguator with no in-universe meaning, e.g. a Galactic Grunt's battle number). */
    static getDisplayName(trainerClass: string, name: string): string {
        const { displayName } = TRAINER_CLASSES[trainerClass];
        return /^\d+$/.test(name) ? displayName : `${displayName} ${name}`;
    }

    /** The sprite path for the trainer of trainerClass, in variant. */
    static getTrainerSprite(trainerClass: string, variant: string): string {
        const { spriteSlug } = TRAINER_CLASSES[trainerClass];
        return `/${variant}/trainers/${spriteSlug}.png`;
    }
}
