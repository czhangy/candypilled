import { route112North, route112South } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_112: Location = {
    name: 'Route 112',
    subareas: [
        {
            name: 'South',
            map: route112South,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'hoenn-route-112',
        },
        {
            name: 'North',
            map: route112North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-112',
        },
    ],
};

export default ROUTE_112;
