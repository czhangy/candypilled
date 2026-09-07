import { route123East, route123West } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_123: Location = {
    name: 'Route 123',
    subareas: [
        {
            name: 'West',
            map: route123West,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'hoenn-route-123',
        },
        {
            name: 'East',
            map: route123East,
            mapAnchor: MapAnchor.Right,
            encountersKey: 'hoenn-route-123',
        },
    ],
};

export default ROUTE_123;
