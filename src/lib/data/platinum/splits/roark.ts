import JUBILIFE_CITY from '@/lib/data/platinum/locations/jubilife-city';
import LAKE_VERITY from '@/lib/data/platinum/locations/lake-verity';
import OREBURGH_CITY from '@/lib/data/platinum/locations/oreburgh-city';
import OREBURGH_GATE from '@/lib/data/platinum/locations/oreburgh-gate';
import OREBURGH_GYM from '@/lib/data/platinum/locations/oreburgh-gym';
import OREBURGH_MINE from '@/lib/data/platinum/locations/oreburgh-mine';
import ROUTE_201 from '@/lib/data/platinum/locations/route-201';
import ROUTE_202 from '@/lib/data/platinum/locations/route-202';
import ROUTE_203 from '@/lib/data/platinum/locations/route-203';
import SANDGEM_TOWN from '@/lib/data/platinum/locations/sandgem-town';
import TWINLEAF_TOWN from '@/lib/data/platinum/locations/twinleaf-town';
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
