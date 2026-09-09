import { route117 } from '@/lib/data/ruby-sapphire/maps';
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
            battleKey: 'sr-and-jr-anna-and-meg',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 76.56,
            y: 76.5,
        },
        {
            battleKey: 'triathlete-runner-m-dylan',
            x: 59.06,
            y: 36.19,
        },
        {
            battleKey: 'pkmn-breeder-f-lydia',
            x: 52.5,
            y: 56.5,
        },
        {
            battleKey: 'triathlete-runner-f-maria',
            x: 35.83,
            y: 6.19,
        },
        {
            battleKey: 'bug-maniac-derek',
            x: 29.06,
            y: 61.19,
        },
        {
            battleKey: 'pkmn-breeder-m-isaac',
            x: 17.4,
            y: 46.5,
        },
    ],
};

export default ROUTE_117;
