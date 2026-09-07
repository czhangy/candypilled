import { route129 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_129: Location = {
    name: 'Route 129',
    map: route129,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-129',
};

export default ROUTE_129;
