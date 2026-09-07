import { route126 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_126: Location = {
    name: 'Route 126',
    map: route126,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'hoenn-route-126-area',
};

export default ROUTE_126;
