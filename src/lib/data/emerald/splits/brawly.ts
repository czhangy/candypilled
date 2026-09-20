import DEWFORD_GYM from '@/lib/data/emerald/locations/dewford-gym';
import DEWFORD_TOWN from '@/lib/data/emerald/locations/dewford-town';
import GRANITE_CAVE from '@/lib/data/emerald/locations/granite-cave';
import MAUVILLE_CITY from '@/lib/data/emerald/locations/mauville-city';
import PETALBURG_WOODS from '@/lib/data/emerald/locations/petalburg-woods';
import ROUTE_103 from '@/lib/data/emerald/locations/route-103';
import ROUTE_104 from '@/lib/data/emerald/locations/route-104';
import ROUTE_106 from '@/lib/data/emerald/locations/route-106';
import ROUTE_107 from '@/lib/data/emerald/locations/route-107';
import ROUTE_109 from '@/lib/data/emerald/locations/route-109';
import ROUTE_110 from '@/lib/data/emerald/locations/route-110';
import ROUTE_111 from '@/lib/data/emerald/locations/route-111';
import ROUTE_116 from '@/lib/data/emerald/locations/route-116';
import ROUTE_117 from '@/lib/data/emerald/locations/route-117';
import ROUTE_118 from '@/lib/data/emerald/locations/route-118';
import RUSTBORO_CITY from '@/lib/data/emerald/locations/rustboro-city';
import RUSTURF_TUNNEL from '@/lib/data/emerald/locations/rusturf-tunnel';
import SLATEPORT_CITY from '@/lib/data/emerald/locations/slateport-city';
import TRICK_HOUSE from '@/lib/data/emerald/locations/trick-house';
import VERDANTURF_TOWN from '@/lib/data/emerald/locations/verdanturf-town';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

// Confirmed order, matching Ruby/Sapphire's own Brawly split with
// Dewford Gym last: Rustboro City, Route 116, Rusturf Tunnel, Route 104,
// Petalburg Woods, Dewford Town, Route 107, Route 106, Granite Cave,
// Route 109, Slateport City, Route 110, Trick House, Route 103, Mauville
// City, Route 118, Route 111, Route 117, Verdanturf Town, Rusturf Tunnel
// (revisit), Dewford Gym. Remaining locations get added here in order
// as they're wired.
const BRAWLY: Split = {
    name: 'Brawly',
    locations: [
        RUSTBORO_CITY,
        ROUTE_116,
        RUSTURF_TUNNEL,
        LocationHelpers.withSubareaOrder(ROUTE_104, ['North', 'South']),
        PETALBURG_WOODS,
        DEWFORD_TOWN,
        ROUTE_107,
        ROUTE_106,
        GRANITE_CAVE,
        ROUTE_109,
        SLATEPORT_CITY,
        ROUTE_110,
        TRICK_HOUSE,
        LocationHelpers.withSubareaOrder(ROUTE_103, ['East', 'West']),
        MAUVILLE_CITY,
        ROUTE_118,
        ROUTE_111,
        ROUTE_117,
        VERDANTURF_TOWN,
        RUSTURF_TUNNEL,
        DEWFORD_GYM,
    ],
    // FLAG_BADGE02_GET = SYSTEM_FLAGS (0x860) + 0x08, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2152 },
};

export default BRAWLY;
