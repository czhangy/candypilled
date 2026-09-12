import { route133 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_133: Location = {
    name: 'Route 133',
    map: route133,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-133',
    battles: [
        { battleKey: 'swimmer-m-franklin', x: 8.05, y: 10.87 },
        { battleKey: 'cooltrainer-m-warren', x: 9.3, y: 35.56 },
        { battleKey: 'bird-keeper-beck', x: 46.8, y: 40.56 },
        { battleKey: 'swimmer-f-debra', x: 86.88, y: 61.02 },
        { battleKey: 'swimmer-f-linda', x: 85.55, y: 61.02 },
    ],
};

export default ROUTE_133;
