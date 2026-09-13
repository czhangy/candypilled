import { Split } from '@/lib/static/types';

const NORMAN: Split = {
    name: 'Norman',
    locations: [],
    // FLAG_BADGE05_GET = SYSTEM_FLAGS (0x860) + 0x0B, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2155 },
};

export default NORMAN;
