import { route203 } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-203',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Roark' },
        { method: EncounterMethod.OldRod, split: 'Roark' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.Surf, split: 'Byron' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-route-203',
            x: 14.89,
            y: 65.82,
        },
        {
            battleKey: 'youngster-michael',
            x: 19.58,
            y: 43.95,
        },
        {
            battleKey: 'youngster-dallas',
            x: 47.71,
            y: 62.7,
        },
        {
            battleKey: 'lass-kaitlin',
            x: 66.46,
            y: 65.82,
        },
        {
            battleKey: 'youngster-sebastian',
            x: 83.64,
            y: 62.7,
        },
        {
            battleKey: 'lass-madeline',
            x: 75.83,
            y: 37.7,
        },
    ],
};

export default ROUTE_203;
