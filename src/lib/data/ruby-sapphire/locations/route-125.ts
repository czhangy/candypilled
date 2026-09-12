import { route125 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_125: Location = {
    name: 'Route 125',
    map: route125,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'hoenn-route-125',
    battles: [
        { battleKey: 'swimmer-f-sharon', x: 49.3, y: 50.76 },
        { battleKey: 'sailor-ernest', x: 29.38, y: 70.45 },
        { battleKey: 'swimmer-f-tanya', x: 39.32, y: 83.35 },
        {
            battleKey: 'sr-and-jr-kim-and-iris',
            x: 26.28,
            y: 53.35,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        { battleKey: 'swimmer-m-stan', x: 11.82, y: 80.85 },
        { battleKey: 'swimmer-m-cody', x: 58.15, y: 23.21 },
    ],
};

export default ROUTE_125;
