import TRICK_HOUSE from '@/lib/data/emerald/locations/trick-house';
import { Split } from '@/lib/static/types';

const JUAN: Split = {
    name: 'Juan',
    locations: [TRICK_HOUSE],
    // FLAG_BADGE08_GET = SYSTEM_FLAGS (0x860) + 0x0E, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    // Juan is Emerald's Sootopolis gym leader (Wallace holds that role in
    // Ruby/Sapphire instead, and becomes the champion here) -- confirmed
    // per this game's own onboarding decision, not assumed from R/S.
    saveCondition: { type: 'badge', bit: 2158 },
};

export default JUAN;
