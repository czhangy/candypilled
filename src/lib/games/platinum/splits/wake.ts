import GREAT_MARSH from '@/lib/games/platinum/locations/great-marsh';
import PASTORIA_CITY from '@/lib/games/platinum/locations/pastoria-city';
import PASTORIA_GYM from '@/lib/games/platinum/locations/pastoria-gym';
import ROUTE_212 from '@/lib/games/platinum/locations/route-212';
import ROUTE_213 from '@/lib/games/platinum/locations/route-213';
import ROUTE_214 from '@/lib/games/platinum/locations/route-214';
import TROPHY_GARDEN from '@/lib/games/platinum/locations/trophy-garden';
import VALOR_LAKEFRONT from '@/lib/games/platinum/locations/valor-lakefront';
import VEILSTONE_CITY from '@/lib/games/platinum/locations/veilstone-city';
import { Split } from '@/lib/static/types';

const WAKE: Split = {
    name: 'Wake',
    locations: [
        VEILSTONE_CITY,
        ROUTE_214,
        VALOR_LAKEFRONT,
        ROUTE_213,
        PASTORIA_CITY,
        GREAT_MARSH,
        ROUTE_212,
        TROPHY_GARDEN,
        PASTORIA_GYM,
    ],
};

export default WAKE;
