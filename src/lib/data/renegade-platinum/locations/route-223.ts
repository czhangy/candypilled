import { route223 } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_223: Location = {
    name: 'Route 223',
    map: route223,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'route-223',
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'rain-dance',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Volkner' },
        { method: EncounterMethod.OldRod, split: 'Volkner' },
        { method: EncounterMethod.GoodRod, split: 'Volkner' },
        { method: EncounterMethod.SuperRod, split: 'Volkner' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-miranda',
            x: 48.54,
            y: 90.05,
        },
        {
            battleKey: 'swimmer-f-aubree',
            x: 61.04,
            y: 83.8,
        },
        {
            battleKey: 'swimmer-m-oscar',
            x: 39.16,
            y: 70.51,
        },
        {
            battleKey: 'swimmer-f-paige',
            x: 48.54,
            y: 63.47,
        },
        {
            battleKey: 'swimmer-m-colton',
            x: 70.41,
            y: 63.47,
        },
        {
            battleKey: 'swimmer-m-ricardo',
            x: 39.16,
            y: 58,
        },
        {
            battleKey: 'swimmer-f-crystal',
            x: 51.66,
            y: 47.06,
        },
        {
            battleKey: 'swimmer-m-wesley',
            x: 17.29,
            y: 43.93,
        },
        {
            battleKey: 'sailor-zachariah',
            x: 48.54,
            y: 36.79,
        },
        {
            battleKey: 'swimmer-f-gabrielle',
            x: 36.04,
            y: 26.74,
        },
        {
            battleKey: 'swimmer-f-cassandra',
            x: 73.54,
            y: 22.05,
        },
        {
            battleKey: 'swimmer-m-troy',
            x: 57.91,
            y: 11.1,
        },
    ],
};

export default ROUTE_223;
