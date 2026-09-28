import FORTREE_CITY from '@/lib/data/ruby-sapphire/locations/fortree-city';
import LILYCOVE_CITY from '@/lib/data/ruby-sapphire/locations/lilycove-city';
import MOSSDEEP_CITY from '@/lib/data/ruby-sapphire/locations/mossdeep-city';
import MOSSDEEP_GYM from '@/lib/data/ruby-sapphire/locations/mossdeep-gym';
import MT_PYRE from '@/lib/data/ruby-sapphire/locations/mt-pyre';
import ROUTE_120 from '@/lib/data/ruby-sapphire/locations/route-120';
import ROUTE_121 from '@/lib/data/ruby-sapphire/locations/route-121';
import ROUTE_122 from '@/lib/data/ruby-sapphire/locations/route-122';
import ROUTE_124 from '@/lib/data/ruby-sapphire/locations/route-124';
import { Location, Split } from '@/lib/static/types';

// Takes the version's own Team hideout as a parameter since Magma/Aqua
// Hideout are genuinely different maps per floor, and only the version's
// own hideout is ever accessible.
const getTateAndLiza = (hideout: Location): Split => ({
    name: 'Tate & Liza',
    locations: [
        FORTREE_CITY,
        ROUTE_120,
        ROUTE_121,
        LILYCOVE_CITY,
        ROUTE_122,
        MT_PYRE,
        hideout,
        ROUTE_124,
        MOSSDEEP_CITY,
        MOSSDEEP_GYM,
    ],
    // FLAG_BADGE07_GET = SYSTEM_FLAGS (0x800) + 0x0D, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2061 },
});

export default getTateAndLiza;
