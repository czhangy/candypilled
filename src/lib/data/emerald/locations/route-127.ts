import { route127 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_127: Location = {
    name: 'Route 127',
    map: route127,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-127',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'bird-keeper-aidan',
            x: 19.38,
            y: 29.18,
        },
        {
            battleKey: 'cooltrainer-f-athena',
            x: 15.62,
            y: 29.18,
        },
        {
            battleKey: 'fisherman-jonah',
            x: 53.12,
            y: 26.68,
        },
        {
            battleKey: 'fisherman-roger',
            x: 80.62,
            y: 24.18,
        },
        {
            battleKey: 'fisherman-henry',
            x: 68.12,
            y: 17.93,
        },
        {
            battleKey: 'triathlete-swimmer-m-camden',
            x: 56.88,
            y: 52.93,
        },
        {
            battleKey: 'black-belt-koji',
            x: 79.38,
            y: 79.18,
        },
        {
            battleKey: 'triathlete-swimmer-f-donny',
            x: 23.12,
            y: 85.43,
        },
    ],
};

export default ROUTE_127;
