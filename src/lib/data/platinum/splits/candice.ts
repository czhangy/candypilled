import ACUITY_LAKEFRONT from '@/lib/data/platinum/locations/acuity-lakefront';
import LAKE_VALOR from '@/lib/data/platinum/locations/lake-valor';
import LAKE_VERITY from '@/lib/data/platinum/locations/lake-verity';
import MT_CORONET from '@/lib/data/platinum/locations/mt-coronet';
import ROUTE_216 from '@/lib/data/platinum/locations/route-216';
import ROUTE_217 from '@/lib/data/platinum/locations/route-217';
import SNOWPOINT_GYM from '@/lib/data/platinum/locations/snowpoint-gym';
import VALOR_CAVERN from '@/lib/data/platinum/locations/valor-cavern';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const CANDICE: Split = {
    name: 'Candice',
    locations: [
        LAKE_VALOR,
        VALOR_CAVERN,
        LocationHelpers.withSubareaOrder(LAKE_VERITY, [
            'Post-Byron',
            'Pre-Byron',
        ]),
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(MT_CORONET, [
                '1F (211)',
                'B1F',
                '1F (216)',
                '1F (207)',
                '2F',
                '3F',
                'Exterior',
                '4F',
                'Tunnel',
                '5F',
                '6F',
            ]),
            ['3F', 'Tunnel', '4F', '5F', '6F']
        ),
        ROUTE_216,
        ROUTE_217,
        ACUITY_LAKEFRONT,
        SNOWPOINT_GYM,
    ],
};

export default CANDICE;
