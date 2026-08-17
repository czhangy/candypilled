import { route219 } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-219',
};

export default ROUTE_219;
