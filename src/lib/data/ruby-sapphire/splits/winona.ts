import ABANDONED_SHIP from '@/lib/data/ruby-sapphire/locations/abandoned-ship';
import FORTREE_CITY from '@/lib/data/ruby-sapphire/locations/fortree-city';
import LILYCOVE_CITY from '@/lib/data/ruby-sapphire/locations/lilycove-city';
import MT_PYRE from '@/lib/data/ruby-sapphire/locations/mt-pyre';
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
import SAFARI_ZONE from '@/lib/data/ruby-sapphire/locations/safari-zone';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const WINONA: Split = {
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
    ],
    // FLAG_BADGE06_GET = SYSTEM_FLAGS (0x800) + 0x0C, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2060 },
};

export default WINONA;
