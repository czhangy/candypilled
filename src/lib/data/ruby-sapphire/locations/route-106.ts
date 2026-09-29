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
            x: 81.85,
            y: 71.27,
        },
        {
            battleKey: 'fisherman-elliot',
            x: 64.35,
            y: 71.27,
        },
        {
            battleKey: 'swimmer-m-douglas',
            x: 36.79,
            y: 56.58,
        },
        {
            battleKey: 'swimmer-f-nicole',
            x: 23.04,
            y: 26.58,
        },
    ],
};

export default ROUTE_106;
