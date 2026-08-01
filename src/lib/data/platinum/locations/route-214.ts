import { route214 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_214: Location = {
    name: 'Route 214',
    map: route214,
    encountersKey: 'sinnoh-route-214',
    battles: [
        {
            battleKey: 'psychic-f-abigail',
            x: 45.1,
            y: 21.9,
        },
        {
            isOptional: true,
            battleKey: 'pi-carlos',
            x: 62.5,
            y: 39.1,
        },
        {
            isOptional: true,
            battleKey: 'collector-brady',
            x: 72.9,
            y: 42.4,
        },
        {
            isOptional: true,
            battleKey: 'beauty-devon',
            x: 79.7,
            y: 52.1,
        },
        {
            isOptional: true,
            battleKey: 'ruin-maniac-bryan',
            x: 20.9,
            y: 53.6,
        },
        {
            isOptional: true,
            battleKey: 'psychic-m-mitchell',
            x: 80,
            y: 58.7,
        },
        {
            isOptional: true,
            battleKey: 'collector-jamal',
            x: 38.1,
            y: 66,
        },
        {
            isOptional: true,
            battleKey: 'ruin-maniac-ronald',
            x: 45.1,
            y: 73.9,
        },
        {
            isOptional: true,
            battleKey: 'collector-douglas',
            x: 80,
            y: 85.6,
        },
    ],
};

export default ROUTE_214;
