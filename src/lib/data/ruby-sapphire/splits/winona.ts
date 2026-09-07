import ABANDONED_SHIP from '@/lib/data/ruby-sapphire/locations/abandoned-ship';
import EVER_GRANDE_CITY from '@/lib/data/ruby-sapphire/locations/ever-grande-city';
import FORTREE_CITY from '@/lib/data/ruby-sapphire/locations/fortree-city';
import FORTREE_GYM from '@/lib/data/ruby-sapphire/locations/fortree-gym';
import LILYCOVE_CITY from '@/lib/data/ruby-sapphire/locations/lilycove-city';
import MOSSDEEP_CITY from '@/lib/data/ruby-sapphire/locations/mossdeep-city';
import MT_PYRE from '@/lib/data/ruby-sapphire/locations/mt-pyre';
import PACIFIDLOG_TOWN from '@/lib/data/ruby-sapphire/locations/pacifidlog-town';
import PETALBURG_CITY from '@/lib/data/ruby-sapphire/locations/petalburg-city';
import ROUTE_104 from '@/lib/data/ruby-sapphire/locations/route-104';
import ROUTE_105 from '@/lib/data/ruby-sapphire/locations/route-105';
import ROUTE_106 from '@/lib/data/ruby-sapphire/locations/route-106';
import ROUTE_107 from '@/lib/data/ruby-sapphire/locations/route-107';
import ROUTE_108 from '@/lib/data/ruby-sapphire/locations/route-108';
import ROUTE_109 from '@/lib/data/ruby-sapphire/locations/route-109';
import ROUTE_115 from '@/lib/data/ruby-sapphire/locations/route-115';
import ROUTE_118 from '@/lib/data/ruby-sapphire/locations/route-118';
import ROUTE_119 from '@/lib/data/ruby-sapphire/locations/route-119';
import ROUTE_120 from '@/lib/data/ruby-sapphire/locations/route-120';
import ROUTE_121 from '@/lib/data/ruby-sapphire/locations/route-121';
import ROUTE_122 from '@/lib/data/ruby-sapphire/locations/route-122';
import ROUTE_123 from '@/lib/data/ruby-sapphire/locations/route-123';
import ROUTE_124 from '@/lib/data/ruby-sapphire/locations/route-124';
import ROUTE_125 from '@/lib/data/ruby-sapphire/locations/route-125';
import ROUTE_126 from '@/lib/data/ruby-sapphire/locations/route-126';
import ROUTE_127 from '@/lib/data/ruby-sapphire/locations/route-127';
import ROUTE_128 from '@/lib/data/ruby-sapphire/locations/route-128';
import ROUTE_129 from '@/lib/data/ruby-sapphire/locations/route-129';
import ROUTE_130 from '@/lib/data/ruby-sapphire/locations/route-130';
import ROUTE_131 from '@/lib/data/ruby-sapphire/locations/route-131';
import ROUTE_132 from '@/lib/data/ruby-sapphire/locations/route-132';
import ROUTE_133 from '@/lib/data/ruby-sapphire/locations/route-133';
import ROUTE_134 from '@/lib/data/ruby-sapphire/locations/route-134';
import SAFARI_ZONE from '@/lib/data/ruby-sapphire/locations/safari-zone';
import SHOAL_CAVE from '@/lib/data/ruby-sapphire/locations/shoal-cave';
import SLATEPORT_CITY from '@/lib/data/ruby-sapphire/locations/slateport-city';
import { Location, Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

// Team Aqua's and Team Magma's hideouts are genuinely different maps per
// floor (not a reskin of one shared layout), and only the version's own
// team hideout is ever accessible -- so unlike every other split, this one
// takes the correct hideout Location as a parameter instead of hardcoding
// one directly, and each variant's Game file supplies its own.
const getWinona = (hideout: Location): Split => ({
    name: 'Winona',
    locations: [
        PETALBURG_CITY,
        LocationHelpers.withSubareaOrder(ROUTE_115, ['North', 'South']),
        ROUTE_104,
        ROUTE_105,
        ROUTE_106,
        ROUTE_107,
        ROUTE_108,
        ABANDONED_SHIP,
        LocationHelpers.withSubareaOrder(ROUTE_109, [
            'Ocean',
            'Beach',
            'Seashore House',
        ]),
        ROUTE_118,
        ROUTE_123,
        ROUTE_119,
        FORTREE_CITY,
        ROUTE_120,
        ROUTE_121,
        LILYCOVE_CITY,
        SAFARI_ZONE,
        ROUTE_122,
        MT_PYRE,
        LocationHelpers.withSubareaOrder(ROUTE_123, ['East', 'West']),
        SLATEPORT_CITY,
        hideout,
        ROUTE_124,
        MOSSDEEP_CITY,
        ROUTE_125,
        SHOAL_CAVE,
        ROUTE_126,
        ROUTE_127,
        ROUTE_128,
        EVER_GRANDE_CITY,
        ROUTE_129,
        ROUTE_130,
        ROUTE_131,
        PACIFIDLOG_TOWN,
        ROUTE_132,
        ROUTE_133,
        ROUTE_134,
        FORTREE_GYM,
    ],
    // FLAG_BADGE06_GET = SYSTEM_FLAGS (0x800) + 0x0C, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2060 },
});

export default getWinona;
