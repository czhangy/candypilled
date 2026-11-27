import { littlerootTown } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LITTLEROOT_TOWN: Location = {
    name: 'Littleroot Town',
    map: littlerootTown,
    mapAnchor: MapAnchor.Center,
    transitions: [
        { height: 16, location: 'Route 101', width: 32, x: 55, y: 2.5 },
    ],
};

export default LITTLEROOT_TOWN;
