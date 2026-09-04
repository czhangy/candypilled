import { route208 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    encountersKey: 'sinnoh-route-208',
    battles: [
        {
            battleKey: 'hiker-jonathan',
            x: 38.2,
            y: 58.6,
        },
        {
            battleKey: 'black-belt-kyle',
            x: 28.2,
            y: 31.4,
        },
        {
            battleKey: 'hiker-robert',
            x: 57,
            y: 56,
        },
        {
            battleKey: 'aroma-lady-hannah',
            x: 77.3,
            y: 57.5,
        },
        {
            battleKey: 'artist-william',
            x: 86.7,
            y: 68.6,
        },
        {
            battleKey: 'fisherman-cody',
            x: 46,
            y: 76.6,
        },
        {
            battleKey: 'hiker-alexander',
            x: 10,
            y: 43,
        },
    ],
};

export default ROUTE_208;
