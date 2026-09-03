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
            y: 47.2,
        },
        {
            battleKey: 'tuber-m-jared',
            x: 66.6,
            y: 54.2,
        },
        {
            battleKey: 'fisherman-kenneth',
            x: 26.5,
            y: 72.5,
        },
        {
            battleKey: 'beauty-cyndy',
            x: 29.7,
            y: 47,
        },
        {
            battleKey: 'swimmer-f-haley',
            x: 68.1,
            y: 81.9,
        },
        {
            battleKey: 'sailor-paul',
            x: 80.6,
            y: 85.6,
        },
        {
            battleKey: 'swimmer-m-evan',
            x: 88.9,
            y: 69.3,
        },
        {
            battleKey: 'swimmer-f-mary',
            x: 94.2,
            y: 69.3,
        },
        {
            battleKey: 'swimmer-m-sheltin',
            x: 58.8,
            y: 93.1,
        },
    ],
};

export default ROUTE_213;
