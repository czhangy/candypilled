import ROUTE_111 from '@/lib/data/emerald/locations/route-111';
import TRICK_HOUSE from '@/lib/data/emerald/locations/trick-house';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const NORMAN: Split = {
    name: 'Norman',
    locations: [
        LocationHelpers.withSubareaOrder(ROUTE_111, [
            'Desert',
            'South',
            'North',
        ]),
        TRICK_HOUSE,
    ],
    // FLAG_BADGE05_GET = SYSTEM_FLAGS (0x860) + 0x0B, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2155 },
};

export default NORMAN;
