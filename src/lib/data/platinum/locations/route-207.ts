import { route207 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_207: Location = {
    name: 'Route 207',
    map: route207,
    encountersKey: 'sinnoh-route-207',
    battles: [
        {
            isOptional: true,
            battleKey: 'picnicker-lauren',
            x: 50.8,
            y: 21.4,
        },
        {
            isOptional: true,
            battleKey: 'camper-anthony',
            x: 50.8,
            y: 39,
        },
        {
            isOptional: true,
            battleKey: 'hiker-justin',
            x: 64.9,
            y: 35.6,
        },
        {
            isOptional: true,
            battleKey: 'youngster-austin',
            x: 59,
            y: 69,
        },
        {
            isOptional: true,
            battleKey: 'hiker-kevin',
            x: 49.3,
            y: 49,
        },
        {
            isOptional: true,
            battleKey: 'battle-girl-helen',
            x: 79.3,
            y: 54.3,
        },
    ],
};

export default ROUTE_207;
