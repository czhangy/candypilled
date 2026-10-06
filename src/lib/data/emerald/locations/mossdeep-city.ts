import { mossdeepCity } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MOSSDEEP_CITY: Location = {
    name: 'Mossdeep City',
    map: mossdeepCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'mossdeep-city-area',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
};

export default MOSSDEEP_CITY;
