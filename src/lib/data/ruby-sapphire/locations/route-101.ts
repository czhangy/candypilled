import { route101 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_101: Location = {
    name: 'Route 101',
    map: route101,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-101',
    methodSplits: [{ method: EncounterMethod.Starter, split: 'Roxanne' }],
};

export default ROUTE_101;
