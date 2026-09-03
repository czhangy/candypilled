import { route221 } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    encountersKey: 'sinnoh-route-221',
    battles: [
        {
            battleKey: 'swimmer-m-dillon',
            x: 12.1,
            y: 54,
        },
        {
            battleKey: 'swimmer-f-vanessa',
            x: 14.1,
            y: 83.9,
        },
        {
            battleKey: 'fisherman-cory',
            x: 27.7,
            y: 72.6,
        },
        {
            battleKey: 'ace-trainer-f-shannon',
            x: 55.8,
            y: 84.6,
        },
        {
            battleKey: 'collector-ivan',
            x: 67.2,
            y: 60.2,
        },
        {
            battleKey: 'ace-trainer-m-jake',
            x: 85,
            y: 66.8,
        },
    ],
};

export default ROUTE_221;
