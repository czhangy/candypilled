import { route114 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_114: Location = {
    name: 'Route 114',
    map: route114,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-114',
    battles: [
        {
            battleKey: 'fisherman-nolan',
            x: 58.75,
            y: 25.29,
        },
        {
            battleKey: 'fisherman-claude',
            x: 48.75,
            y: 32.71,
        },
        {
            battleKey: 'picnicker-nancy',
            x: 48.59,
            y: 44.04,
        },
        {
            battleKey: 'sr-and-jr-tyra-and-ivy',
            x: 60,
            y: 55.43,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        {
            battleKey: 'camper-shane',
            x: 56.25,
            y: 62.85,
        },
        {
            battleKey: 'poke-maniac-steve',
            x: 51.25,
            y: 70.35,
        },
        {
            battleKey: 'kindler-bernie',
            x: 76.25,
            y: 72.85,
        },
        {
            battleKey: 'hiker-lucas',
            x: 76.25,
            y: 90.28,
        },
        {
            battleKey: 'hiker-lenny',
            x: 38.59,
            y: 81.61,
        },
    ],
};

export default ROUTE_114;
