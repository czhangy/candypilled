import { route222 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    map: route222,
    encountersKey: 'sinnoh-route-222',
    battles: [
        {
            isOptional: true,
            battleKey: 'rich-boy::Trey',
            x: 18.9,
            y: 48.6,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Alec',
            x: 29.3,
            y: 67.9,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::George',
            x: 37.7,
            y: 67.9,
        },
        {
            isOptional: true,
            battleKey: 'beauty::Nicola',
            x: 39.8,
            y: 35.9,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Brett',
            x: 46.1,
            y: 70.6,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Cole',
            x: 51.3,
            y: 70.6,
        },
        {
            isOptional: true,
            battleKey: 'tuber-f::Holly',
            x: 56.6,
            y: 66,
        },
        {
            isOptional: true,
            battleKey: 'policeman::Thomas',
            x: 71.1,
            y: 38.2,
        },
        {
            isOptional: true,
            battleKey: 'sailor::Marc',
            x: 78.6,
            y: 45.7,
        },
        {
            isOptional: true,
            battleKey: 'tuber-m::Conner',
            x: 82.7,
            y: 45.7,
        },
        {
            battleKey: 'sailor::Luther',
            x: 84.8,
            y: 55.8,
        },
    ],
};

export default ROUTE_222;
