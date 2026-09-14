import ROUTE_103 from '@/lib/data/emerald/locations/route-103';
import ROUTE_115 from '@/lib/data/emerald/locations/route-115';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const WINONA: Split = {
    name: 'Winona',
    locations: [
        ROUTE_103,
        LocationHelpers.withSubareaOrder(ROUTE_115, ['North', 'South']),
    ],
    // FLAG_BADGE06_GET = SYSTEM_FLAGS (0x860) + 0x0C, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2156 },
};

export default WINONA;
