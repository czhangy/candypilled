import GREAT_MARSH from '@/lib/data/renegade-platinum/locations/great-marsh';
import MANIAC_TUNNEL from '@/lib/data/renegade-platinum/locations/maniac-tunnel';
import PASTORIA_CITY from '@/lib/data/renegade-platinum/locations/pastoria-city';
import PASTORIA_GYM from '@/lib/data/renegade-platinum/locations/pastoria-gym';
import ROUTE_212 from '@/lib/data/renegade-platinum/locations/route-212';
import ROUTE_213 from '@/lib/data/renegade-platinum/locations/route-213';
import ROUTE_214 from '@/lib/data/renegade-platinum/locations/route-214';
import SEVEN_STARS_RESTAURANT from '@/lib/data/renegade-platinum/locations/seven-stars-restaurant';
import VALOR_LAKEFRONT from '@/lib/data/renegade-platinum/locations/valor-lakefront';
import VEILSTONE_CITY from '@/lib/data/renegade-platinum/locations/veilstone-city';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const WAKE: Split = {
    name: 'Wake',
    locations: [
        LocationHelpers.withHiddenSubareaBattles(VEILSTONE_CITY, [
            'Pokémon Center',
        ]),
        ROUTE_214,
        MANIAC_TUNNEL,
        LocationHelpers.withHiddenBattles(VALOR_LAKEFRONT),
        SEVEN_STARS_RESTAURANT,
        ROUTE_213,
        LocationHelpers.withHiddenBattles(PASTORIA_CITY),
        GREAT_MARSH,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_212, [
                'South',
                'North (Galactic)',
                'North (Post-Galactic)',
            ]),
            ['North (Galactic)', 'North (Post-Galactic)']
        ),
        PASTORIA_CITY,
        PASTORIA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 3 },
};

export default WAKE;
