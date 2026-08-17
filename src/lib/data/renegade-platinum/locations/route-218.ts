import { route218 } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-218',
};

export default ROUTE_218;
