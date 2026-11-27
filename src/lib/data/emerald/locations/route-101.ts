import { route101 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_101: Location = {
    name: 'Route 101',
    map: route101,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-101',
    methodSplits: [{ method: EncounterMethod.Starter, split: 'Roxanne' }],
    transitions: [
        { height: 16, location: 'Oldale Town', width: 64, x: 50, y: 2.5 },
        { height: 16, location: 'Littleroot Town', width: 32, x: 55, y: 97.5 },
    ],
};

export default ROUTE_101;
