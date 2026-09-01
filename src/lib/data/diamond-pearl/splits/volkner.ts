import ACUITY_CAVERN from '@/lib/data/diamond-pearl/locations/acuity-cavern';
import GALACTIC_HQ from '@/lib/data/diamond-pearl/locations/galactic-hq';
import LAKE_ACUITY from '@/lib/data/diamond-pearl/locations/lake-acuity';
import MT_CORONET from '@/lib/data/diamond-pearl/locations/mt-coronet';
import POKEMON_LEAGUE from '@/lib/data/diamond-pearl/locations/pokemon-league';
import ROUTE_216 from '@/lib/data/diamond-pearl/locations/route-216';
import ROUTE_222 from '@/lib/data/diamond-pearl/locations/route-222';
import ROUTE_223 from '@/lib/data/diamond-pearl/locations/route-223';
import SPEAR_PILLAR from '@/lib/data/diamond-pearl/locations/spear-pillar';
import SUNYSHORE_CITY from '@/lib/data/diamond-pearl/locations/sunyshore-city';
import SUNYSHORE_GYM from '@/lib/data/diamond-pearl/locations/sunyshore-gym';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const VOLKNER: Split = {
    name: 'Volkner',
    locations: [
        ROUTE_216,
        LAKE_ACUITY,
        GALACTIC_HQ,
        LocationHelpers.withSubareaOrder(MT_CORONET, [
            '1F (207)',
            '2F',
            '3F',
            'Exterior',
            '4F',
            'Tunnel',
            '5F',
            '6F',
            '1F (211)',
            '1F (216)',
        ]),
        SPEAR_PILLAR,
        ACUITY_CAVERN,
        ROUTE_222,
        SUNYSHORE_CITY,
        ROUTE_223,
        LocationHelpers.withHiddenBattles(POKEMON_LEAGUE),
        SUNYSHORE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 7 },
};

export default VOLKNER;
