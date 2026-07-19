import CAFE_CABIN from '@/lib/games/platinum/locations/cafe-cabin';
import HEARTHOME_CITY_GATE from '@/lib/games/platinum/locations/hearthome-city-gate';
import LOST_TOWER from '@/lib/games/platinum/locations/lost-tower';
import ROUTE_209 from '@/lib/games/platinum/locations/route-209';
import ROUTE_210 from '@/lib/games/platinum/locations/route-210';
import ROUTE_215 from '@/lib/games/platinum/locations/route-215';
import SOLACEON_RUINS from '@/lib/games/platinum/locations/solaceon-ruins';
import VEILSTONE_CITY from '@/lib/games/platinum/locations/veilstone-city';
import VEILSTONE_GYM from '@/lib/games/platinum/locations/veilstone-gym';
import { Split } from '@/lib/static/types';

const MAYLENE: Split = {
    name: 'Maylene',
    locations: [
        HEARTHOME_CITY_GATE,
        ROUTE_209,
        SOLACEON_RUINS,
        LOST_TOWER,
        ROUTE_210,
        CAFE_CABIN,
        ROUTE_215,
        VEILSTONE_CITY,
        VEILSTONE_GYM,
    ],
};

export default MAYLENE;
