import { route104North, route104South } from '@/lib/data/ruby-sapphire/maps';
import { Location } from '@/lib/static/types';

const ROUTE_104: Location = {
    name: 'Route 104',
    subareas: [
        {
            name: 'North',
            map: route104North,
            encountersKey: 'hoenn-route-104-area',
        },
        {
            name: 'South',
            map: route104South,
            encountersKey: 'hoenn-route-104-area',
        },
    ],
};

export default ROUTE_104;
