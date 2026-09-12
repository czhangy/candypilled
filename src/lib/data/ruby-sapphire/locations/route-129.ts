import { route129 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_129: Location = {
    name: 'Route 129',
    map: route129,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-129',
    battles: [
        { battleKey: 'triathlete-swimmer-f-allison', x: 44.31, y: 23.23 },
        { battleKey: 'triathlete-swimmer-m-chase', x: 19.3, y: 58.07 },
        { battleKey: 'swimmer-m-reed', x: 35.55, y: 40.73 },
        { battleKey: 'swimmer-f-tisha', x: 11.88, y: 35.88 },
    ],
};

export default ROUTE_129;
