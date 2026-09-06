import { route115 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_115: Location = {
    name: 'Route 115',
    map: route115,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-115',
};

export default ROUTE_115;
