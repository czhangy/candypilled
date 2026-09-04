import { route219 } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            battleKey: 'tuber-trenton',
            x: 35.9,
            y: 72.3,
        },
        {
            battleKey: 'tuber-mariel',
            x: 51.8,
            y: 72.3,
        },
    ],
};

export default ROUTE_219;
