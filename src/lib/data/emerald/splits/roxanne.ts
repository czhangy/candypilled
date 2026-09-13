import { Split } from '@/lib/static/types';

const ROXANNE: Split = {
    name: 'Roxanne',
    locations: [],
    // FLAG_BADGE01_GET = SYSTEM_FLAGS (0x860) + 0x07, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    // Note this differs from Ruby/Sapphire's absolute flag number (2151
    // vs. 2055) since pokeemerald's SYSTEM_FLAGS base is shifted.
    saveCondition: { type: 'badge', bit: 2151 },
};

export default ROXANNE;
