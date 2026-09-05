import { route201 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    encountersKey: 'sinnoh-route-201',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-route-201',
            x: 26,
            y: 72,
        },
    ],
};

export default ROUTE_201;
