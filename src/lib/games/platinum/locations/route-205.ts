import { route205North, route205South } from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
        },
        {
            name: 'North',
            map: route205North,
        },
    ],
};

export default ROUTE_205;
