import { route201 } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-201',
};

export default ROUTE_201;
