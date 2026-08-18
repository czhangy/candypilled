import { route202 } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sinnoh-route-202',
};

export default ROUTE_202;
