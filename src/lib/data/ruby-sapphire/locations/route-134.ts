import { route134 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_134: Location = {
    name: 'Route 134',
    map: route134,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-134',
    battles: [
        { battleKey: 'swimmer-m-jack', x: 65.63, y: 23.25 },
        { battleKey: 'swimmer-f-laurel', x: 56.88, y: 13.25 },
        { battleKey: 'black-belt-hitoshi', x: 70.63, y: 40.6 },
        { battleKey: 'dragon-tamer-aaron', x: 51.8, y: 58.25 },
        { battleKey: 'bird-keeper-alex', x: 81.88, y: 35.75 },
    ],
};

export default ROUTE_134;
