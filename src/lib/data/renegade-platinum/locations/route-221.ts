import { route221 } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    encountersKey: 'sinnoh-route-221',
    battles: [
        {
            battleKey: 'swimmer-m-dillon',
            x: 11.9,
            y: 50.7,
        },
        {
            battleKey: 'swimmer-f-vanessa',
            x: 14,
            y: 81.8,
        },
        {
            battleKey: 'fisherman-cory',
            x: 27.6,
            y: 72.1,
        },
        {
            battleKey: 'ace-trainer-f-shannon',
            x: 55.8,
            y: 84.5,
        },
        {
            battleKey: 'collector-ivan',
            x: 67.2,
            y: 59.4,
        },
        {
            battleKey: 'ace-trainer-m-jake',
            x: 85,
            y: 65.8,
        },
    ],
};

export default ROUTE_221;
