import { route106 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_106: Location = {
    name: 'Route 106',
    map: route106,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-106',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
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
            x: 36.88,
            y: 56.72,
        },
        {
            battleKey: 'swimmer-f-nicole',
            x: 23.12,
            y: 26.72,
        },
    ],
};

export default ROUTE_106;
