import { route125 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_125: Location = {
    name: 'Route 125',
    map: route125,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'hoenn-route-125',
};

export default ROUTE_125;
