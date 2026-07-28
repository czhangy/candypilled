import DISTORTION_WORLD from '@/lib/data/platinum/locations/distortion-world';
import GALACTIC_HQ from '@/lib/data/platinum/locations/galactic-hq';
import MT_CORONET from '@/lib/data/platinum/locations/mt-coronet';
import ROUTE_222 from '@/lib/data/platinum/locations/route-222';
import SENDOFF_SPRING from '@/lib/data/platinum/locations/sendoff-spring';
import SPEAR_PILLAR from '@/lib/data/platinum/locations/spear-pillar';
import SUNYSHORE_CITY from '@/lib/data/platinum/locations/sunyshore-city';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const VOLKNER: Split = {
    name: 'Volkner',
    locations: [
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
        ROUTE_222,
        SUNYSHORE_CITY,
    ],
};

export default VOLKNER;
