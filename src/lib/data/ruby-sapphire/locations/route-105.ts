import { route105 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_105: Location = {
    name: 'Route 105',
    map: route105,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-105',
};

export default ROUTE_105;
