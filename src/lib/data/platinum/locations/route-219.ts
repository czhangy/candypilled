import { route219 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            battleKey: 'tuber-m-trenton',
            x: 35.4,
            y: 74.1,
        },
        {
            battleKey: 'tuber-f-mariel',
            x: 52.5,
            y: 74.1,
        },
    ],
};

export default ROUTE_219;
