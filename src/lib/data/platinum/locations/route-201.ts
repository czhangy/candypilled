import { route201 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    encountersKey: 'sinnoh-route-201',
    battles: [
        {
            isMiniboss: true,
            battleKey: 'pkmn-trainer-barry::Barry 1',
            x: 27.5,
            y: 64,
        },
    ],
};

export default ROUTE_201;
