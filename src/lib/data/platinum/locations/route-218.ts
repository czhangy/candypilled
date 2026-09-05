import { route218 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    encountersKey: 'sinnoh-route-218',
    battles: [
        {
            battleKey: 'fisherman-miguel',
            x: 46.1,
            y: 65.9,
        },
        {
            battleKey: 'fisherman-luc',
            x: 46,
            y: 47.2,
        },
        {
            battleKey: 'sailor-skyler',
            x: 19.7,
            y: 31.3,
        },
        {
            battleKey: 'guitarist-tony',
            x: 25.7,
            y: 53.4,
        },
    ],
};

export default ROUTE_218;
