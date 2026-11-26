import { route213 } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'sinnoh-route-213',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Maylene' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.HoneyTree, split: 'Maylene' },
        { method: EncounterMethod.Grass, split: 'Maylene' },
    ],
    battles: [
        {
            battleKey: 'tuber-f-chelsea',
            x: 67.22,
            y: 42.51,
        },
        {
            battleKey: 'tuber-m-jared',
            x: 66.18,
            y: 50.32,
        },
        {
            battleKey: 'fisherman-kenneth',
            x: 26.6,
            y: 70.41,
        },
        {
            battleKey: 'beauty-cyndy',
            x: 29.72,
            y: 42.29,
        },
        {
            battleKey: 'swimmer-f-haley',
            x: 65.14,
            y: 80.01,
        },
        {
            battleKey: 'sailor-paul',
            x: 80.76,
            y: 84.47,
        },
        {
            battleKey: 'swimmer-m-evan',
            x: 89.1,
            y: 65.95,
        },
        {
            battleKey: 'swimmer-f-mary',
            x: 94.3,
            y: 65.95,
        },
        {
            battleKey: 'swimmer-m-sheltin',
            x: 53.68,
            y: 90.95,
        },
    ],
};

export default ROUTE_213;
