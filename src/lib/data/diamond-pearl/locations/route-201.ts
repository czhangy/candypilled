import { route201 } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'sinnoh-route-201',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Roark' }],
};

export default ROUTE_201;
