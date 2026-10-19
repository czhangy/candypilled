import AQUA_HIDEOUT from '@/lib/data/emerald/locations/aqua-hideout';
import FORTREE_CITY from '@/lib/data/emerald/locations/fortree-city';
import LILYCOVE_CITY from '@/lib/data/emerald/locations/lilycove-city';
import MAGMA_HIDEOUT from '@/lib/data/emerald/locations/magma-hideout';
import MOSSDEEP_CITY from '@/lib/data/emerald/locations/mossdeep-city';
import MOSSDEEP_GYM from '@/lib/data/emerald/locations/mossdeep-gym';
import MT_PYRE from '@/lib/data/emerald/locations/mt-pyre';
import ROUTE_120 from '@/lib/data/emerald/locations/route-120';
import ROUTE_121 from '@/lib/data/emerald/locations/route-121';
import ROUTE_122 from '@/lib/data/emerald/locations/route-122';
import ROUTE_124 from '@/lib/data/emerald/locations/route-124';
import { Split } from '@/lib/static/types';

const TATE_AND_LIZA: Split = {
    name: 'Tate & Liza',
    locations: [
        FORTREE_CITY,
        ROUTE_120,
        ROUTE_121,
        LILYCOVE_CITY,
        ROUTE_122,
        MT_PYRE,
        MAGMA_HIDEOUT,
        AQUA_HIDEOUT,
        ROUTE_124,
        MOSSDEEP_CITY,
        MOSSDEEP_GYM,
    ],
    // FLAG_BADGE07_GET = SYSTEM_FLAGS (0x860) + 0x0D, per pokeemerald's
    // include/constants/flags.h.
    saveCondition: { type: 'badge', bit: 2157 },
};

export default TATE_AND_LIZA;
