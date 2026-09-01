import CAFE_CABIN from '@/lib/data/renegade-platinum/locations/cafe-cabin';
import HEARTHOME_CITY from '@/lib/data/renegade-platinum/locations/hearthome-city';
import POKEMON_MANSION from '@/lib/data/renegade-platinum/locations/pokemon-mansion';
import ROUTE_209 from '@/lib/data/renegade-platinum/locations/route-209';
import ROUTE_210 from '@/lib/data/renegade-platinum/locations/route-210';
import ROUTE_212 from '@/lib/data/renegade-platinum/locations/route-212';
import ROUTE_215 from '@/lib/data/renegade-platinum/locations/route-215';
import SOLACEON_RUINS from '@/lib/data/renegade-platinum/locations/solaceon-ruins';
import TROPHY_GARDEN from '@/lib/data/renegade-platinum/locations/trophy-garden';
import VEILSTONE_CITY from '@/lib/data/renegade-platinum/locations/veilstone-city';
import VEILSTONE_GYM from '@/lib/data/renegade-platinum/locations/veilstone-gym';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const MAYLENE: Split = {
    name: 'Maylene',
    locations: [
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(HEARTHOME_CITY, [
                'East Gate',
                'West Gate',
            ]),
            ['West Gate']
        ),
        LocationHelpers.withHiddenSubareaBattles(ROUTE_212, ['South']),
        POKEMON_MANSION,
        TROPHY_GARDEN,
        ROUTE_209,
        SOLACEON_RUINS,
        ROUTE_210,
        CAFE_CABIN,
        ROUTE_215,
        LocationHelpers.withHiddenSubareaBattles(VEILSTONE_CITY, ['City']),
        VEILSTONE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 2 },
};

export default MAYLENE;
