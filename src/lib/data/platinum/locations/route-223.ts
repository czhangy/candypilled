import { route223 } from '@/lib/data/platinum/maps';
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
            x: 48.54,
            y: 89.94,
        },
        {
            battleKey: 'swimmer-f-aubree',
            x: 61.04,
            y: 83.68,
        },
        {
            battleKey: 'swimmer-m-oscar',
            x: 39.16,
            y: 70.4,
        },
        {
            battleKey: 'swimmer-f-paige',
            x: 48.54,
            y: 63.36,
        },
        {
            battleKey: 'swimmer-m-colton',
            x: 70.41,
            y: 63.36,
        },
        {
            battleKey: 'swimmer-m-ricardo',
            x: 39.16,
            y: 57.89,
        },
        {
            battleKey: 'swimmer-f-crystal',
            x: 51.66,
            y: 46.95,
        },
        {
            battleKey: 'swimmer-m-wesley',
            x: 17.29,
            y: 43.82,
        },
        {
            battleKey: 'sailor-zachariah',
            x: 48.54,
            y: 36.79,
        },
        {
            battleKey: 'swimmer-f-gabrielle',
            x: 36.04,
            y: 26.62,
        },
        {
            battleKey: 'swimmer-f-cassandra',
            x: 73.54,
            y: 21.93,
        },
        {
            battleKey: 'swimmer-m-francisco',
            x: 92.29,
            y: 36.79,
        },
        {
            battleKey: 'swimmer-m-troy',
            x: 57.91,
            y: 10.99,
        },
    ],
};

export default ROUTE_223;
