import JUBILIFE_CITY from '@/lib/data/renegade-platinum/locations/jubilife-city';
import LAKE_VERITY from '@/lib/data/renegade-platinum/locations/lake-verity';
import OREBURGH_CITY from '@/lib/data/renegade-platinum/locations/oreburgh-city';
import OREBURGH_GATE from '@/lib/data/renegade-platinum/locations/oreburgh-gate';
import OREBURGH_GYM from '@/lib/data/renegade-platinum/locations/oreburgh-gym';
import OREBURGH_MINE from '@/lib/data/renegade-platinum/locations/oreburgh-mine';
import RAVAGED_PATH from '@/lib/data/renegade-platinum/locations/ravaged-path';
import ROUTE_201 from '@/lib/data/renegade-platinum/locations/route-201';
import ROUTE_202 from '@/lib/data/renegade-platinum/locations/route-202';
import ROUTE_203 from '@/lib/data/renegade-platinum/locations/route-203';
import ROUTE_204 from '@/lib/data/renegade-platinum/locations/route-204';
import ROUTE_207 from '@/lib/data/renegade-platinum/locations/route-207';
import ROUTE_218 from '@/lib/data/renegade-platinum/locations/route-218';
import ROUTE_219 from '@/lib/data/renegade-platinum/locations/route-219';
import SANDGEM_TOWN from '@/lib/data/renegade-platinum/locations/sandgem-town';
import TRAINERS_SCHOOL from '@/lib/data/renegade-platinum/locations/trainers-school';
import TWINLEAF_TOWN from '@/lib/data/renegade-platinum/locations/twinleaf-town';
import VERITY_LAKEFRONT from '@/lib/data/renegade-platinum/locations/verity-lakefront';
import { Split } from '@/lib/static/types';

const ROARK: Split = {
    name: 'Roark',
    locations: [
        TWINLEAF_TOWN,
        ROUTE_201,
        VERITY_LAKEFRONT,
        LAKE_VERITY,
        SANDGEM_TOWN,
        ROUTE_219,
        ROUTE_202,
        JUBILIFE_CITY,
        TRAINERS_SCHOOL,
        ROUTE_218,
        ROUTE_204,
        RAVAGED_PATH,
        ROUTE_203,
        OREBURGH_GATE,
        OREBURGH_CITY,
        ROUTE_207,
        OREBURGH_MINE,
        OREBURGH_GYM,
    ],
    saveCondition: { type: 'badge', bit: 0 },
};

export default ROARK;
