import {
    route109Beach,
    route109Ocean,
    route109SeashoreHouse,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_109: Location = {
    name: 'Route 109',
    subareas: [
        {
            name: 'Beach',
            map: route109Beach,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-109',
        },
        {
            name: 'Seashore House',
            map: route109SeashoreHouse,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Ocean',
            map: route109Ocean,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'hoenn-route-109',
        },
    ],
};

export default ROUTE_109;
