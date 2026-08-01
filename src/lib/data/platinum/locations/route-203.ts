import { route203 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    encountersKey: 'sinnoh-route-203',
    battles: [
        {
            isMiniboss: true,
            battleKey: 'pkmn-trainer-barry-barry-2',
            x: 11.4,
            y: 78.2,
        },
        {
            isOptional: true,
            battleKey: 'youngster-michael',
            x: 23,
            y: 51,
        },
        {
            isOptional: true,
            battleKey: 'youngster-dallas',
            x: 52.5,
            y: 68,
        },
        {
            isOptional: true,
            battleKey: 'youngster-sebastian',
            x: 72.3,
            y: 65.5,
        },
        {
            isOptional: true,
            battleKey: 'lass-kaitlin',
            x: 85.2,
            y: 62,
        },
        {
            isOptional: true,
            battleKey: 'lass-madeline',
            x: 82,
            y: 35,
        },
    ],
};

export default ROUTE_203;
