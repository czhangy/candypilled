import { route220 } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    encountersKey: 'sinnoh-sea-route-220',
    battles: [
        {
            battleKey: 'swimmer-f-jessica',
            x: 24.2,
            y: 28.6,
        },
        {
            battleKey: 'swimmer-f-erica',
            x: 14.8,
            y: 34.7,
        },
        {
            battleKey: 'swimmer-m-adrian',
            x: 40,
            y: 69.7,
        },
        {
            battleKey: 'swimmer-m-vincent',
            x: 60.2,
            y: 47.7,
        },
        {
            battleKey: 'swimmer-f-katelyn',
            x: 69.5,
            y: 22.3,
        },
        {
            battleKey: 'swimmer-f-claire',
            x: 80.3,
            y: 47.3,
        },
        {
            battleKey: 'swimmer-m-erik',
            x: 80.3,
            y: 66.1,
        },
    ],
};

export default ROUTE_220;
