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
        LocationHelpers.withSubareaOrder(ROUTE_210, ['North', 'South']),
        CELESTIC_TOWN,
        HEARTHOME_GYM,
    ],
    saveCondition: { type: 'badge', bit: 4 },
};

export default FANTINA;
