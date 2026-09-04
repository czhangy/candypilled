import { route213 } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    encountersKey: 'sinnoh-route-213',
    battles: [
        {
            battleKey: 'tuber-f-chelsea',
            x: 67.2,
            y: 42.5,
        },
        {
            battleKey: 'tuber-m-jared',
            x: 66.1,
            y: 50.4,
        },
        {
            battleKey: 'fisherman-kenneth',
            x: 26.5,
            y: 70.4,
        },
        {
            battleKey: 'beauty-cyndy',
            x: 29.8,
            y: 42.3,
        },
        {
            battleKey: 'swimmer-f-haley',
            x: 27.2,
            y: 21.1,
        },
        {
            battleKey: 'sailor-paul',
            x: 80.8,
            y: 84.4,
        },
        {
            battleKey: 'swimmer-m-evan',
            x: 89,
            y: 65.9,
        },
        {
            battleKey: 'swimmer-f-mary',
            x: 94.4,
            y: 65.9,
        },
        {
            battleKey: 'swimmer-m-sheltin',
            x: 53.7,
            y: 91,
        },
    ],
};

export default ROUTE_213;
