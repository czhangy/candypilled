import { route202Dawn, route202Lucas } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: { male: route202Dawn, female: route202Lucas },
    encountersKey: 'sinnoh-route-202',
    battles: [
        {
            battleKey: 'pkmn-trainer-dawn',
            gender: 'male',
            x: 60.9,
            y: 84.8,
        },
        {
            battleKey: 'pkmn-trainer-lucas',
            gender: 'female',
            x: 60.9,
            y: 84.8,
        },
        {
            battleKey: 'lass-natalie',
            x: 20.5,
            y: 41,
        },
        {
            battleKey: 'youngster-tristan',
            x: 67.2,
            y: 56.4,
        },
        {
            battleKey: 'youngster-logan',
            x: 79.7,
            y: 12.7,
        },
    ],
};

export default ROUTE_202;
