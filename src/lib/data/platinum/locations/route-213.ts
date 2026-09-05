import { route213 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    encountersKey: 'sinnoh-route-213',
    battles: [
        {
            battleKey: 'tuber-f-chelsea',
            x: 67.1,
            y: 42.4,
        },
        {
            battleKey: 'tuber-m-jared',
            x: 66.1,
            y: 50.3,
        },
        {
            battleKey: 'fisherman-kenneth',
            x: 26.6,
            y: 70.4,
        },
        {
            battleKey: 'beauty-cyndy',
            x: 29.8,
            y: 42.3,
        },
        {
            battleKey: 'swimmer-f-haley',
            x: 65,
            y: 80,
        },
        {
            battleKey: 'sailor-paul',
            x: 80.7,
            y: 84.4,
        },
        {
            battleKey: 'swimmer-m-evan',
            x: 89.1,
            y: 65.9,
        },
        {
            battleKey: 'swimmer-f-mary',
            x: 94.3,
            y: 65.9,
        },
        {
            battleKey: 'swimmer-m-sheltin',
            x: 53.6,
            y: 91.1,
        },
    ],
};

export default ROUTE_213;
