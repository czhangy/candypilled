import ROUTE_103 from '@/lib/data/emerald/locations/route-103';
import { Split } from '@/lib/static/types';

const BRAWLY: Split = {
    name: 'Brawly',
    locations: [ROUTE_103],
    // FLAG_BADGE02_GET = SYSTEM_FLAGS (0x860) + 0x08, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2152 },
};

export default BRAWLY;
