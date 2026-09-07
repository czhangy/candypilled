import { route120 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_120: Location = {
    name: 'Route 120',
    map: route120,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-120',
};

export default ROUTE_120;
