import ACUITY_CAVERN from '@/lib/data/platinum/locations/acuity-cavern';
import ACUITY_LAKEFRONT from '@/lib/data/platinum/locations/acuity-lakefront';
import DISTORTION_WORLD from '@/lib/data/platinum/locations/distortion-world';
import GALACTIC_HQ from '@/lib/data/platinum/locations/galactic-hq';
import LAKE_ACUITY from '@/lib/data/platinum/locations/lake-acuity';
import MT_CORONET from '@/lib/data/platinum/locations/mt-coronet';
import POKEMON_LEAGUE from '@/lib/data/platinum/locations/pokemon-league';
import ROUTE_208 from '@/lib/data/platinum/locations/route-208';
import ROUTE_210 from '@/lib/data/platinum/locations/route-210';
import ROUTE_216 from '@/lib/data/platinum/locations/route-216';
import ROUTE_222 from '@/lib/data/platinum/locations/route-222';
import ROUTE_223 from '@/lib/data/platinum/locations/route-223';
import SENDOFF_SPRING from '@/lib/data/platinum/locations/sendoff-spring';
import SNOWPOINT_CITY from '@/lib/data/platinum/locations/snowpoint-city';
import SPEAR_PILLAR from '@/lib/data/platinum/locations/spear-pillar';
import SUNYSHORE_CITY from '@/lib/data/platinum/locations/sunyshore-city';
import SUNYSHORE_GYM from '@/lib/data/platinum/locations/sunyshore-gym';
import VALOR_CAVERN from '@/lib/data/platinum/locations/valor-cavern';
import VEILSTONE_CITY from '@/lib/data/platinum/locations/veilstone-city';
import VERITY_CAVERN from '@/lib/data/platinum/locations/verity-cavern';
import VISTA_LIGHTHOUSE from '@/lib/data/platinum/locations/vista-lighthouse';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const VOLKNER: Split = {
    name: 'Volkner',
    locations: [
        SNOWPOINT_CITY,
        ACUITY_LAKEFRONT,
        LAKE_ACUITY,
        ROUTE_216,
        ROUTE_208,
        LocationHelpers.withSubareaOrder(ROUTE_210, ['North', 'South']),
        VEILSTONE_CITY,
        GALACTIC_HQ,
        LocationHelpers.withSubareaOrder(MT_CORONET, [
            '1F (207)',
            '2F',
            '3F',
            'Exterior',
            '4F',
            'Summit',
            'Tunnel',
            '5F',
            '6F',
            '1F (211)',
            '1F (216)',
        ]),
        SPEAR_PILLAR,
        DISTORTION_WORLD,
        SENDOFF_SPRING,
        VERITY_CAVERN,
        LocationHelpers.withSubareaOrder(VALOR_CAVERN, [
            'Post-Giratina',
            'Pre-Giratina',
        ]),
        ACUITY_CAVERN,
        ROUTE_222,
        SUNYSHORE_CITY,
        VISTA_LIGHTHOUSE,
        ROUTE_223,
        POKEMON_LEAGUE,
        SUNYSHORE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 7 },
};

export default VOLKNER;
