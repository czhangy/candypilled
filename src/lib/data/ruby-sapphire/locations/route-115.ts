import { route115North, route115South } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_115: Location = {
    name: 'Route 115',
    subareas: [
        {
            name: 'South',
            map: route115South,
            mapAnchor: MapAnchor.Unaudited,
            encountersKey: 'hoenn-route-115',
        },
        {
            name: 'North',
            map: route115North,
            mapAnchor: MapAnchor.Unaudited,
            encountersKey: 'hoenn-route-115',
        },
    ],
};

export default ROUTE_115;
