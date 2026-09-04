import { route203 } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    encountersKey: 'sinnoh-route-203',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-route-203',
            x: 15.1,
            y: 66.1,
        },
        {
            battleKey: 'youngster-michael',
            x: 19.8,
            y: 44,
        },
        {
            battleKey: 'youngster-dallas',
            x: 47.7,
            y: 62.8,
        },
        {
            battleKey: 'lass-kaitlin',
            x: 66.6,
            y: 66.1,
        },
        {
            battleKey: 'youngster-sebastian',
            x: 83.6,
            y: 62.6,
        },
        {
            battleKey: 'lass-madeline',
            x: 75.7,
            y: 37.8,
        },
    ],
};

export default ROUTE_203;
