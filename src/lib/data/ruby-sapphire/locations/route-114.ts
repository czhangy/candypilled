import { route114 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_114: Location = {
    name: 'Route 114',
    map: route114,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-114',
};

export default ROUTE_114;
