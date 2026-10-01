import { petalburgCity } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_CITY: Location = {
    name: 'Petalburg City',
    map: petalburgCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'petalburg-city',
    methodSplits: [
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
    ],
};

export default PETALBURG_CITY;
