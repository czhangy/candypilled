import FALLARBOR_TOWN from '@/lib/data/ruby-sapphire/locations/fallarbor-town';
import FIERY_PATH from '@/lib/data/ruby-sapphire/locations/fiery-path';
import JAGGED_PASS from '@/lib/data/ruby-sapphire/locations/jagged-pass';
import LAVARIDGE_GYM from '@/lib/data/ruby-sapphire/locations/lavaridge-gym';
import LAVARIDGE_TOWN from '@/lib/data/ruby-sapphire/locations/lavaridge-town';
import MAUVILLE_CITY from '@/lib/data/ruby-sapphire/locations/mauville-city';
import METEOR_FALLS from '@/lib/data/ruby-sapphire/locations/meteor-falls';
import MT_CHIMNEY from '@/lib/data/ruby-sapphire/locations/mt-chimney';
import ROUTE_111 from '@/lib/data/ruby-sapphire/locations/route-111';
import ROUTE_112 from '@/lib/data/ruby-sapphire/locations/route-112';
import ROUTE_113 from '@/lib/data/ruby-sapphire/locations/route-113';
import ROUTE_114 from '@/lib/data/ruby-sapphire/locations/route-114';
import ROUTE_115 from '@/lib/data/ruby-sapphire/locations/route-115';
import ROUTE_117 from '@/lib/data/ruby-sapphire/locations/route-117';
import RUSTURF_TUNNEL from '@/lib/data/ruby-sapphire/locations/rusturf-tunnel';
import VERDANTURF_TOWN from '@/lib/data/ruby-sapphire/locations/verdanturf-town';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const FLANNERY: Split = {
    name: 'Flannery',
    locations: [
        MAUVILLE_CITY,
        ROUTE_117,
        VERDANTURF_TOWN,
        RUSTURF_TUNNEL,
        ROUTE_111,
        ROUTE_112,
        FIERY_PATH,
        LocationHelpers.withSubareaOrder(ROUTE_112, ['North', 'South']),
        LocationHelpers.withSubareaOrder(ROUTE_111, [
            'North',
            'South',
            'Desert',
        ]),
        ROUTE_113,
        FALLARBOR_TOWN,
        ROUTE_114,
        METEOR_FALLS,
        ROUTE_115,
        ROUTE_112,
        MT_CHIMNEY,
        JAGGED_PASS,
        LAVARIDGE_TOWN,
        LAVARIDGE_GYM,
    ],
    // FLAG_BADGE04_GET = SYSTEM_FLAGS (0x800) + 0x0A, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2058 },
};

export default FLANNERY;
