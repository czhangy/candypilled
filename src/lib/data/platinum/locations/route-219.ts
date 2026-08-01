import { route219 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            isOptional: true,
            battleKey: 'tuber-m::Trenton',
            x: 35.4,
            y: 74.1,
        },
        {
            isOptional: true,
            battleKey: 'tuber-f::Mariel',
            x: 52.5,
            y: 74.1,
        },
    ],
};

export default ROUTE_219;
