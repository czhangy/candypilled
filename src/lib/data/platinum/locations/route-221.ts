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
            y: 53.4,
        },
        {
            battleKey: 'swimmer-f-vanessa',
            x: 14.2,
            y: 83,
        },
        {
            battleKey: 'fisherman-cory',
            x: 27.7,
            y: 71.8,
        },
        {
            battleKey: 'ace-trainer-f-shannon',
            x: 55.9,
            y: 83.8,
        },
        {
            battleKey: 'collector-ivan',
            x: 67.2,
            y: 59.9,
        },
        {
            battleKey: 'ace-trainer-m-jake',
            x: 85,
            y: 66.8,
        },
    ],
};

export default ROUTE_221;
