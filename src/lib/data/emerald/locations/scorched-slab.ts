import { scorchedSlab } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SCORCHED_SLAB: Location = {
    name: 'Scorched Slab',
    map: scorchedSlab,
    mapAnchor: MapAnchor.Center,
    transitions: [
        { height: 16, location: 'Route 120', width: 16, x: 50, y: 82.5 },
    ],
};

export default SCORCHED_SLAB;
