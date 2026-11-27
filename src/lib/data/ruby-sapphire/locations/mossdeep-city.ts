import { mossdeepCity } from '@/lib/data/ruby-sapphire/maps';
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
    transitions: [
        { height: 16, location: 'Mossdeep Gym', width: 16, x: 48.13, y: 23.75 },
        { height: 16, location: 'Route 125', width: 528, x: 45.63, y: 1.25 },
        { height: 448, location: 'Route 124', width: 16, x: 0.63, y: 50 },
        { height: 16, location: 'Route 127', width: 160, x: 37.5, y: 98.75 },
    ],
};

export default MOSSDEEP_CITY;
