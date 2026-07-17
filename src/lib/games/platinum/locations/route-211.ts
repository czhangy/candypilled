import { route211East, route211West } from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        { name: 'West', map: route211West },
        { name: 'East', map: route211East },
    ],
};

export default ROUTE_211;
