import { route127 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_127: Location = {
    name: 'Route 127',
    map: route127,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-127',
};

export default ROUTE_127;
