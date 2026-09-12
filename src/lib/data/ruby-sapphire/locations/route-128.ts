import { route128 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_128: Location = {
    name: 'Route 128',
    map: route128,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-128',
    battles: [
        { battleKey: 'cooltrainer-m-ruben', x: 20.38, y: 20.82 },
        { battleKey: 'cooltrainer-f-alexa', x: 39.55, y: 23.16 },
        { battleKey: 'fisherman-wayne', x: 52.88, y: 70.79 },
        { battleKey: 'triathlete-swimmer-m-isaiah', x: 64.56, y: 60.55 },
        { battleKey: 'triathlete-swimmer-f-katelyn', x: 29.53, y: 85.82 },
    ],
};

export default ROUTE_128;
