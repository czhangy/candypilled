import ACUITY_CAVERN from '@/lib/data/platinum/locations/acuity-cavern';
import DISTORTION_WORLD from '@/lib/data/platinum/locations/distortion-world';
import GALACTIC_HQ from '@/lib/data/platinum/locations/galactic-hq';
import LAKE_ACUITY from '@/lib/data/platinum/locations/lake-acuity';
import MT_CORONET from '@/lib/data/platinum/locations/mt-coronet';
import POKEMON_LEAGUE from '@/lib/data/platinum/locations/pokemon-league';
import ROUTE_222 from '@/lib/data/platinum/locations/route-222';
import ROUTE_223 from '@/lib/data/platinum/locations/route-223';
import SENDOFF_SPRING from '@/lib/data/platinum/locations/sendoff-spring';
import SPEAR_PILLAR from '@/lib/data/platinum/locations/spear-pillar';
import SUNYSHORE_CITY from '@/lib/data/platinum/locations/sunyshore-city';
import SUNYSHORE_GYM from '@/lib/data/platinum/locations/sunyshore-gym';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const VOLKNER: Split = {
    name: 'Volkner',
    locations: [
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
        DISTORTION_WORLD,
        SENDOFF_SPRING,
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
