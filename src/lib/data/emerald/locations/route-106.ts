import { route106 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_106: Location = {
    name: 'Route 106',
    map: route106,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-106',
    methodSplits: [
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'fisherman-ned',
            x: 81.88,
            y: 71.72,
        },
        {
            battleKey: 'fisherman-elliot',
            x: 64.38,
            y: 71.72,
        },
        {
            battleKey: 'swimmer-m-douglas',
            x: 23.13,
            y: 26.72,
        },
        {
            battleKey: 'swimmer-f-kyla',
            x: 36.88,
            y: 51.72,
        },
    ],
};

export default ROUTE_106;
