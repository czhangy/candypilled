import { route214 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_214: Location = {
    name: 'Route 214',
    map: route214,
    encountersKey: 'sinnoh-route-214',
    battles: [
        {
            battleKey: 'psychic-f::Abigail',
            x: 45.1,
            y: 21.9,
        },
        {
            isOptional: true,
            battleKey: 'pi::Carlos',
            x: 62.5,
            y: 39.1,
        },
        {
            isOptional: true,
            battleKey: 'collector::Brady',
            x: 72.9,
            y: 42.4,
        },
        {
            isOptional: true,
            battleKey: 'beauty::Devon',
            x: 79.7,
            y: 52.1,
        },
        {
            isOptional: true,
            battleKey: 'ruin-maniac::Bryan',
            x: 20.9,
            y: 53.6,
        },
        {
            isOptional: true,
            battleKey: 'psychic-m::Mitchell',
            x: 80,
            y: 58.7,
        },
        {
            isOptional: true,
            battleKey: 'collector::Jamal',
            x: 38.1,
            y: 66,
        },
        {
            isOptional: true,
            battleKey: 'ruin-maniac::Ronald',
            x: 45.1,
            y: 73.9,
        },
        {
            isOptional: true,
            battleKey: 'collector::Douglas',
            x: 80,
            y: 85.6,
        },
    ],
};

export default ROUTE_214;
