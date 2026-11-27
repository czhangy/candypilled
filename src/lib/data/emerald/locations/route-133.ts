import { route133 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_133: Location = {
    name: 'Route 133',
    map: route133,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-133',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-m-franklin',
            x: 85.62,
            y: 68.36,
        },
        {
            battleKey: 'swimmer-f-debra',
            x: 85.62,
            y: 70.86,
        },
        {
            battleKey: 'expert-f-mollie',
            x: 70.62,
            y: 28.36,
        },
        {
            battleKey: 'expert-m-conor',
            x: 70.62,
            y: 38.36,
        },
        {
            battleKey: 'cooltrainer-m-warren',
            x: 46.88,
            y: 38.36,
        },
        {
            battleKey: 'swimmer-f-linda',
            x: 16.88,
            y: 8.36,
        },
        {
            battleKey: 'bird-keeper-beck',
            x: 9.38,
            y: 35.86,
        },
    ],
    transitions: [
        { height: 288, location: 'Route 132', width: 16, x: 99.38, y: 32.5 },
        { height: 512, location: 'Route 134', width: 16, x: 0.63, y: 50 },
        { height: 32, location: 'Route 132', width: 16, x: 99.38, y: 87.5 },
    ],
};

export default ROUTE_133;
