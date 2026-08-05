import CANALAVE_CITY from '@/lib/data/diamond-pearl/locations/canalave-city';
import CANALAVE_GYM from '@/lib/data/diamond-pearl/locations/canalave-gym';
import IRON_ISLAND from '@/lib/data/diamond-pearl/locations/iron-island';
import ROUTE_218 from '@/lib/data/diamond-pearl/locations/route-218';
import { Split } from '@/lib/static/types';

const BYRON: Split = {
    name: 'Byron',
    locations: [ROUTE_218, CANALAVE_CITY, IRON_ISLAND, CANALAVE_GYM],
};

export default BYRON;
