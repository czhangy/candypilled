import { route128 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_128: Location = {
    name: 'Route 128',
    map: route128,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-128',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'cooltrainer-f-alexa',
            x: 20.42,
            y: 20.86,
        },
        {
            battleKey: 'cooltrainer-m-ruben',
            x: 39.58,
            y: 23.36,
        },
        {
            battleKey: 'triathlete-swimmer-m-isaiah',
            x: 29.58,
            y: 83.36,
        },
        {
            battleKey: 'fisherman-wayne',
            x: 52.92,
            y: 70.86,
        },
        {
            battleKey: 'triathlete-swimmer-f-katelyn',
            x: 65.42,
            y: 60.86,
        },
        {
            battleKey: 'swimmer-m-harrison',
            x: 84.58,
            y: 55.86,
        },
        {
            battleKey: 'swimmer-f-carlee',
            x: 84.58,
            y: 73.36,
        },
    ],
    transitions: [
        { height: 16, location: 'Route 127', width: 400, x: 26.25, y: 1.25 },
        {
            height: 112,
            location: 'Ever Grande City',
            subarea: 'City',
            width: 16,
            x: 99.58,
            y: 73.75,
        },
        { height: 16, location: 'Route 129', width: 384, x: 36.67, y: 98.75 },
    ],
};

export default ROUTE_128;
