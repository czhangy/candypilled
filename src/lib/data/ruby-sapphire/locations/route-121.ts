import { route121 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_121: Location = {
    name: 'Route 121',
    map: route121,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-121',
    battles: [
        { battleKey: 'hex-maniac-tammy', x: 14.3, y: 51.28 },
        { battleKey: 'beauty-jessica', x: 28.13, y: 26.28 },
        {
            battleKey: 'sr-and-jr-kate-and-joy',
            x: 50,
            y: 46.28,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        { battleKey: 'gentleman-walter', x: 69.4, y: 41.28 },
        { battleKey: 'pokefan-f-vanessa', x: 79.4, y: 26.28 },
    ],
};

export default ROUTE_121;
