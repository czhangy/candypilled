import { route206 } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_206: Location = {
    name: 'Route 206',
    map: route206,
    encountersKey: 'sinnoh-route-206',
    battles: [
        {
            battleKey: 'cyclist-axel',
            x: 45.5,
            y: 19.6,
        },
        {
            battleKey: 'cyclist-megan',
            x: 35.9,
            y: 27.4,
        },
        {
            battleKey: 'hiker-theodore',
            x: 73.4,
            y: 35.9,
        },
        {
            battleKey: 'cyclist-james',
            x: 51.6,
            y: 36,
        },
        {
            battleKey: 'cyclist-nicole',
            x: 36.3,
            y: 43.1,
        },
        {
            battleKey: 'cyclist-john',
            x: 48.6,
            y: 53.2,
        },
        {
            battleKey: 'cyclist-ryan',
            x: 39.1,
            y: 65.7,
        },
        {
            battleKey: 'cyclist-rachel',
            x: 36.1,
            y: 72.8,
        },
        {
            battleKey: 'cyclist-kayla',
            x: 57.8,
            y: 77.4,
        },
    ],
};

export default ROUTE_206;
