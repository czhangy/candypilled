import { route202 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    encountersKey: 'sinnoh-route-202',
    battles: [
        {
            battleKey: 'youngster-tristan',
            x: 22.13,
            y: 47,
        },
        {
            battleKey: 'lass-natalie',
            x: 61.9,
            y: 60.4,
        },
        {
            battleKey: 'youngster-logan',
            x: 72.3,
            y: 21.9,
        },
    ],
};

export default ROUTE_202;
