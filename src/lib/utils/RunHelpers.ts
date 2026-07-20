import { Run } from '@/lib/static/types';

export default class RunHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * Every location name whose encounter has already been used in run,
     * whether by catching a Pokémon there or by marking it missed.
     */
    static getUsedLocations(run: Run): string[] {
        return [
            ...run.caughtPokemon.map((caught) => caught.location),
            ...run.missedLocations,
        ];
    }
}
