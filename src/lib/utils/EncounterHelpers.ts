import { ENCOUNTERS } from '@/lib/data/encounters';
import { Encounter } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class EncounterHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static get(gameName: string, key: string): Encounter[] | undefined {
        return ENCOUNTERS[StringHelpers.toSlug(gameName)]?.[key]?.encounters;
    }
}
