import { route203 } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-203',
};

export default ROUTE_203;
