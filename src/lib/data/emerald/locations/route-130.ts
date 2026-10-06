import { route130 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_130: Location = {
    name: 'Route 130',
    map: route130,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-130',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-m-rodney',
            x: 88.12,
            y: 53.36,
        },
        {
            battleKey: 'swimmer-f-katie',
            x: 9.38,
            y: 53.36,
        },
        {
            battleKey: 'swimmer-m-santiago',
            x: 9.38,
            y: 75.86,
        },
    ],
};

export default ROUTE_130;
