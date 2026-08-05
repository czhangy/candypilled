import LAKE_VERITY from '@/lib/data/diamond-pearl/locations/lake-verity';
import OREBURGH_CITY from '@/lib/data/diamond-pearl/locations/oreburgh-city';
import OREBURGH_GATE from '@/lib/data/diamond-pearl/locations/oreburgh-gate';
import OREBURGH_GYM from '@/lib/data/diamond-pearl/locations/oreburgh-gym';
import OREBURGH_MINE from '@/lib/data/diamond-pearl/locations/oreburgh-mine';
import RAVAGED_PATH from '@/lib/data/diamond-pearl/locations/ravaged-path';
import ROUTE_201 from '@/lib/data/diamond-pearl/locations/route-201';
import ROUTE_202 from '@/lib/data/diamond-pearl/locations/route-202';
import ROUTE_203 from '@/lib/data/diamond-pearl/locations/route-203';
import ROUTE_204 from '@/lib/data/diamond-pearl/locations/route-204';
import ROUTE_207 from '@/lib/data/diamond-pearl/locations/route-207';
import ROUTE_218 from '@/lib/data/diamond-pearl/locations/route-218';
import ROUTE_219 from '@/lib/data/diamond-pearl/locations/route-219';
import TWINLEAF_TOWN from '@/lib/data/diamond-pearl/locations/twinleaf-town';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const ROARK: Split = {
    name: 'Roark',
    locations: [
        TWINLEAF_TOWN,
        ROUTE_201,
        LocationHelpers.withHiddenBattles(LAKE_VERITY),
        LocationHelpers.withHiddenBattles(ROUTE_219),
        ROUTE_202,
        LocationHelpers.withHiddenBattles(ROUTE_218),
        LocationHelpers.withHiddenSubareaBattles(ROUTE_204, ['North']),
        RAVAGED_PATH,
        ROUTE_203,
        OREBURGH_GATE,
        OREBURGH_CITY,
        LocationHelpers.withHiddenBattles(ROUTE_207),
        OREBURGH_MINE,
        OREBURGH_GYM,
    ],
};

export default ROARK;
