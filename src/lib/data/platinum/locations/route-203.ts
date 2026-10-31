import { route203 } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-203',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Roark' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.OldRod, split: 'Roark' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-route-203',
            x: 8.64,
            y: 70.51,
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
            battleKey: 'youngster-sebastian',
            x: 66.46,
            y: 65.82,
        },
        {
            battleKey: 'lass-kaitlin',
            x: 80.52,
            y: 65.82,
        },
        {
            battleKey: 'lass-madeline',
            x: 75.83,
            y: 37.7,
        },
    ],
};

export default ROUTE_203;
