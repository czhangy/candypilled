import OREBURGH_CITY from '@/lib/games/platinum/locations/oreburgh-city';
import OREBURGH_GATE from '@/lib/games/platinum/locations/oreburgh-gate';
import OREBURGH_GYM from '@/lib/games/platinum/locations/oreburgh-gym';
import OREBURGH_MINE from '@/lib/games/platinum/locations/oreburgh-mine';
import RAVAGED_PATH from '@/lib/games/platinum/locations/ravaged-path';
import ROUTE_201 from '@/lib/games/platinum/locations/route-201';
import ROUTE_202 from '@/lib/games/platinum/locations/route-202';
import ROUTE_203 from '@/lib/games/platinum/locations/route-203';
import ROUTE_204 from '@/lib/games/platinum/locations/route-204';
import ROUTE_207 from '@/lib/games/platinum/locations/route-207';
import TWINLEAF_TOWN from '@/lib/games/platinum/locations/twinleaf-town';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

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
        LocationHelpers.withHiddenBattles(ROUTE_207),
        OREBURGH_MINE,
        OREBURGH_GYM,
    ],
};

export default ROARK;
