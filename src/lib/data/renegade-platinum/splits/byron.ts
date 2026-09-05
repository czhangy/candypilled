import CANALAVE_CITY from '@/lib/data/renegade-platinum/locations/canalave-city';
import CANALAVE_GYM from '@/lib/data/renegade-platinum/locations/canalave-gym';
import CELESTIC_TOWN from '@/lib/data/renegade-platinum/locations/celestic-town';
import FLOAROMA_MEADOW from '@/lib/data/renegade-platinum/locations/floaroma-meadow';
import FUEGO_IRONWORKS from '@/lib/data/renegade-platinum/locations/fuego-ironworks';
import IRON_ISLAND from '@/lib/data/renegade-platinum/locations/iron-island';
import OREBURGH_GATE from '@/lib/data/renegade-platinum/locations/oreburgh-gate';
import PAL_PARK from '@/lib/data/renegade-platinum/locations/pal-park';
import PASTORIA_CITY from '@/lib/data/renegade-platinum/locations/pastoria-city';
import ROUTE_208 from '@/lib/data/renegade-platinum/locations/route-208';
import ROUTE_210 from '@/lib/data/renegade-platinum/locations/route-210';
import ROUTE_213 from '@/lib/data/renegade-platinum/locations/route-213';
import ROUTE_218 from '@/lib/data/renegade-platinum/locations/route-218';
import ROUTE_219 from '@/lib/data/renegade-platinum/locations/route-219';
import ROUTE_220 from '@/lib/data/renegade-platinum/locations/route-220';
import ROUTE_221 from '@/lib/data/renegade-platinum/locations/route-221';
import VALOR_LAKEFRONT from '@/lib/data/renegade-platinum/locations/valor-lakefront';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const BYRON: Split = {
    name: 'Byron',
    locations: [
        PASTORIA_CITY,
        ROUTE_213,
        VALOR_LAKEFRONT,
        LocationHelpers.withSubareaOrder(ROUTE_210, ['North', 'South']),
        CELESTIC_TOWN,
        LocationHelpers.withSubareaOrder(OREBURGH_GATE, ['B1F', '1F']),
        ROUTE_208,
        ROUTE_213,
        FUEGO_IRONWORKS,
        FLOAROMA_MEADOW,
        ROUTE_219,
        ROUTE_220,
        ROUTE_221,
        PAL_PARK,
        ROUTE_218,
        CANALAVE_CITY,
        IRON_ISLAND,
        CANALAVE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 5 },
};

export default BYRON;
