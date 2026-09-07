import ABANDONED_SHIP from '@/lib/data/ruby-sapphire/locations/abandoned-ship';
import CAVE_OF_ORIGIN from '@/lib/data/ruby-sapphire/locations/cave-of-origin';
import MOSSDEEP_CITY from '@/lib/data/ruby-sapphire/locations/mossdeep-city';
import ROUTE_126 from '@/lib/data/ruby-sapphire/locations/route-126';
import ROUTE_127 from '@/lib/data/ruby-sapphire/locations/route-127';
import ROUTE_128 from '@/lib/data/ruby-sapphire/locations/route-128';
import SEAFLOOR_CAVERN from '@/lib/data/ruby-sapphire/locations/seafloor-cavern';
import SOOTOPOLIS_CITY from '@/lib/data/ruby-sapphire/locations/sootopolis-city';
import SOOTOPOLIS_GYM from '@/lib/data/ruby-sapphire/locations/sootopolis-gym';
import TRICK_HOUSE from '@/lib/data/ruby-sapphire/locations/trick-house';
import UNDERWATER from '@/lib/data/ruby-sapphire/locations/underwater';
import { Split } from '@/lib/static/types';

const WALLACE: Split = {
    name: 'Wallace',
    locations: [
        MOSSDEEP_CITY,
        TRICK_HOUSE,
        ABANDONED_SHIP,
        UNDERWATER,
        ROUTE_127,
        ROUTE_128,
        SEAFLOOR_CAVERN,
        ROUTE_126,
        SOOTOPOLIS_CITY,
        CAVE_OF_ORIGIN,
        SOOTOPOLIS_GYM,
    ],
    // FLAG_BADGE08_GET = SYSTEM_FLAGS (0x800) + 0x0E, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2062 },
};

export default WALLACE;
