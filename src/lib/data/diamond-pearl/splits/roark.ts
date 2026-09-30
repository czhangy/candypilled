import JUBILIFE_CITY from '@/lib/data/diamond-pearl/locations/jubilife-city';
import LAKE_VERITY from '@/lib/data/diamond-pearl/locations/lake-verity';
import OREBURGH_CITY from '@/lib/data/diamond-pearl/locations/oreburgh-city';
import OREBURGH_GATE from '@/lib/data/diamond-pearl/locations/oreburgh-gate';
import OREBURGH_GYM from '@/lib/data/diamond-pearl/locations/oreburgh-gym';
import OREBURGH_MINE from '@/lib/data/diamond-pearl/locations/oreburgh-mine';
import ROUTE_201 from '@/lib/data/diamond-pearl/locations/route-201';
import ROUTE_202 from '@/lib/data/diamond-pearl/locations/route-202';
import ROUTE_203 from '@/lib/data/diamond-pearl/locations/route-203';
import SANDGEM_TOWN from '@/lib/data/diamond-pearl/locations/sandgem-town';
import TWINLEAF_TOWN from '@/lib/data/diamond-pearl/locations/twinleaf-town';
import { Split } from '@/lib/static/types';

const ROARK: Split = {
    name: 'Roark',
    locations: [
        TWINLEAF_TOWN,
        ROUTE_201,
        LAKE_VERITY,
        SANDGEM_TOWN,
        ROUTE_202,
        JUBILIFE_CITY,
        ROUTE_203,
        OREBURGH_GATE,
        OREBURGH_CITY,
        OREBURGH_MINE,
        OREBURGH_GYM,
    ],
    saveCondition: { type: 'badge', bit: 0 },
};

export default ROARK;
