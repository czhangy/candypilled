import { route218 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    encountersKey: 'sinnoh-route-218',
    battles: [
        {
            isOptional: true,
            battleKey: 'fisherman-miguel',
            x: 46.1,
            y: 65.3,
        },
        {
            isOptional: true,
            battleKey: 'fisherman-luc',
            x: 46.1,
            y: 46,
        },
        {
            isOptional: true,
            battleKey: 'sailor-skyler',
            x: 19.7,
            y: 30,
        },
        {
            isOptional: true,
            battleKey: 'guitarist-tony',
            x: 25.8,
            y: 52.9,
        },
    ],
};

export default ROUTE_218;
