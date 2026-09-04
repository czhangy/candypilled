import { route214 } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_214: Location = {
    name: 'Route 214',
    map: route214,
    encountersKey: 'sinnoh-route-214',
    battles: [
        {
            battleKey: 'psychic-f-abigail',
            x: 54.9,
            y: 20.8,
        },
        {
            battleKey: 'pi-carlos',
            x: 70.3,
            y: 37.6,
        },
        {
            battleKey: 'collector-brady',
            x: 79.7,
            y: 46.9,
        },
        {
            battleKey: 'beauty-devon',
            x: 85.7,
            y: 50,
        },
        {
            battleKey: 'psychic-m-mitchell',
            x: 85.9,
            y: 56.4,
        },
        {
            battleKey: 'ruin-maniac-bryan',
            x: 33,
            y: 53.2,
        },
        {
            battleKey: 'collector-jamal',
            x: 48.4,
            y: 63.6,
        },
        {
            battleKey: 'ruin-maniac-ronald',
            x: 54.7,
            y: 72,
        },
        {
            battleKey: 'collector-douglas',
            x: 85.9,
            y: 82.4,
        },
    ],
};

export default ROUTE_214;
