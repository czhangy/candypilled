import CANALAVE_CITY from '@/lib/data/platinum/locations/canalave-city';
import CANALAVE_GYM from '@/lib/data/platinum/locations/canalave-gym';
import CELESTIC_TOWN from '@/lib/data/platinum/locations/celestic-town';
import IRON_ISLAND from '@/lib/data/platinum/locations/iron-island';
import PASTORIA_CITY from '@/lib/data/platinum/locations/pastoria-city';
import ROUTE_210 from '@/lib/data/platinum/locations/route-210';
import ROUTE_218 from '@/lib/data/platinum/locations/route-218';
import VALOR_LAKEFRONT from '@/lib/data/platinum/locations/valor-lakefront';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const BYRON: Split = {
    name: 'Byron',
    locations: [
        PASTORIA_CITY,
        VALOR_LAKEFRONT,
        LocationHelpers.withSubareaOrder(ROUTE_210, ['North', 'South']),
        CELESTIC_TOWN,
        ROUTE_218,
        CANALAVE_CITY,
        IRON_ISLAND,
        CANALAVE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 5 },
};

export default BYRON;
