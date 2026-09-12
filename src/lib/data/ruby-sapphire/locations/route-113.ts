import { route113 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_113: Location = {
    name: 'Route 113',
    map: route113,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-113',
    battles: [
        {
            battleKey: 'youngster-neal',
            x: 62.5,
            y: 41.63,
        },
        {
            battleKey: 'ninja-boy-lao',
            x: 66.44,
            y: 16.94,
        },
        {
            battleKey: 'parasol-lady-madeline',
            x: 51.47,
            y: 56.32,
        },
        {
            battleKey: 'twins-tori-and-tia',
            x: 45.97,
            y: 31.94,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        {
            battleKey: 'ninja-boy-lung',
            x: 29.47,
            y: 32.26,
        },
        {
            battleKey: 'youngster-dillon',
            x: 21.47,
            y: 56.32,
        },
    ],
};

export default ROUTE_113;
