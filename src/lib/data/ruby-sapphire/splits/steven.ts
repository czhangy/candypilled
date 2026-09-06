import METEOR_FALLS from '@/lib/data/ruby-sapphire/locations/meteor-falls';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const STEVEN: Split = {
    name: 'Steven',
    locations: [
        LocationHelpers.withSubareaOrder(METEOR_FALLS, [
            '1F Back',
            'B1F',
            'B1F Back',
            '1F',
        ]),
    ],
    // FLAG_SYS_GAME_CLEAR = SYSTEM_FLAGS (0x800) + 0x04, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2052 },
};

export default STEVEN;
