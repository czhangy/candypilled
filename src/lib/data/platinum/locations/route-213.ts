import { route213 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    encountersKey: 'sinnoh-route-213',
    battles: [
        {
            isOptional: true,
            battleKey: 'tuber-f::Chelsea',
            x: 67.1,
            y: 47.2,
        },
        {
            isOptional: true,
            battleKey: 'tuber-m::Jared',
            x: 66.6,
            y: 54.2,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Kenneth',
            x: 26.5,
            y: 72.5,
        },
        {
            isOptional: true,
            battleKey: 'beauty::Cyndy',
            x: 29.7,
            y: 47,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Haley',
            x: 68.1,
            y: 81.9,
        },
        {
            isOptional: true,
            battleKey: 'sailor::Paul',
            x: 80.6,
            y: 85.6,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Evan',
            x: 88.9,
            y: 69.3,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Mary',
            x: 94.2,
            y: 69.3,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Sheltin',
            x: 58.8,
            y: 93.1,
        },
    ],
};

export default ROUTE_213;
