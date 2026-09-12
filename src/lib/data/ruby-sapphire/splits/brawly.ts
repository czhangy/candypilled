import DEWFORD_GYM from '@/lib/data/ruby-sapphire/locations/dewford-gym';
import DEWFORD_TOWN from '@/lib/data/ruby-sapphire/locations/dewford-town';
import GRANITE_CAVE from '@/lib/data/ruby-sapphire/locations/granite-cave';
import MAUVILLE_CITY from '@/lib/data/ruby-sapphire/locations/mauville-city';
import PETALBURG_WOODS from '@/lib/data/ruby-sapphire/locations/petalburg-woods';
import ROUTE_103 from '@/lib/data/ruby-sapphire/locations/route-103';
import ROUTE_104 from '@/lib/data/ruby-sapphire/locations/route-104';
import ROUTE_106 from '@/lib/data/ruby-sapphire/locations/route-106';
import ROUTE_107 from '@/lib/data/ruby-sapphire/locations/route-107';
import ROUTE_109 from '@/lib/data/ruby-sapphire/locations/route-109';
import ROUTE_110 from '@/lib/data/ruby-sapphire/locations/route-110';
import ROUTE_111 from '@/lib/data/ruby-sapphire/locations/route-111';
import ROUTE_116 from '@/lib/data/ruby-sapphire/locations/route-116';
import ROUTE_117 from '@/lib/data/ruby-sapphire/locations/route-117';
import ROUTE_118 from '@/lib/data/ruby-sapphire/locations/route-118';
import RUSTBORO_CITY from '@/lib/data/ruby-sapphire/locations/rustboro-city';
import RUSTURF_TUNNEL from '@/lib/data/ruby-sapphire/locations/rusturf-tunnel';
import SLATEPORT_CITY from '@/lib/data/ruby-sapphire/locations/slateport-city';
import TRICK_HOUSE from '@/lib/data/ruby-sapphire/locations/trick-house';
import VERDANTURF_TOWN from '@/lib/data/ruby-sapphire/locations/verdanturf-town';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const BRAWLY: Split = {
    name: 'Brawly',
    locations: [
        RUSTBORO_CITY,
        ROUTE_116,
        RUSTURF_TUNNEL,
        LocationHelpers.withSubareaOrder(ROUTE_104, ['North', 'South']),
        PETALBURG_WOODS,
        DEWFORD_TOWN,
        ROUTE_107,
        ROUTE_106,
        GRANITE_CAVE,
        ROUTE_109,
        SLATEPORT_CITY,
        ROUTE_110,
        TRICK_HOUSE,
        LocationHelpers.withSubareaOrder(ROUTE_103, ['East', 'West']),
        MAUVILLE_CITY,
        ROUTE_118,
        ROUTE_111,
        ROUTE_117,
        VERDANTURF_TOWN,
        RUSTURF_TUNNEL,
        DEWFORD_GYM,
    ],
    // FLAG_BADGE02_GET = SYSTEM_FLAGS (0x800) + 0x08, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2056 },
};

export default BRAWLY;
