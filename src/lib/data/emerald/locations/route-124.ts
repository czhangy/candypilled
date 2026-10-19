import { route124 } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_124: Location = {
    name: 'Route 124',
    map: route124,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-124-area',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-grace',
            x: 9.38,
            y: 29.18,
        },
        {
            battleKey: 'swimmer-m-declan',
            x: 9.38,
            y: 36.68,
        },
        {
            battleKey: 'sis-and-bro-lila-and-roy',
            x: 22.5,
            y: 55.43,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        {
            battleKey: 'swimmer-m-spencer',
            x: 43.12,
            y: 31.68,
        },
        {
            battleKey: 'swimmer-f-jenny',
            x: 61.88,
            y: 56.68,
        },
        {
            battleKey: 'swimmer-m-chad',
            x: 73.12,
            y: 72.93,
        },
        {
            battleKey: 'triathlete-swimmer-f-isabella',
            x: 86.88,
            y: 92.93,
        },
        {
            battleKey: 'swimmer-m-roland',
            x: 76.88,
            y: 92.93,
        },
    ],
};

export default ROUTE_124;
