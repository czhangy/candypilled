import { route118East, route118West } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_118: Location = {
    name: 'Route 118',
    subareas: [
        {
            name: 'West',
            map: route118West,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-118',
        },
        {
            name: 'East',
            map: route118East,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-118',
        },
    ],
};

export default ROUTE_118;
