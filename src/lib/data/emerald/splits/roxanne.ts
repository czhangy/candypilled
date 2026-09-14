import LITTLEROOT_TOWN from '@/lib/data/emerald/locations/littleroot-town';
import OLDALE_TOWN from '@/lib/data/emerald/locations/oldale-town';
import PETALBURG_CITY from '@/lib/data/emerald/locations/petalburg-city';
import PETALBURG_WOODS from '@/lib/data/emerald/locations/petalburg-woods';
import ROUTE_101 from '@/lib/data/emerald/locations/route-101';
import ROUTE_102 from '@/lib/data/emerald/locations/route-102';
import ROUTE_103 from '@/lib/data/emerald/locations/route-103';
import ROUTE_104 from '@/lib/data/emerald/locations/route-104';
import ROUTE_115 from '@/lib/data/emerald/locations/route-115';
import ROUTE_116 from '@/lib/data/emerald/locations/route-116';
import RUSTBORO_CITY from '@/lib/data/emerald/locations/rustboro-city';
import RUSTBORO_GYM from '@/lib/data/emerald/locations/rustboro-gym';
import RUSTURF_TUNNEL from '@/lib/data/emerald/locations/rusturf-tunnel';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const ROXANNE: Split = {
    name: 'Roxanne',
    locations: [
        LITTLEROOT_TOWN,
        ROUTE_101,
        OLDALE_TOWN,
        ROUTE_103,
        ROUTE_102,
        PETALBURG_CITY,
        ROUTE_104,
        PETALBURG_WOODS,
        LocationHelpers.withSubareaOrder(ROUTE_104, ['North', 'South']),
        RUSTBORO_CITY,
        ROUTE_115,
        ROUTE_116,
        RUSTURF_TUNNEL,
        RUSTBORO_GYM,
    ],
    // FLAG_BADGE01_GET = SYSTEM_FLAGS (0x860) + 0x07, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    // Note this differs from Ruby/Sapphire's absolute flag number (2151
    // vs. 2055) since pokeemerald's SYSTEM_FLAGS base is shifted.
    saveCondition: { type: 'badge', bit: 2151 },
};

export default ROXANNE;
