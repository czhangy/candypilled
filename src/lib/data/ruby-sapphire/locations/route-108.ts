import { route108 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_108: Location = {
    name: 'Route 108',
    map: route108,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-108',
    battles: [
        {
            battleKey: 'swimmer-m-jerome',
            x: 29.06,
            y: 66.57,
        },
        {
            battleKey: 'swimmer-f-tara',
            x: 14.06,
            y: 31.88,
        },
        {
            battleKey: 'swimmer-m-matthew',
            x: 84.06,
            y: 51.88,
        },
        {
            battleKey: 'swimmer-f-missy',
            x: 60.83,
            y: 61.57,
        },
    ],
};

export default ROUTE_108;
