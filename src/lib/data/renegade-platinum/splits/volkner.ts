import DISTORTION_WORLD from '@/lib/data/renegade-platinum/locations/distortion-world';
import GALACTIC_HQ from '@/lib/data/renegade-platinum/locations/galactic-hq';
import LAKE_ACUITY from '@/lib/data/renegade-platinum/locations/lake-acuity';
import MT_CORONET from '@/lib/data/renegade-platinum/locations/mt-coronet';
import ROUTE_222 from '@/lib/data/renegade-platinum/locations/route-222';
import SENDOFF_SPRING from '@/lib/data/renegade-platinum/locations/sendoff-spring';
import SNOWPOINT_CITY from '@/lib/data/renegade-platinum/locations/snowpoint-city';
import SPEAR_PILLAR from '@/lib/data/renegade-platinum/locations/spear-pillar';
import SUNYSHORE_CITY from '@/lib/data/renegade-platinum/locations/sunyshore-city';
import SUNYSHORE_GYM from '@/lib/data/renegade-platinum/locations/sunyshore-gym';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const VOLKNER: Split = {
    name: 'Volkner',
    locations: [
        SNOWPOINT_CITY,
        LAKE_ACUITY,
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
        ROUTE_222,
        SUNYSHORE_CITY,
        SUNYSHORE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 7 },
};

export default VOLKNER;
