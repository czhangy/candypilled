import DEWFORD_GYM from '@/lib/data/emerald/locations/dewford-gym';
import DEWFORD_TOWN from '@/lib/data/emerald/locations/dewford-town';
import GRANITE_CAVE from '@/lib/data/emerald/locations/granite-cave';
import ROUTE_106 from '@/lib/data/emerald/locations/route-106';
import ROUTE_116 from '@/lib/data/emerald/locations/route-116';
import RUSTBORO_CITY from '@/lib/data/emerald/locations/rustboro-city';
import RUSTURF_TUNNEL from '@/lib/data/emerald/locations/rusturf-tunnel';
import { Split } from '@/lib/static/types';

const BRAWLY: Split = {
    name: 'Brawly',
    locations: [
        RUSTBORO_CITY,
        ROUTE_116,
        RUSTURF_TUNNEL,
        DEWFORD_TOWN,
        ROUTE_106,
        GRANITE_CAVE,
        DEWFORD_GYM,
    ],
    // FLAG_BADGE02_GET = SYSTEM_FLAGS (0x860) + 0x08, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2152 },
};

export default BRAWLY;
