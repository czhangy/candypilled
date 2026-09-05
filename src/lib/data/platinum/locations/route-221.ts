import { route221 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    encountersKey: 'sinnoh-route-221',
    battles: [
        {
            battleKey: 'swimmer-m-dillon',
            x: 12,
            y: 50.9,
        },
        {
            battleKey: 'swimmer-f-vanessa',
            x: 14.1,
            y: 81.8,
        },
        {
            battleKey: 'fisherman-cory',
            x: 27.6,
            y: 71.8,
        },
        {
            battleKey: 'ace-trainer-f-shannon',
            x: 55.8,
            y: 84.5,
        },
        {
            battleKey: 'collector-ivan',
            x: 67.1,
            y: 59.3,
        },
        {
            battleKey: 'ace-trainer-m-jake',
            x: 85,
            y: 65.9,
        },
    ],
};

export default ROUTE_221;
