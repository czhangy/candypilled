import { route108 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_108: Location = {
    name: 'Route 108',
    map: route108,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-108',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-missy',
            x: 14.17,
            y: 36.72,
        },
        {
            battleKey: 'swimmer-m-matthew',
            x: 22.5,
            y: 66.72,
        },
        {
            battleKey: 'swimmer-f-tara',
            x: 59.17,
            y: 61.72,
        },
        {
            battleKey: 'cooltrainer-f-carolina',
            x: 69.17,
            y: 26.72,
        },
        {
            battleKey: 'sailor-cory',
            x: 72.5,
            y: 26.72,
        },
        {
            battleKey: 'swimmer-m-jerome',
            x: 87.5,
            y: 66.72,
        },
    ],
};

export default ROUTE_108;
