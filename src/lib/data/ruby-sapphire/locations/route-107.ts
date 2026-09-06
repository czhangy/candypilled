import { route107 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_107: Location = {
    name: 'Route 107',
    map: route107,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-107',
};

export default ROUTE_107;
