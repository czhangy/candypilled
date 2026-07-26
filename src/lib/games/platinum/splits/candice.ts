import ACUITY_LAKEFRONT from '@/lib/games/platinum/locations/acuity-lakefront';
import LAKE_VALOR from '@/lib/games/platinum/locations/lake-valor';
import LAKE_VERITY from '@/lib/games/platinum/locations/lake-verity';
import MT_CORONET from '@/lib/games/platinum/locations/mt-coronet';
import ROUTE_216 from '@/lib/games/platinum/locations/route-216';
import ROUTE_217 from '@/lib/games/platinum/locations/route-217';
import SNOWPOINT_GYM from '@/lib/games/platinum/locations/snowpoint-gym';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const CANDICE: Split = {
    name: 'Candice',
    locations: [
        LAKE_VALOR,
        LAKE_VERITY,
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
