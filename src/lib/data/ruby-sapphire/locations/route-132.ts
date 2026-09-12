import { route132 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_132: Location = {
    name: 'Route 132',
    map: route132,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-132',
    battles: [
        { battleKey: 'swimmer-f-dana', x: 51.87, y: 40.59 },
        { battleKey: 'swimmer-m-gilbert', x: 9.38, y: 8.39 },
        { battleKey: 'black-belt-kiyo', x: 58.08, y: 70.68 },
        { battleKey: 'fisherman-ronald', x: 11.8, y: 40.74 },
    ],
};

export default ROUTE_132;
