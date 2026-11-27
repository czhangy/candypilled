import { fortreeCity } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FORTREE_CITY: Location = {
    name: 'Fortree City',
    map: fortreeCity,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'fortree-city',
    methodSplits: [{ method: EncounterMethod.Trade, split: 'Winona' }],
    transitions: [
        {
            height: 64,
            location: 'Route 119',
            subarea: 'Main',
            width: 16,
            x: 1.25,
            y: 40,
        },
        { height: 48, location: 'Route 120', width: 16, x: 98.75, y: 42.5 },
        { height: 16, location: 'Fortree Gym', width: 16, x: 56.25, y: 57.5 },
    ],
};

export default FORTREE_CITY;
