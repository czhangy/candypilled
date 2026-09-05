import { route208 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    encountersKey: 'sinnoh-route-208',
    battles: [
        {
            battleKey: 'hiker-jonathan',
            x: 38.4,
            y: 59.4,
        },
        {
            battleKey: 'black-belt-kyle',
            x: 33.6,
            y: 31.4,
        },
        {
            battleKey: 'hiker-robert',
            x: 56.9,
            y: 56,
        },
        {
            battleKey: 'aroma-lady-hannah',
            x: 77.2,
            y: 50.2,
        },
        {
            battleKey: 'artist-william',
            x: 86.6,
            y: 62.7,
        },
        {
            battleKey: 'fisherman-cody',
            x: 46,
            y: 72,
        },
        {
            battleKey: 'hiker-alexander',
            x: 10.2,
            y: 47.1,
        },
    ],
};

export default ROUTE_208;
