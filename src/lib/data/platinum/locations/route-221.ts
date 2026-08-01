import { route221 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    encountersKey: 'sinnoh-route-221',
    battles: [
        {
            isOptional: true,
            battleKey: 'swimmer-m::Dillon',
            x: 12,
            y: 53.4,
        },
        {
            isOptional: true,
            battleKey: 'swimmer-f::Vanessa',
            x: 14.2,
            y: 83,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Cory',
            x: 27.7,
            y: 71.8,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-f::Shannon',
            x: 55.9,
            y: 83.8,
        },
        {
            isOptional: true,
            battleKey: 'collector::Ivan',
            x: 67.2,
            y: 59.9,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-m::Jake',
            x: 85,
            y: 66.8,
        },
    ],
};

export default ROUTE_221;
