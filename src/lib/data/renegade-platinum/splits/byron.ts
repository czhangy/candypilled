import OREBURGH_GATE from '@/lib/data/renegade-platinum/locations/oreburgh-gate';
import ROUTE_208 from '@/lib/data/renegade-platinum/locations/route-208';
import ROUTE_210 from '@/lib/data/renegade-platinum/locations/route-210';
import ROUTE_213 from '@/lib/data/renegade-platinum/locations/route-213';
import VALOR_LAKEFRONT from '@/lib/data/renegade-platinum/locations/valor-lakefront';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const BYRON: Split = {
    name: 'Byron',
    locations: [
        VALOR_LAKEFRONT,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_210, ['North', 'South']),
            ['South']
        ),
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(OREBURGH_GATE, ['B1F', '1F']),
            ['1F']
        ),
        ROUTE_208,
        ROUTE_213,
    ],
    saveCondition: { type: 'badge', bit: 5 },
};

export default BYRON;
