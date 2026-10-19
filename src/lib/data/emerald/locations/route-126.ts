import { route126 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_126: Location = {
    name: 'Route 126',
    map: route126,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'hoenn-route-126-area',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-m-leonardo',
            x: 70.62,
            y: 6.68,
        },
        {
            battleKey: 'triathlete-swimmer-f-isobel',
            x: 80.62,
            y: 6.68,
        },
        {
            battleKey: 'swimmer-m-dean',
            x: 70.62,
            y: 27.93,
        },
        {
            battleKey: 'swimmer-f-nikki',
            x: 79.38,
            y: 54.18,
        },
        {
            battleKey: 'swimmer-m-barry',
            x: 64.38,
            y: 81.68,
        },
        {
            battleKey: 'swimmer-f-sienna',
            x: 19.38,
            y: 82.93,
        },
        {
            battleKey: 'triathlete-swimmer-m-pablo',
            x: 9.38,
            y: 82.93,
        },
        {
            battleKey: 'swimmer-f-brenda',
            x: 11.88,
            y: 60.43,
        },
    ],
};

export default ROUTE_126;
