import { route101 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_101: Location = {
    name: 'Route 101',
    map: route101,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-101',
};

export default ROUTE_101;
