import PASTORIA_CITY from '@/lib/data/platinum/locations/pastoria-city';
import PASTORIA_GYM from '@/lib/data/platinum/locations/pastoria-gym';
import ROUTE_213 from '@/lib/data/platinum/locations/route-213';
import ROUTE_214 from '@/lib/data/platinum/locations/route-214';
import VALOR_LAKEFRONT from '@/lib/data/platinum/locations/valor-lakefront';
import VEILSTONE_CITY from '@/lib/data/platinum/locations/veilstone-city';
import { Split } from '@/lib/static/types';

const WAKE: Split = {
    name: 'Wake',
    locations: [
        VEILSTONE_CITY,
        ROUTE_214,
        VALOR_LAKEFRONT,
        ROUTE_213,
        PASTORIA_CITY,
        PASTORIA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 3 },
};

export default WAKE;
