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
    transitions: [
        {
            height: 32,
            location: 'Route 104',
            subarea: 'South',
            width: 16,
            x: 1.67,
            y: 43.33,
        },
        { height: 64, location: 'Route 102', width: 16, x: 98.33, y: 60 },
        {
            height: 16,
            location: 'Petalburg Gym',
            width: 16,
            x: 51.67,
            y: 28.33,
        },
    ],
};

export default PETALBURG_CITY;
