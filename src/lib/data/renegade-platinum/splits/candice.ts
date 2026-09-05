import ACUITY_LAKEFRONT from '@/lib/data/renegade-platinum/locations/acuity-lakefront';
import CANALAVE_CITY from '@/lib/data/renegade-platinum/locations/canalave-city';
import LAKE_VALOR from '@/lib/data/renegade-platinum/locations/lake-valor';
import LAKE_VERITY from '@/lib/data/renegade-platinum/locations/lake-verity';
import MT_CORONET from '@/lib/data/renegade-platinum/locations/mt-coronet';
import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import ROUTE_217 from '@/lib/data/renegade-platinum/locations/route-217';
import SNOWPOINT_CITY from '@/lib/data/renegade-platinum/locations/snowpoint-city';
import SNOWPOINT_GYM from '@/lib/data/renegade-platinum/locations/snowpoint-gym';
import SNOWPOINT_TEMPLE from '@/lib/data/renegade-platinum/locations/snowpoint-temple';
import VALOR_CAVERN from '@/lib/data/renegade-platinum/locations/valor-cavern';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const CANDICE: Split = {
    name: 'Candice',
    locations: [
        CANALAVE_CITY,
        LAKE_VALOR,
        LocationHelpers.withSubareaOrder(VALOR_CAVERN, [
            'Pre-Giratina',
            'Post-Giratina',
        ]),
        LocationHelpers.withSubareaOrder(LAKE_VERITY, [
            'Post-Byron',
            'Pre-Byron',
        ]),
        MT_CORONET,
        ROUTE_216,
        ROUTE_217,
        ACUITY_LAKEFRONT,
        SNOWPOINT_CITY,
        SNOWPOINT_TEMPLE,
        SNOWPOINT_GYM,
    ],
    saveCondition: { type: 'badge', bit: 6 },
};

export default CANDICE;
