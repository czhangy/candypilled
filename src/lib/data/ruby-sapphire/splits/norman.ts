import LAVARIDGE_TOWN from '@/lib/data/ruby-sapphire/locations/lavaridge-town';
import PETALBURG_CITY from '@/lib/data/ruby-sapphire/locations/petalburg-city';
import PETALBURG_GYM from '@/lib/data/ruby-sapphire/locations/petalburg-gym';
import { Split } from '@/lib/static/types';

const NORMAN: Split = {
    name: 'Norman',
    locations: [LAVARIDGE_TOWN, PETALBURG_CITY, PETALBURG_GYM],
    // FLAG_BADGE05_GET = SYSTEM_FLAGS (0x800) + 0x0B, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2059 },
};

export default NORMAN;
