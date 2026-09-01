import CANALAVE_CITY from '@/lib/data/diamond-pearl/locations/canalave-city';
import CANALAVE_GYM from '@/lib/data/diamond-pearl/locations/canalave-gym';
import FUEGO_IRONWORKS from '@/lib/data/diamond-pearl/locations/fuego-ironworks';
import IRON_ISLAND from '@/lib/data/diamond-pearl/locations/iron-island';
import OREBURGH_GATE from '@/lib/data/diamond-pearl/locations/oreburgh-gate';
import ROUTE_208 from '@/lib/data/diamond-pearl/locations/route-208';
import ROUTE_213 from '@/lib/data/diamond-pearl/locations/route-213';
import ROUTE_218 from '@/lib/data/diamond-pearl/locations/route-218';
import ROUTE_219 from '@/lib/data/diamond-pearl/locations/route-219';
import ROUTE_220 from '@/lib/data/diamond-pearl/locations/route-220';
import ROUTE_221 from '@/lib/data/diamond-pearl/locations/route-221';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const BYRON: Split = {
    name: 'Byron',
    locations: [
        ROUTE_219,
        ROUTE_220,
        ROUTE_221,
        FUEGO_IRONWORKS,
        LocationHelpers.withSubareaOrder(
            LocationHelpers.withHiddenSubareaBattles(OREBURGH_GATE, ['1F']),
            ['B1F', '1F']
        ),
        ROUTE_208,
        ROUTE_213,
        ROUTE_218,
        CANALAVE_CITY,
        IRON_ISLAND,
        CANALAVE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 5 },
};

export default BYRON;
