import { Split } from '@/lib/static/types';

const WALLACE: Split = {
    name: 'Wallace',
    locations: [],
    // FLAG_BADGE08_GET = SYSTEM_FLAGS (0x800) + 0x0E, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2062 },
};

export default WALLACE;
