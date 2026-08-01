import { route208 } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    encountersKey: 'sinnoh-route-208',
    battles: [
        {
            isOptional: true,
            battleKey: 'hiker::Jonathan',
            x: 38.2,
            y: 58.6,
        },
        {
            isOptional: true,
            battleKey: 'black-belt::Kyle',
            x: 28.2,
            y: 31.4,
        },
        {
            battleKey: 'hiker::Robert',
            x: 57,
            y: 56,
        },
        {
            isOptional: true,
            battleKey: 'aroma-lady::Hannah',
            x: 77.3,
            y: 57.5,
        },
        {
            isOptional: true,
            battleKey: 'artist::William',
            x: 86.7,
            y: 68.6,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Cody',
            x: 46,
            y: 76.6,
        },
        {
            isOptional: true,
            battleKey: 'hiker::Alexander',
            x: 10,
            y: 43,
        },
    ],
};

export default ROUTE_208;
