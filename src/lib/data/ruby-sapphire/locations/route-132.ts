import { route132 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_132: Location = {
    name: 'Route 132',
    map: route132,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-132',
};

export default ROUTE_132;
