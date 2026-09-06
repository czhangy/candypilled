import DEWFORD_TOWN from '@/lib/data/ruby-sapphire/locations/dewford-town';
import MAUVILLE_CITY from '@/lib/data/ruby-sapphire/locations/mauville-city';
import MAUVILLE_GYM from '@/lib/data/ruby-sapphire/locations/mauville-gym';
import ROUTE_103 from '@/lib/data/ruby-sapphire/locations/route-103';
import ROUTE_109 from '@/lib/data/ruby-sapphire/locations/route-109';
import ROUTE_110 from '@/lib/data/ruby-sapphire/locations/route-110';
import ROUTE_111 from '@/lib/data/ruby-sapphire/locations/route-111';
import ROUTE_117 from '@/lib/data/ruby-sapphire/locations/route-117';
import ROUTE_118 from '@/lib/data/ruby-sapphire/locations/route-118';
import RUSTURF_TUNNEL from '@/lib/data/ruby-sapphire/locations/rusturf-tunnel';
import SLATEPORT_CITY from '@/lib/data/ruby-sapphire/locations/slateport-city';
import VERDANTURF_TOWN from '@/lib/data/ruby-sapphire/locations/verdanturf-town';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const WATTSON: Split = {
    name: 'Wattson',
    locations: [
        DEWFORD_TOWN,
        ROUTE_109,
        SLATEPORT_CITY,
        ROUTE_110,
        LocationHelpers.withSubareaOrder(ROUTE_103, ['East', 'West']),
        MAUVILLE_CITY,
        ROUTE_118,
        ROUTE_111,
        ROUTE_117,
        VERDANTURF_TOWN,
        RUSTURF_TUNNEL,
        MAUVILLE_GYM,
    ],
    // FLAG_BADGE03_GET = SYSTEM_FLAGS (0x800) + 0x09, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2057 },
};

export default WATTSON;
