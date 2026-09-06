import {
    route103EastBrendan,
    route103EastMay,
    route103WestBrendan,
    route103WestMay,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_103: Location = {
    name: 'Route 103',
    subareas: [
        {
            name: 'West',
            map: { male: route103WestMay, female: route103WestBrendan },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-103',
        },
        {
            name: 'East',
            map: { male: route103EastMay, female: route103EastBrendan },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-103',
        },
    ],
};

export default ROUTE_103;
