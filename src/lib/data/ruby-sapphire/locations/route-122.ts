import { route122 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_122: Location = {
    name: 'Route 122',
    map: route122,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-122',
};

export default ROUTE_122;
