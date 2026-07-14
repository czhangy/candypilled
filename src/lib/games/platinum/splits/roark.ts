import ROUTE_207 from '@/lib/games/platinum/splits/locations/route-207';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';
import OREBURGH_CITY from './locations/oreburgh-city';
import OREBURGH_GATE from './locations/oreburgh-gate';
import OREBURGH_GYM from './locations/oreburgh-gym';
import RAVAGED_PATH from './locations/ravaged-path';
import ROUTE_201 from './locations/route-201';
import ROUTE_202 from './locations/route-202';
import ROUTE_203 from './locations/route-203';
import ROUTE_204 from './locations/route-204';
import TWINLEAF_TOWN from './locations/twinleaf-town';

const ROARK: Split = {
    name: 'Roark',
    locations: [
        TWINLEAF_TOWN,
        ROUTE_201,
        ROUTE_202,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_204, ['North']),
        RAVAGED_PATH,
        ROUTE_203,
        LocationHelpers.withHiddenSubareaBattles(OREBURGH_GATE, ['B1F']),
        OREBURGH_CITY,
        ROUTE_207,
        OREBURGH_GYM,
    ],
};

export default ROARK;
