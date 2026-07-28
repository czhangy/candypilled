import CAFE_CABIN from '@/lib/data/platinum/locations/cafe-cabin';
import HEARTHOME_CITY_GATE from '@/lib/data/platinum/locations/hearthome-city-gate';
import LOST_TOWER from '@/lib/data/platinum/locations/lost-tower';
import ROUTE_209 from '@/lib/data/platinum/locations/route-209';
import ROUTE_210 from '@/lib/data/platinum/locations/route-210';
import ROUTE_215 from '@/lib/data/platinum/locations/route-215';
import SOLACEON_RUINS from '@/lib/data/platinum/locations/solaceon-ruins';
import VEILSTONE_CITY from '@/lib/data/platinum/locations/veilstone-city';
import VEILSTONE_GYM from '@/lib/data/platinum/locations/veilstone-gym';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const MAYLENE: Split = {
    name: 'Maylene',
    locations: [
        HEARTHOME_CITY_GATE,
        ROUTE_209,
        SOLACEON_RUINS,
        LOST_TOWER,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_210, ['North']),
        CAFE_CABIN,
        ROUTE_215,
        LocationHelpers.withHiddenBattles(VEILSTONE_CITY),
        VEILSTONE_GYM,
    ],
};

export default MAYLENE;
