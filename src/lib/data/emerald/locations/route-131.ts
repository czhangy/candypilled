import { route131 } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_131: Location = {
    name: 'Route 131',
    map: route131,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-131',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-m-kevin',
            x: 87.5,
            y: 50.86,
        },
        {
            battleKey: 'triathlete-swimmer-f-talia',
            x: 87.5,
            y: 68.36,
        },
        {
            battleKey: 'swimmer-m-richard',
            x: 69.17,
            y: 80.86,
        },
        {
            battleKey: 'swimmer-f-kara',
            x: 52.5,
            y: 63.36,
        },
        {
            battleKey: 'swimmer-m-herman',
            x: 30.83,
            y: 48.36,
        },
        {
            battleKey: 'swimmer-f-susie',
            x: 17.5,
            y: 55.86,
        },
        {
            battleKey: 'sis-and-bro-reli-and-ian',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 15.0,
            y: 40.86,
        },
    ],
};

export default ROUTE_131;
