import { route102 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_102: Location = {
    name: 'Route 102',
    map: route102,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-102',
};

export default ROUTE_102;
