import { route220 } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    encountersKey: 'sinnoh-sea-route-220',
    battles: [
        {
            battleKey: 'swimmer-f-jessica',
            x: 16.6,
            y: 29.6,
        },
        {
            battleKey: 'swimmer-f-erica',
            x: 19.5,
            y: 35.8,
        },
        {
            battleKey: 'swimmer-m-adrian',
            x: 40.1,
            y: 69.1,
        },
        {
            battleKey: 'swimmer-m-vincent',
            x: 51.4,
            y: 47.9,
        },
        {
            battleKey: 'swimmer-f-katelyn',
            x: 64.7,
            y: 22.9,
        },
        {
            battleKey: 'swimmer-f-claire',
            x: 80.7,
            y: 47.9,
        },
        {
            battleKey: 'swimmer-m-erik',
            x: 80.6,
            y: 66.2,
        },
    ],
};

export default ROUTE_220;
