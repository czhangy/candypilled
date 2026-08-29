import LAKE_VALOR from '@/lib/data/renegade-platinum/locations/lake-valor';
import LAKE_VERITY from '@/lib/data/renegade-platinum/locations/lake-verity';
import ROUTE_217 from '@/lib/data/renegade-platinum/locations/route-217';
import SNOWPOINT_CITY from '@/lib/data/renegade-platinum/locations/snowpoint-city';
import VALOR_CAVERN from '@/lib/data/renegade-platinum/locations/valor-cavern';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const CANDICE: Split = {
    name: 'Candice',
    locations: [
        LAKE_VALOR,
        VALOR_CAVERN,
        LocationHelpers.withSubareaOrder(LAKE_VERITY, [
            'Post-Galactic',
            'Pre-Galactic',
        ]),
        ROUTE_217,
        SNOWPOINT_CITY,
    ],
    saveCondition: { type: 'badge', bit: 6 },
};

export default CANDICE;
