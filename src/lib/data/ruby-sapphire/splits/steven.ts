import CHAMPIONS_ROOM from '@/lib/data/ruby-sapphire/locations/champions-room';
import DRAKES_ROOM from '@/lib/data/ruby-sapphire/locations/drakes-room';
import EVER_GRANDE_CITY from '@/lib/data/ruby-sapphire/locations/ever-grande-city';
import GLACIAS_ROOM from '@/lib/data/ruby-sapphire/locations/glacias-room';
import METEOR_FALLS from '@/lib/data/ruby-sapphire/locations/meteor-falls';
import PHOEBES_ROOM from '@/lib/data/ruby-sapphire/locations/phoebes-room';
import SIDNEYS_ROOM from '@/lib/data/ruby-sapphire/locations/sidneys-room';
import SOOTOPOLIS_CITY from '@/lib/data/ruby-sapphire/locations/sootopolis-city';
import VICTORY_ROAD from '@/lib/data/ruby-sapphire/locations/victory-road';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const STEVEN: Split = {
    name: 'Steven',
    locations: [
        SOOTOPOLIS_CITY,
        LocationHelpers.withSubareaOrder(METEOR_FALLS, [
            '1F Back',
            'B1F',
            'B1F Back',
            '1F',
        ]),
        EVER_GRANDE_CITY,
        VICTORY_ROAD,
        SIDNEYS_ROOM,
        PHOEBES_ROOM,
        GLACIAS_ROOM,
        DRAKES_ROOM,
        CHAMPIONS_ROOM,
    ],
    // FLAG_SYS_GAME_CLEAR = SYSTEM_FLAGS (0x800) + 0x04, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2052 },
};

export default STEVEN;
