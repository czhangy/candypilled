import { Split } from '@/lib/static/types';

const FLANNERY: Split = {
    name: 'Flannery',
    locations: [],
    // FLAG_BADGE04_GET = SYSTEM_FLAGS (0x860) + 0x0A, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2154 },
};

export default FLANNERY;
