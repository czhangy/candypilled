import { route202 } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    encountersKey: 'sinnoh-route-202',
    battles: [
        {
            metadata: [],
            battleKey: 'youngster-tristan',
            x: 21.7,
            y: 42.6,
        },
        {
            metadata: [],
            battleKey: 'lass-natalie',
            x: 62.2,
            y: 57.3,
        },
        {
            metadata: [],
            battleKey: 'youngster-logan',
            x: 73.1,
            y: 15.9,
        },
    ],
};

export default ROUTE_202;
