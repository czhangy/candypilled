import { route131 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_131: Location = {
    name: 'Route 131',
    map: route131,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-131',
};

export default ROUTE_131;
