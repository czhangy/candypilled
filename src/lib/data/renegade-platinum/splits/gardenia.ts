import ETERNA_CITY from '@/lib/data/renegade-platinum/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/renegade-platinum/locations/eterna-forest';
import ETERNA_GYM from '@/lib/data/renegade-platinum/locations/eterna-gym';
import FLOAROMA_MEADOW from '@/lib/data/renegade-platinum/locations/floaroma-meadow';
import FLOAROMA_TOWN from '@/lib/data/renegade-platinum/locations/floaroma-town';
import JUBILIFE_CITY from '@/lib/data/renegade-platinum/locations/jubilife-city';
import MT_CORONET from '@/lib/data/renegade-platinum/locations/mt-coronet';
import OLD_CHATEAU from '@/lib/data/renegade-platinum/locations/old-chateau';
import OREBURGH_GATE from '@/lib/data/renegade-platinum/locations/oreburgh-gate';
import RAVAGED_PATH from '@/lib/data/renegade-platinum/locations/ravaged-path';
import ROUTE_203 from '@/lib/data/renegade-platinum/locations/route-203';
import ROUTE_204 from '@/lib/data/renegade-platinum/locations/route-204';
import ROUTE_205 from '@/lib/data/renegade-platinum/locations/route-205';
import ROUTE_206 from '@/lib/data/renegade-platinum/locations/route-206';
import ROUTE_211 from '@/lib/data/renegade-platinum/locations/route-211';
import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import VALLEY_WINDWORKS from '@/lib/data/renegade-platinum/locations/valley-windworks';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const GARDENIA: Split = {
    name: 'Gardenia',
    locations: [
        OREBURGH_GATE,
        ROUTE_203,
        JUBILIFE_CITY,
        ROUTE_204,
        RAVAGED_PATH,
        FLOAROMA_TOWN,
        VALLEY_WINDWORKS,
        FLOAROMA_MEADOW,
        LocationHelpers.withSubareaOrder(VALLEY_WINDWORKS, [
            'Interior',
            'Exterior',
        ]),
        ROUTE_205,
        ETERNA_FOREST,
        OLD_CHATEAU,
        LocationHelpers.withSubareaOrder(ROUTE_205, ['North', 'South']),
        ETERNA_CITY,
        ROUTE_206,
        LocationHelpers.withSubareaOrder(ROUTE_211, ['West', 'East']),
        MT_CORONET,
        ROUTE_216,
        ETERNA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 1 },
};

export default GARDENIA;
