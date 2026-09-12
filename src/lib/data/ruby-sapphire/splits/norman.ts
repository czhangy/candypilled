import LAVARIDGE_TOWN from '@/lib/data/ruby-sapphire/locations/lavaridge-town';
import PETALBURG_CITY from '@/lib/data/ruby-sapphire/locations/petalburg-city';
import PETALBURG_GYM from '@/lib/data/ruby-sapphire/locations/petalburg-gym';
import ROUTE_111 from '@/lib/data/ruby-sapphire/locations/route-111';
import RUSTBORO_CITY from '@/lib/data/ruby-sapphire/locations/rustboro-city';
import TRICK_HOUSE from '@/lib/data/ruby-sapphire/locations/trick-house';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const NORMAN: Split = {
    name: 'Norman',
    locations: [
        LAVARIDGE_TOWN,
        LocationHelpers.withSubareaOrder(ROUTE_111, [
            'Desert',
            'South',
            'North',
        ]),
        TRICK_HOUSE,
        RUSTBORO_CITY,
        PETALBURG_CITY,
        PETALBURG_GYM,
    ],
    // FLAG_BADGE05_GET = SYSTEM_FLAGS (0x800) + 0x0B, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2059 },
};

export default NORMAN;
