import FALLARBOR_TOWN from '@/lib/data/emerald/locations/fallarbor-town';
import FIERY_PATH from '@/lib/data/emerald/locations/fiery-path';
import JAGGED_PASS from '@/lib/data/emerald/locations/jagged-pass';
import LAVARIDGE_GYM from '@/lib/data/emerald/locations/lavaridge-gym';
import LAVARIDGE_TOWN from '@/lib/data/emerald/locations/lavaridge-town';
import MAUVILLE_CITY from '@/lib/data/emerald/locations/mauville-city';
import METEOR_FALLS from '@/lib/data/emerald/locations/meteor-falls';
import MT_CHIMNEY from '@/lib/data/emerald/locations/mt-chimney';
import ROUTE_111 from '@/lib/data/emerald/locations/route-111';
import ROUTE_112 from '@/lib/data/emerald/locations/route-112';
import ROUTE_113 from '@/lib/data/emerald/locations/route-113';
import ROUTE_114 from '@/lib/data/emerald/locations/route-114';
import ROUTE_117 from '@/lib/data/emerald/locations/route-117';
import RUSTURF_TUNNEL from '@/lib/data/emerald/locations/rusturf-tunnel';
import VERDANTURF_TOWN from '@/lib/data/emerald/locations/verdanturf-town';
import { Split } from '@/lib/static/types';

const FLANNERY: Split = {
    name: 'Flannery',
    locations: [
        MAUVILLE_CITY,
        ROUTE_117,
        VERDANTURF_TOWN,
        RUSTURF_TUNNEL,
        ROUTE_111,
        ROUTE_112,
        FIERY_PATH,
        ROUTE_113,
        FALLARBOR_TOWN,
        ROUTE_114,
        METEOR_FALLS,
        MT_CHIMNEY,
        JAGGED_PASS,
        LAVARIDGE_TOWN,
        LAVARIDGE_GYM,
    ],
    // FLAG_BADGE04_GET = SYSTEM_FLAGS (0x860) + 0x0A, per pokeemerald's
    // include/constants/flags.h.
    saveCondition: { type: 'badge', bit: 2154 },
};

export default FLANNERY;
