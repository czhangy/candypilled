import { route202 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    encountersKey: 'sinnoh-route-202',
    battles: [
        {
            battleKey: 'youngster-tristan',
            x: 20.5,
            y: 40.9,
        },
        {
            battleKey: 'lass-natalie',
            x: 67.2,
            y: 56.5,
        },
        {
            battleKey: 'youngster-logan',
            x: 79.7,
            y: 12.8,
        },
    ],
};

export default ROUTE_202;
