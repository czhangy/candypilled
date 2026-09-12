import { route219 } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    mapAnchor: MapAnchor.Unaudited,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            battleKey: 'tuber-m-trenton',
            x: 35.9,
            y: 72.6,
        },
        {
            battleKey: 'tuber-f-mariel',
            x: 52,
            y: 72.6,
        },
    ],
};

export default ROUTE_219;
