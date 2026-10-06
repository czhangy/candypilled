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
            battleKey: 'cooltrainer-m-ruben',
            x: 39.58,
            y: 23.36,
        },
        {
            battleKey: 'cooltrainer-f-alexa',
            x: 20.42,
            y: 20.86,
        },
        {
            battleKey: 'fisherman-wayne',
            x: 52.92,
            y: 70.86,
        },
        {
            battleKey: 'triathlete-swimmer-m-isaiah',
            x: 29.58,
            y: 83.36,
        },
        {
            battleKey: 'triathlete-swimmer-f-katelyn',
            x: 65.42,
            y: 60.86,
        },
        {
            battleKey: 'swimmer-f-carlee',
            x: 84.58,
            y: 73.36,
        },
        {
            battleKey: 'swimmer-m-harrison',
            x: 84.58,
            y: 55.86,
        },
    ],
};

export default ROUTE_128;
