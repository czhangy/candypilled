import ROUTE_103 from '@/lib/data/emerald/locations/route-103';
import ROUTE_106 from '@/lib/data/emerald/locations/route-106';
import ROUTE_107 from '@/lib/data/emerald/locations/route-107';
import ROUTE_109 from '@/lib/data/emerald/locations/route-109';
import ROUTE_115 from '@/lib/data/emerald/locations/route-115';
import ROUTE_118 from '@/lib/data/emerald/locations/route-118';
import TRICK_HOUSE from '@/lib/data/emerald/locations/trick-house';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const WINONA: Split = {
    name: 'Winona',
    locations: [
        LocationHelpers.withSubareaOrder(ROUTE_103, ['East', 'West']),
        LocationHelpers.withSubareaOrder(ROUTE_115, ['North', 'South']),
        ROUTE_107,
        ROUTE_106,
        LocationHelpers.withSubareaOrder(ROUTE_109, [
            'Ocean',
            'Beach',
            'Seashore House',
        ]),
        TRICK_HOUSE,
        ROUTE_118,
    ],
    // FLAG_BADGE06_GET = SYSTEM_FLAGS (0x860) + 0x0C, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2156 },
};

export default WINONA;
