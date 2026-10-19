import { route132 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_132: Location = {
    name: 'Route 132',
    map: route132,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-132',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-m-gilbert',
            x: 50.62,
            y: 33.36,
        },
        {
            battleKey: 'swimmer-f-dana',
            x: 13.12,
            y: 15.86,
        },
        {
            battleKey: 'fisherman-ronald',
            x: 61.88,
            y: 70.86,
        },
        {
            battleKey: 'black-belt-kiyo',
            x: 11.88,
            y: 38.36,
        },
        {
            battleKey: 'expert-m-paxton',
            x: 41.88,
            y: 65.86,
        },
        {
            battleKey: 'cooltrainer-f-darcy',
            x: 41.88,
            y: 78.36,
        },
        {
            battleKey: 'expert-f-makayla',
            x: 26.88,
            y: 75.86,
        },
        {
            battleKey: 'cooltrainer-m-jonathan',
            x: 26.88,
            y: 63.36,
        },
    ],
};

export default ROUTE_132;
