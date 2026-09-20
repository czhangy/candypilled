import { route113 } from '@/lib/data/emerald/maps';
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
            battleKey: 'youngster-jaylen',
            x: 62.5,
            y: 41.72,
        },
        {
            battleKey: 'camper-lawrence',
            customHeight: 57,
            x: 71.5,
            y: 16.72,
        },
        {
            battleKey: 'pokemaniac-wyatt',
            x: 75.5,
            y: 16.72,
        },
        {
            battleKey: 'parasol-lady-madeline',
            x: 51.5,
            y: 56.72,
        },
        {
            battleKey: 'twins-tori-and-tia',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 46.0,
            y: 31.72,
        },
        {
            battleKey: 'ninja-boy-lao',
            x: 29.5,
            y: 31.72,
        },
        {
            battleKey: 'youngster-dillon',
            x: 21.5,
            y: 56.72,
        },
        {
            battleKey: 'picnicker-sophie',
            x: 7.5,
            y: 31.72,
        },
        {
            battleKey: 'bird-keeper-coby',
            x: 7.5,
            y: 66.72,
        },
    ],
};

export default ROUTE_113;
