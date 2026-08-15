import { route202 } from '@/lib/data/platinum/maps';
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
            x: 22.13,
            y: 47,
        },
        {
            metadata: [],
            battleKey: 'lass-natalie',
            x: 61.9,
            y: 60.4,
        },
        {
            metadata: [],
            battleKey: 'youngster-logan',
            x: 72.3,
            y: 21.9,
        },
    ],
};

export default ROUTE_202;
