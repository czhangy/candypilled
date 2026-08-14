import CANALAVE_CITY from '@/lib/data/platinum/locations/canalave-city';
import CANALAVE_GYM from '@/lib/data/platinum/locations/canalave-gym';
import CELESTIC_RUINS from '@/lib/data/platinum/locations/celestic-ruins';
import CELESTIC_TOWN from '@/lib/data/platinum/locations/celestic-town';
import FUEGO_IRONWORKS from '@/lib/data/platinum/locations/fuego-ironworks';
import IRON_ISLAND from '@/lib/data/platinum/locations/iron-island';
import OREBURGH_GATE from '@/lib/data/platinum/locations/oreburgh-gate';
import ROUTE_210 from '@/lib/data/platinum/locations/route-210';
import ROUTE_211 from '@/lib/data/platinum/locations/route-211';
import ROUTE_218 from '@/lib/data/platinum/locations/route-218';
import ROUTE_219 from '@/lib/data/platinum/locations/route-219';
import ROUTE_220 from '@/lib/data/platinum/locations/route-220';
import ROUTE_221 from '@/lib/data/platinum/locations/route-221';
import VALOR_LAKEFRONT from '@/lib/data/platinum/locations/valor-lakefront';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const BYRON: Split = {
    name: 'Byron',
    locations: [
        VALOR_LAKEFRONT,
        LocationHelpers.withSubareaOrder(
            LocationHelpers.withHiddenSubareaBattles(ROUTE_210, ['South']),
            ['North', 'South']
        ),
        CELESTIC_TOWN,
        CELESTIC_RUINS,
        LocationHelpers.withSubareaOrder(
            LocationHelpers.withHiddenSubareaBattles(ROUTE_211, ['West']),
            ['East', 'West']
        ),
        ROUTE_219,
        ROUTE_220,
        ROUTE_221,
        FUEGO_IRONWORKS,
        LocationHelpers.withSubareaOrder(
            LocationHelpers.withHiddenSubareaBattles(OREBURGH_GATE, ['B1F']),
            ['B1F', '1F']
        ),
        ROUTE_218,
        CANALAVE_CITY,
        IRON_ISLAND,
        CANALAVE_GYM,
    ],
};

export default BYRON;
