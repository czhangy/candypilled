import { route121 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_121: Location = {
    name: 'Route 121',
    map: route121,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-121',
};

export default ROUTE_121;
