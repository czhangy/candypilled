import { route206 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_206: Location = {
    name: 'Route 206',
    map: route206,
    encountersKey: 'sinnoh-route-206',
    battles: [
        {
            battleKey: 'cyclist-m-axel',
            x: 45.7,
            y: 19.6,
        },
        {
            battleKey: 'cyclist-f-megan',
            x: 35.9,
            y: 27.4,
        },
        {
            battleKey: 'cyclist-m-james',
            x: 51.4,
            y: 36,
        },
        {
            battleKey: 'cyclist-f-nicole',
            x: 36.3,
            y: 43,
        },
        {
            battleKey: 'cyclist-m-john',
            x: 48.8,
            y: 53.2,
        },
        {
            battleKey: 'cyclist-m-ryan',
            x: 39.1,
            y: 65.7,
        },
        {
            battleKey: 'cyclist-f-rachel',
            x: 36.1,
            y: 72.7,
        },
        {
            battleKey: 'cyclist-f-kayla',
            x: 57.8,
            y: 77.4,
        },
        {
            battleKey: 'hiker-theodore',
            x: 73.2,
            y: 35.9,
        },
    ],
};

export default ROUTE_206;
