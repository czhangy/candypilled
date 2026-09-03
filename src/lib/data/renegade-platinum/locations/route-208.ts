import { route208 } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    encountersKey: 'sinnoh-route-208',
    battles: [
        {
            battleKey: 'hiker-jonathan',
            x: 38.3,
            y: 59.5,
        },
        {
            battleKey: 'black-belt-kyle',
            x: 33.6,
            y: 31.3,
        },
        {
            battleKey: 'hiker-robert',
            x: 57,
            y: 56.1,
        },
        {
            battleKey: 'hiker-alexander',
            x: 57,
            y: 28.2,
        },
        {
            battleKey: 'aroma-lady-hannah',
            x: 77.4,
            y: 50.3,
        },
        {
            battleKey: 'artist-william',
            x: 86.7,
            y: 62.6,
        },
        {
            battleKey: 'fisherman-cody',
            x: 46.1,
            y: 72,
        },
    ],
};

export default ROUTE_208;
