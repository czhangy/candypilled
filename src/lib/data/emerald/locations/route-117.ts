import { route117 } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_117: Location = {
    name: 'Route 117',
    map: route117,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-117',
    battles: [
        {
            battleKey: 'triathlete-runner-m-dylan',
            x: 64.17,
            y: 81.72,
        },
        {
            battleKey: 'sr-and-jr-anna-and-meg',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 71.67,
            y: 31.72,
        },
        {
            battleKey: 'pkmn-breeder-m-isaac',
            x: 55.83,
            y: 56.72,
        },
        {
            battleKey: 'triathlete-runner-f-maria',
            x: 44.17,
            y: 66.72,
        },
        {
            battleKey: 'bug-maniac-derek',
            x: 29.17,
            y: 61.72,
        },
        {
            battleKey: 'psychic-f-brandi',
            x: 25.83,
            y: 21.72,
        },
        {
            battleKey: 'triathlete-runner-f-melina',
            x: 27.5,
            y: 21.72,
        },
        {
            battleKey: 'battle-girl-aisha',
            x: 35.83,
            y: 21.72,
        },
        {
            battleKey: 'pkmn-breeder-f-lydia',
            x: 14.17,
            y: 51.72,
        },
    ],
};

export default ROUTE_117;
