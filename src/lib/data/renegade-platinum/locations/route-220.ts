import { route220 } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    encountersKey: 'sinnoh-route-220',
    battles: [
        {
            battleKey: 'swimmer-f-jessica',
            x: 24.3,
            y: 28.7,
        },
        {
            battleKey: 'swimmer-f-erica',
            x: 14.7,
            y: 34.9,
        },
        {
            battleKey: 'swimmer-m-adrian',
            x: 39.9,
            y: 69.2,
        },
        {
            battleKey: 'swimmer-m-vincent',
            x: 60.2,
            y: 47.7,
        },
        {
            battleKey: 'swimmer-f-katelyn',
            x: 69.6,
            y: 22.4,
        },
        {
            battleKey: 'swimmer-f-claire',
            x: 80.4,
            y: 47.5,
        },
        {
            battleKey: 'swimmer-m-erik',
            x: 80.4,
            y: 66.1,
        },
    ],
};

export default ROUTE_220;
