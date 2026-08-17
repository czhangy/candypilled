import { route207 } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const ROUTE_207: Location = {
    name: 'Route 207',
    map: route207,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-207',
};

export default ROUTE_207;
