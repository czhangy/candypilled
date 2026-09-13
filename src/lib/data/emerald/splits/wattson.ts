import { Split } from '@/lib/static/types';

const WATTSON: Split = {
    name: 'Wattson',
    locations: [],
    // FLAG_BADGE03_GET = SYSTEM_FLAGS (0x860) + 0x09, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2153 },
};

export default WATTSON;
