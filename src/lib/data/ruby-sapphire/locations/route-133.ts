import { route133 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_133: Location = {
    name: 'Route 133',
    map: route133,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-133',
};

export default ROUTE_133;
