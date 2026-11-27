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
    transitions: [
        { height: 16, location: 'Route 105', width: 304, x: 24.38, y: 2.5 },
        {
            height: 16,
            location: 'Granite Cave',
            subarea: '1F',
            width: 16,
            x: 60.62,
            y: 82.5,
        },
        { height: 16, location: 'Dewford Town', width: 160, x: 85, y: 97.5 },
    ],
};

export default ROUTE_106;
