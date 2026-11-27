import { verdanturfTown } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VERDANTURF_TOWN: Location = {
    name: 'Verdanturf Town',
    map: verdanturfTown,
    mapAnchor: MapAnchor.Center,
    transitions: [
        { height: 16, location: 'Rusturf Tunnel', width: 16, x: 42.5, y: 7.5 },
        { height: 112, location: 'Route 117', width: 16, x: 97.5, y: 42.5 },
    ],
};

export default VERDANTURF_TOWN;
