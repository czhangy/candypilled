import PETALBURG_CITY from '@/lib/data/ruby-sapphire/locations/petalburg-city';
import ROUTE_104 from '@/lib/data/ruby-sapphire/locations/route-104';
import ROUTE_106 from '@/lib/data/ruby-sapphire/locations/route-106';
import ROUTE_107 from '@/lib/data/ruby-sapphire/locations/route-107';
import ROUTE_109 from '@/lib/data/ruby-sapphire/locations/route-109';
import ROUTE_115 from '@/lib/data/ruby-sapphire/locations/route-115';
import ROUTE_118 from '@/lib/data/ruby-sapphire/locations/route-118';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const WINONA: Split = {
    name: 'Winona',
    locations: [
        PETALBURG_CITY,
        LocationHelpers.withSubareaOrder(ROUTE_115, ['North', 'South']),
        ROUTE_104,
        ROUTE_106,
        ROUTE_107,
        LocationHelpers.withSubareaOrder(ROUTE_109, [
            'Ocean',
            'Beach',
            'Seashore House',
        ]),
        ROUTE_118,
    ],
    // FLAG_BADGE06_GET = SYSTEM_FLAGS (0x800) + 0x0C, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2060 },
};

export default WINONA;
