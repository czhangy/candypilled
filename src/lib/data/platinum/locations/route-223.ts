import { route223 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_223: Location = {
    name: 'Route 223',
    map: route223,
    encountersKey: 'sinnoh-sea-route-223',
    battles: [
        {
            isOptional: true,
            battleKey: 'swimmer-f::Miranda',
            x: 60.1,
            y: 90,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Aubree',
            x: 61.2,
            y: 83.7,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Oscar',
            x: 39,
            y: 70.5,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Paige',
            x: 48.3,
            y: 63.5,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Colton',
            x: 70.6,
            y: 63.5,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Ricardo',
            x: 39.2,
            y: 58,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Crystal',
            x: 58.7,
            y: 47.1,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Wesley',
            x: 17.3,
            y: 44,
        },
        {
            isOptional: true,
            battleKey: 'sailor::Zachariah',
            x: 48.5,
            y: 36.7,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Gabrielle',
            x: 36.4,
            y: 26.8,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Cassandra',
            x: 51.7,
            y: 23.3,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Francisco',
            x: 92.3,
            y: 36.9,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Troy',
            x: 49.9,
            y: 11.2,
        },
    ],
};

export default ROUTE_223;
