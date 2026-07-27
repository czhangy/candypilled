import DISTORTION_WORLD from '@/lib/data/platinum/locations/distortion-world';
import GALACTIC_HQ from '@/lib/data/platinum/locations/galactic-hq';
import MT_CORONET from '@/lib/data/platinum/locations/mt-coronet';
import SPEAR_PILLAR from '@/lib/data/platinum/locations/spear-pillar';
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
    ],
};

export default VOLKNER;
