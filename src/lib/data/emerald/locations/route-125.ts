import { route125 } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_125: Location = {
    name: 'Route 125',
    map: route125,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'hoenn-route-125',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'sailor-ernest',
            x: 26.88,
            y: 75.86,
        },
        {
            battleKey: 'swimmer-m-nolen',
            x: 9.38,
            y: 78.36,
        },
        {
            battleKey: 'swimmer-f-sharon',
            x: 38.12,
            y: 70.86,
        },
        {
            battleKey: 'swimmer-f-tanya',
            x: 48.12,
            y: 60.86,
        },
        {
            battleKey: 'bird-keeper-presley',
            x: 54.37,
            y: 48.36,
        },
        {
            battleKey: 'expert-m-auron',
            x: 60.62,
            y: 48.36,
        },
        {
            battleKey: 'swimmer-m-stan',
            x: 56.88,
            y: 23.36,
        },
        {
            battleKey: 'sr-and-jr-kim-and-iris',
            x: 22.5,
            y: 48.36,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
    ],
};

export default ROUTE_125;
