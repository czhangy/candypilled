import { route201 } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    encountersKey: 'sinnoh-route-201',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-1',
            x: 25.8,
            y: 72.2,
        },
    ],
};

export default ROUTE_201;
