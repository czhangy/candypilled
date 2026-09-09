import { route106 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_106: Location = {
    name: 'Route 106',
    map: route106,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-106',
    battles: [
        {
            battleKey: 'fisherman-ned',
            x: 81.85,
            y: 71.27,
        },
        {
            battleKey: 'fisherman-elliot',
            x: 64.35,
            y: 71.27,
        },
        {
            battleKey: 'swimmer-m-douglas',
            x: 36.79,
            y: 56.58,
        },
        {
            battleKey: 'swimmer-f-nicole',
            x: 23.04,
            y: 26.58,
        },
    ],
};

export default ROUTE_106;
