import CAVE_OF_ORIGIN from '@/lib/data/emerald/locations/cave-of-origin';
import MOSSDEEP_CITY from '@/lib/data/emerald/locations/mossdeep-city';
import ROUTE_126 from '@/lib/data/emerald/locations/route-126';
import ROUTE_127 from '@/lib/data/emerald/locations/route-127';
import ROUTE_128 from '@/lib/data/emerald/locations/route-128';
import ROUTE_129 from '@/lib/data/emerald/locations/route-129';
import ROUTE_130 from '@/lib/data/emerald/locations/route-130';
import ROUTE_131 from '@/lib/data/emerald/locations/route-131';
import SEAFLOOR_CAVERN from '@/lib/data/emerald/locations/seafloor-cavern';
import SKY_PILLAR from '@/lib/data/emerald/locations/sky-pillar';
import SOOTOPOLIS_CITY from '@/lib/data/emerald/locations/sootopolis-city';
import SOOTOPOLIS_GYM from '@/lib/data/emerald/locations/sootopolis-gym';
import UNDERWATER from '@/lib/data/emerald/locations/underwater';
import { Split } from '@/lib/static/types';

const JUAN: Split = {
    name: 'Juan',
    locations: [
        MOSSDEEP_CITY,
        ROUTE_127,
        ROUTE_128,
        UNDERWATER,
        SEAFLOOR_CAVERN,
        ROUTE_126,
        SOOTOPOLIS_CITY,
        CAVE_OF_ORIGIN,
        ROUTE_129,
        ROUTE_130,
        ROUTE_131,
        SKY_PILLAR,
        SOOTOPOLIS_GYM,
    ],
    // FLAG_BADGE08_GET = SYSTEM_FLAGS (0x860) + 0x0E, per pokeemerald's
    // include/constants/flags.h.
    saveCondition: { type: 'badge', bit: 2158 },
};

export default JUAN;
