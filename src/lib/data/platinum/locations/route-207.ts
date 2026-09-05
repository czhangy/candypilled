import { route207 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_207: Location = {
    name: 'Route 207',
    map: route207,
    encountersKey: 'sinnoh-route-207',
    battles: [
        {
            battleKey: 'picnicker-lauren',
            x: 50.8,
            y: 19.1,
        },
        {
            battleKey: 'camper-anthony',
            x: 50.8,
            y: 37.5,
        },
        {
            battleKey: 'hiker-justin',
            x: 64.8,
            y: 34.2,
        },
        {
            battleKey: 'youngster-austin',
            x: 58.5,
            y: 65.8,
        },
        {
            battleKey: 'hiker-kevin',
            x: 49.1,
            y: 53.1,
        },
        {
            battleKey: 'battle-girl-helen',
            x: 75.8,
            y: 56.3,
        },
    ],
};

export default ROUTE_207;
