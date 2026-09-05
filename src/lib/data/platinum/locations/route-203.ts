import { route203 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    encountersKey: 'sinnoh-route-203',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-route-203',
            x: 14.9,
            y: 65.7,
        },
        {
            battleKey: 'youngster-michael',
            x: 19.6,
            y: 44,
        },
        {
            battleKey: 'youngster-dallas',
            x: 47.7,
            y: 62.6,
        },
        {
            battleKey: 'youngster-sebastian',
            x: 66.5,
            y: 65.9,
        },
        {
            battleKey: 'lass-kaitlin',
            x: 80.6,
            y: 65.7,
        },
        {
            battleKey: 'lass-madeline',
            x: 75.8,
            y: 37.8,
        },
    ],
};

export default ROUTE_203;
