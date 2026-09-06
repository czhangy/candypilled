import { route113 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_113: Location = {
    name: 'Route 113',
    map: route113,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-113',
};

export default ROUTE_113;
