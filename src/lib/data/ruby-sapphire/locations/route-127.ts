import { route127 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_127: Location = {
    name: 'Route 127',
    map: route127,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-127',
    battles: [
        { battleKey: 'bird-keeper-byron', x: 15.63, y: 22.92 },
        { battleKey: 'triathlete-swimmer-f-connor', x: 56.82, y: 55.39 },
        { battleKey: 'fisherman-jonah', x: 66.8, y: 16.56 },
        { battleKey: 'fisherman-roger', x: 65.63, y: 31.64 },
        { battleKey: 'fisherman-henry', x: 80.55, y: 24.06 },
        { battleKey: 'triathlete-swimmer-m-caleb', x: 23.05, y: 85.38 },
        { battleKey: 'black-belt-koji', x: 79.3, y: 79.12 },
    ],
};

export default ROUTE_127;
