import { route130 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_130: Location = {
    name: 'Route 130',
    map: route130,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-130',
    battles: [
        { battleKey: 'swimmer-f-katie', x: 85.63, y: 55.98 },
        { battleKey: 'swimmer-m-rodney', x: 9.38, y: 65.85 },
    ],
};

export default ROUTE_130;
