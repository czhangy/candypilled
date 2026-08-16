import GREAT_MARSH from '@/lib/data/platinum/locations/great-marsh';
import PASTORIA_CITY from '@/lib/data/platinum/locations/pastoria-city';
import PASTORIA_GYM from '@/lib/data/platinum/locations/pastoria-gym';
import ROUTE_212 from '@/lib/data/platinum/locations/route-212';
import ROUTE_213 from '@/lib/data/platinum/locations/route-213';
import ROUTE_214 from '@/lib/data/platinum/locations/route-214';
import RUIN_MANIAC_CAVE from '@/lib/data/platinum/locations/ruin-maniac-cave';
import TROPHY_GARDEN from '@/lib/data/platinum/locations/trophy-garden';
import VALOR_LAKEFRONT from '@/lib/data/platinum/locations/valor-lakefront';
import VEILSTONE_CITY from '@/lib/data/platinum/locations/veilstone-city';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const WAKE: Split = {
    name: 'Wake',
    locations: [
        VEILSTONE_CITY,
        ROUTE_214,
        RUIN_MANIAC_CAVE,
        LocationHelpers.withHiddenBattles(VALOR_LAKEFRONT),
        ROUTE_213,
        PASTORIA_CITY,
        GREAT_MARSH,
        ROUTE_212,
        TROPHY_GARDEN,
        PASTORIA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 3 },
};

export default WAKE;
