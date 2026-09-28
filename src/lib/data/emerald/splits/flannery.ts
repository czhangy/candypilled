import FIERY_PATH from '@/lib/data/emerald/locations/fiery-path';
import MAUVILLE_CITY from '@/lib/data/emerald/locations/mauville-city';
import ROUTE_111 from '@/lib/data/emerald/locations/route-111';
import ROUTE_112 from '@/lib/data/emerald/locations/route-112';
import ROUTE_113 from '@/lib/data/emerald/locations/route-113';
import ROUTE_117 from '@/lib/data/emerald/locations/route-117';
import RUSTURF_TUNNEL from '@/lib/data/emerald/locations/rusturf-tunnel';
import VERDANTURF_TOWN from '@/lib/data/emerald/locations/verdanturf-town';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

// Confirmed order, matching Ruby/Sapphire's own Flannery split location
// list verbatim (user confirmed): Mauville City, Route 117,
// Verdanturf Town, Rusturf Tunnel, Route 111, Route 112, Fiery Path,
// Route 112 (North/South, revisit), Route 111 (North/South/Desert,
// revisit), Route 113, Fallarbor Town, Route 114, Meteor Falls, Route
// 115, Route 112 (again), Mt Chimney, Jagged Pass, Lavaridge Town,
// Lavaridge Gym. Everything from Route 113 onward isn't wired yet (none
// of those locations exist for Emerald) -- add them here in order as
// they're captured.
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
        LocationHelpers.withSubareaOrder(ROUTE_112, ['North', 'South']),
        LocationHelpers.withSubareaOrder(ROUTE_111, [
            'North',
            'South',
            'Desert',
        ]),
        ROUTE_113,
    ],
    // FLAG_BADGE04_GET = SYSTEM_FLAGS (0x860) + 0x0A, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2154 },
};

export default FLANNERY;
