import { Battle, Location } from '@/lib/static/types';

export default class LocationHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getBattles(location: Location): Battle[] {
        return location.subareas
            ? location.subareas.flatMap((subarea) => subarea.battles ?? [])
            : (location.battles ?? []);
    }
}
