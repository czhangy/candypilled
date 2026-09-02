import { route202 } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-202',
    battles: [
        {
            metadata: [],
            battleKey: 'youngster-tristan',
            x: 20.3,
            y: 40.7,
        },
        {
            metadata: [],
            battleKey: 'lass-natalie',
            x: 67.2,
            y: 56.6,
        },
        {
            metadata: [],
            battleKey: 'youngster-logan',
            x: 79.7,
            y: 12.8,
        },
    ],
};

export default ROUTE_202;
