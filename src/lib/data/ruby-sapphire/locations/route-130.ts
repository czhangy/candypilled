import { route130 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_130: Location = {
    name: 'Route 130',
    map: route130,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-130',
};

export default ROUTE_130;
