import { route107 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_107: Location = {
    name: 'Route 107',
    map: route107,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-107',
    battles: [
        {
            battleKey: 'swimmer-f-beth',
            x: 27.5,
            y: 56.71,
        },
        {
            battleKey: 'swimmer-m-darrin',
            x: 45.73,
            y: 51.71,
        },
        {
            battleKey: 'sis-and-bro-lisa-and-ray',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 54.9,
            y: 22.02,
        },
        {
            battleKey: 'swimmer-m-tony',
            x: 64.17,
            y: 56.71,
        },
        {
            battleKey: 'swimmer-f-denise',
            x: 83.96,
            y: 31.71,
        },
    ],
};

export default ROUTE_107;
