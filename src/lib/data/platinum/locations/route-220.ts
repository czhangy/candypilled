import { route220 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    encountersKey: 'sinnoh-sea-route-220',
    battles: [
        {
            isOptional: true,
            battleKey: 'swimmer-f::Jessica',
            x: 17.1,
            y: 30.7,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Erica',
            x: 19,
            y: 36.5,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Adrian',
            x: 40,
            y: 70.3,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Vincent',
            x: 56.5,
            y: 48.9,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Katelyn',
            x: 62.2,
            y: 27.5,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Claire',
            x: 80.5,
            y: 48.9,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-m::Erik',
            x: 80.5,
            y: 66.3,
        },
    ],
};

export default ROUTE_220;
