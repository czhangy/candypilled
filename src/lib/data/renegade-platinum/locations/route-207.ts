import { route207Dawn, route207Lucas } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_207: Location = {
    name: 'Route 207',
    map: { male: route207Dawn, female: route207Lucas },
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
            y: 37.6,
        },
        {
            battleKey: 'hiker-justin',
            x: 64.8,
            y: 34.3,
        },
        {
            battleKey: 'youngster-austin',
            x: 58.5,
            y: 66,
        },
        {
            battleKey: 'hiker-kevin',
            x: 49.2,
            y: 53.1,
        },
        {
            battleKey: 'battle-girl-helen',
            x: 75.8,
            y: 56.4,
        },
        {
            battleKey: 'pkmn-trainer-dawn-route-207',
            gender: 'male',
            x: 80.4,
            y: 25.1,
        },
        {
            battleKey: 'pkmn-trainer-lucas-route-207',
            gender: 'female',
            x: 80.4,
            y: 25.1,
        },
    ],
};

export default ROUTE_207;
