import { route223 } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_223: Location = {
    name: 'Route 223',
    map: route223,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sinnoh-sea-route-223',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Volkner' },
        { method: EncounterMethod.OldRod, split: 'Volkner' },
        { method: EncounterMethod.GoodRod, split: 'Volkner' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-miranda',
            x: 48.63,
            y: 90.05,
        },
        {
            battleKey: 'swimmer-f-aubree',
            x: 61.15,
            y: 83.8,
        },
        {
            battleKey: 'swimmer-m-oscar',
            x: 39.24,
            y: 70.51,
        },
        {
            battleKey: 'swimmer-f-paige',
            x: 48.63,
            y: 63.47,
        },
        {
            battleKey: 'swimmer-m-colton',
            x: 70.55,
            y: 63.47,
        },
        {
            battleKey: 'swimmer-m-ricardo',
            x: 39.24,
            y: 58,
        },
        {
            battleKey: 'swimmer-f-crystal',
            x: 51.76,
            y: 47.06,
        },
        {
            battleKey: 'swimmer-m-wesley',
            x: 17.32,
            y: 43.93,
        },
        {
            battleKey: 'sailor-zachariah',
            x: 48.63,
            y: 36.79,
        },
        {
            battleKey: 'swimmer-f-gabrielle',
            x: 36.11,
            y: 26.74,
        },
        {
            battleKey: 'swimmer-f-cassandra',
            x: 73.68,
            y: 22.05,
        },
        {
            battleKey: 'swimmer-m-francisco',
            x: 92.47,
            y: 36.9,
        },
        {
            battleKey: 'swimmer-m-troy',
            x: 58.02,
            y: 11.1,
        },
    ],
};

export default ROUTE_223;
