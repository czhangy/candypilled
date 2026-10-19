import { everGrandeCity } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const EVER_GRANDE_CITY: Location = {
    name: 'Ever Grande City',
    map: everGrandeCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'ever-grande-city',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
    ],
};

export default EVER_GRANDE_CITY;
