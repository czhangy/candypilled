import { route124 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_124: Location = {
    name: 'Route 124',
    map: route124,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-124-area',
};

export default ROUTE_124;
