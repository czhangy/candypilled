import { Split } from '@/lib/static/types';
import JUBILIFE_CITY from './locations/jubilife-city';
import OREBURGH_CITY from './locations/oreburgh-city';
import OREBURGH_GATE from './locations/oreburgh-gate';
import OREBURGH_GYM from './locations/oreburgh-gym';
import RAVAGED_PATH from './locations/ravaged-path';
import ROUTE_201 from './locations/route-201';
import ROUTE_202 from './locations/route-202';
import ROUTE_203 from './locations/route-203';
import ROUTE_204_SOUTH from './locations/route-204-south';
import SANDGEM_TOWN from './locations/sandgem-town';
import TWINLEAF_TOWN from './locations/twinleaf-town';

const ROARK: Split = {
    name: 'Roark',
    locations: [
        TWINLEAF_TOWN,
        ROUTE_201,
        SANDGEM_TOWN,
        ROUTE_202,
        JUBILIFE_CITY,
        ROUTE_204_SOUTH,
        RAVAGED_PATH,
        ROUTE_203,
        OREBURGH_GATE,
        OREBURGH_CITY,
        OREBURGH_GYM,
    ],
};

export default ROARK;
