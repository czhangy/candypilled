import FORTREE_CITY from '@/lib/data/ruby-sapphire/locations/fortree-city';
import FORTREE_GYM from '@/lib/data/ruby-sapphire/locations/fortree-gym';
import PETALBURG_CITY from '@/lib/data/ruby-sapphire/locations/petalburg-city';
import ROUTE_118 from '@/lib/data/ruby-sapphire/locations/route-118';
import ROUTE_119 from '@/lib/data/ruby-sapphire/locations/route-119';
import ROUTE_120 from '@/lib/data/ruby-sapphire/locations/route-120';
import { Split } from '@/lib/static/types';

const WINONA: Split = {
    name: 'Winona',
    locations: [
        PETALBURG_CITY,
        ROUTE_118,
        ROUTE_119,
        FORTREE_CITY,
        ROUTE_120,
        FORTREE_GYM,
    ],
    // FLAG_BADGE06_GET = SYSTEM_FLAGS (0x800) + 0x0C, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2060 },
};

export default WINONA;
