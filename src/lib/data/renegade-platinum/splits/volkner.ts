import ACUITY_CAVERN from '@/lib/data/renegade-platinum/locations/acuity-cavern';
import DISTORTION_WORLD from '@/lib/data/renegade-platinum/locations/distortion-world';
import GALACTIC_HQ from '@/lib/data/renegade-platinum/locations/galactic-hq';
import MT_CORONET from '@/lib/data/renegade-platinum/locations/mt-coronet';
import POKEMON_LEAGUE from '@/lib/data/renegade-platinum/locations/pokemon-league';
import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import ROUTE_222 from '@/lib/data/renegade-platinum/locations/route-222';
import ROUTE_223 from '@/lib/data/renegade-platinum/locations/route-223';
import SENDOFF_SPRING from '@/lib/data/renegade-platinum/locations/sendoff-spring';
import SPEAR_PILLAR from '@/lib/data/renegade-platinum/locations/spear-pillar';
import SUNYSHORE_CITY from '@/lib/data/renegade-platinum/locations/sunyshore-city';
import SUNYSHORE_GYM from '@/lib/data/renegade-platinum/locations/sunyshore-gym';
import VALOR_CAVERN from '@/lib/data/renegade-platinum/locations/valor-cavern';
import VERITY_CAVERN from '@/lib/data/renegade-platinum/locations/verity-cavern';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const VOLKNER: Split = {
    name: 'Volkner',
    locations: [
        ROUTE_216,
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
        LocationHelpers.withHiddenBattles(SUNYSHORE_CITY),
        ROUTE_223,
        POKEMON_LEAGUE,
        SUNYSHORE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 7 },
};

export default VOLKNER;
