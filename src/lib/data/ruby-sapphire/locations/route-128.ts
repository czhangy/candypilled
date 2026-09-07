import { route128 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_128: Location = {
    name: 'Route 128',
    map: route128,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-128',
};

export default ROUTE_128;
