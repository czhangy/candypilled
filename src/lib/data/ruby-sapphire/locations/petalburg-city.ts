import { petalburgCity } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_CITY: Location = {
    name: 'Petalburg City',
    map: petalburgCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'petalburg-city',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
};

export default PETALBURG_CITY;
