import CELESTIC_RUINS from '@/lib/data/diamond-pearl/locations/celestic-ruins';
import CELESTIC_TOWN from '@/lib/data/diamond-pearl/locations/celestic-town';
import HEARTHOME_GYM from '@/lib/data/diamond-pearl/locations/hearthome-gym';
import PASTORIA_CITY from '@/lib/data/diamond-pearl/locations/pastoria-city';
import ROUTE_210 from '@/lib/data/diamond-pearl/locations/route-210';
import VALOR_LAKEFRONT from '@/lib/data/diamond-pearl/locations/valor-lakefront';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const FANTINA: Split = {
    name: 'Fantina',
    locations: [
        PASTORIA_CITY,
        VALOR_LAKEFRONT,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_210, ['North', 'South']),
            ['South']
        ),
        CELESTIC_TOWN,
        CELESTIC_RUINS,
        HEARTHOME_GYM,
    ],
};

export default FANTINA;
