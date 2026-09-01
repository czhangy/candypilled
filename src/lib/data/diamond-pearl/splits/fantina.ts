import CELESTIC_TOWN from '@/lib/data/diamond-pearl/locations/celestic-town';
import HEARTHOME_GYM from '@/lib/data/diamond-pearl/locations/hearthome-gym';
import PASTORIA_CITY from '@/lib/data/diamond-pearl/locations/pastoria-city';
import ROUTE_210 from '@/lib/data/diamond-pearl/locations/route-210';
import ROUTE_211 from '@/lib/data/diamond-pearl/locations/route-211';
import ROUTE_213 from '@/lib/data/diamond-pearl/locations/route-213';
import VALOR_LAKEFRONT from '@/lib/data/diamond-pearl/locations/valor-lakefront';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const FANTINA: Split = {
    name: 'Fantina',
    locations: [
        PASTORIA_CITY,
        ROUTE_213,
        VALOR_LAKEFRONT,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_210, ['North', 'South']),
            ['South']
        ),
        CELESTIC_TOWN,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_211, ['East', 'West']),
            ['West']
        ),
        HEARTHOME_GYM,
    ],
    saveCondition: { type: 'badge', bit: 4 },
};

export default FANTINA;
