import CANALAVE_CITY from '@/lib/data/diamond-pearl/locations/canalave-city';
import CANALAVE_GYM from '@/lib/data/diamond-pearl/locations/canalave-gym';
import FUEGO_IRONWORKS from '@/lib/data/diamond-pearl/locations/fuego-ironworks';
import IRON_ISLAND from '@/lib/data/diamond-pearl/locations/iron-island';
import ROUTE_218 from '@/lib/data/diamond-pearl/locations/route-218';
import ROUTE_219 from '@/lib/data/diamond-pearl/locations/route-219';
import ROUTE_220 from '@/lib/data/diamond-pearl/locations/route-220';
import ROUTE_221 from '@/lib/data/diamond-pearl/locations/route-221';
import { Split } from '@/lib/static/types';

const BYRON: Split = {
    name: 'Byron',
    locations: [
        ROUTE_219,
        ROUTE_220,
        ROUTE_221,
        FUEGO_IRONWORKS,
        ROUTE_218,
        CANALAVE_CITY,
        IRON_ISLAND,
        CANALAVE_GYM,
    ],
};

export default BYRON;
