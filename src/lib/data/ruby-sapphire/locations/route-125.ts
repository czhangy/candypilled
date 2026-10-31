import { route125 } from '@/lib/data/ruby-sapphire/maps';
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
        { battleKey: 'swimmer-f-sharon', x: 49.38, y: 50.86 },
        { battleKey: 'sailor-ernest', x: 29.38, y: 70.86 },
        { battleKey: 'swimmer-f-tanya', x: 39.38, y: 83.36 },
        {
            battleKey: 'sr-and-jr-kim-and-iris',
            x: 26.28,
            y: 53.35,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        { battleKey: 'swimmer-m-stan', x: 11.88, y: 80.86 },
        { battleKey: 'swimmer-m-cody', x: 58.13, y: 23.36 },
    ],
};

export default ROUTE_125;
