import { Split } from '@/lib/static/types';

const TATE_AND_LIZA: Split = {
    name: 'Tate & Liza',
    locations: [],
    // FLAG_BADGE07_GET = SYSTEM_FLAGS (0x800) + 0x0D, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2061 },
};

export default TATE_AND_LIZA;
