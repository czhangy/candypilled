import { route102 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_102: Location = {
    name: 'Route 102',
    map: route102,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-102',
    battles: [
        {
            battleKey: 'youngster-calvin',
            x: 66.88,
            y: 71.59,
        },
        {
            battleKey: 'bug-catcher-rick',
            x: 50.88,
            y: 76.59,
        },
        {
            battleKey: 'youngster-allen',
            x: 38.88,
            y: 21.59,
        },
        {
            battleKey: 'lass-tiana',
            x: 16.88,
            y: 36.28,
        },
    ],
};

export default ROUTE_102;
