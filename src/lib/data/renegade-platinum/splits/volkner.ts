import DISTORTION_WORLD from '@/lib/data/renegade-platinum/locations/distortion-world';
import GALACTIC_HQ from '@/lib/data/renegade-platinum/locations/galactic-hq';
import MT_CORONET from '@/lib/data/renegade-platinum/locations/mt-coronet';
import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import SPEAR_PILLAR from '@/lib/data/renegade-platinum/locations/spear-pillar';
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
    ],
    saveCondition: { type: 'badge', bit: 7 },
};

export default VOLKNER;
