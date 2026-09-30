import ETERNA_CITY from '@/lib/data/renegade-platinum/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/renegade-platinum/locations/eterna-forest';
import ETERNA_GYM from '@/lib/data/renegade-platinum/locations/eterna-gym';
import FLOAROMA_MEADOW from '@/lib/data/renegade-platinum/locations/floaroma-meadow';
import FLOAROMA_TOWN from '@/lib/data/renegade-platinum/locations/floaroma-town';
import JUBILIFE_CITY from '@/lib/data/renegade-platinum/locations/jubilife-city';
import MT_CORONET from '@/lib/data/renegade-platinum/locations/mt-coronet';
import OREBURGH_CITY from '@/lib/data/renegade-platinum/locations/oreburgh-city';
import RAVAGED_PATH from '@/lib/data/renegade-platinum/locations/ravaged-path';
import ROUTE_204 from '@/lib/data/renegade-platinum/locations/route-204';
import ROUTE_205 from '@/lib/data/renegade-platinum/locations/route-205';
import ROUTE_211 from '@/lib/data/renegade-platinum/locations/route-211';
import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import VALLEY_WINDWORKS from '@/lib/data/renegade-platinum/locations/valley-windworks';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const GARDENIA: Split = {
    name: 'Gardenia',
    locations: [
        OREBURGH_CITY,
        JUBILIFE_CITY,
        ROUTE_204,
        RAVAGED_PATH,
        FLOAROMA_TOWN,
        VALLEY_WINDWORKS,
        FLOAROMA_MEADOW,
        ROUTE_205,
        ETERNA_FOREST,
        ETERNA_CITY,
        LocationHelpers.withSubareaOrder(ROUTE_211, ['West', 'East']),
        MT_CORONET,
        ROUTE_216,
        ETERNA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 1 },
};

export default GARDENIA;
