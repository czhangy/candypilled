import POKEMON_LEAGUE from '@/lib/data/renegade-platinum/locations/pokemon-league';
import ROUTE_223 from '@/lib/data/renegade-platinum/locations/route-223';
import ROUTE_224 from '@/lib/data/renegade-platinum/locations/route-224';
import SUNYSHORE_CITY from '@/lib/data/renegade-platinum/locations/sunyshore-city';
import VICTORY_ROAD from '@/lib/data/renegade-platinum/locations/victory-road';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const CYNTHIA: Split = {
    name: 'Cynthia',
    locations: [
        SUNYSHORE_CITY,
        ROUTE_223,
        LocationHelpers.withHiddenBattles(POKEMON_LEAGUE),
        VICTORY_ROAD,
        ROUTE_224,
        LocationHelpers.withSubareaOrder(POKEMON_LEAGUE, ['Lobby', 'Exterior']),
    ],
    saveCondition: { type: 'gameClear' },
};

export default CYNTHIA;
