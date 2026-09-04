import AARONS_ROOM from '@/lib/data/diamond-pearl/locations/aarons-room';
import BERTHAS_ROOM from '@/lib/data/diamond-pearl/locations/berthas-room';
import CYNTHIAS_ROOM from '@/lib/data/diamond-pearl/locations/cynthias-room';
import FLINTS_ROOM from '@/lib/data/diamond-pearl/locations/flints-room';
import LUCIANS_ROOM from '@/lib/data/diamond-pearl/locations/lucians-room';
import POKEMON_LEAGUE from '@/lib/data/diamond-pearl/locations/pokemon-league';
import ROUTE_223 from '@/lib/data/diamond-pearl/locations/route-223';
import SUNYSHORE_CITY from '@/lib/data/diamond-pearl/locations/sunyshore-city';
import VICTORY_ROAD from '@/lib/data/diamond-pearl/locations/victory-road';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const CYNTHIA: Split = {
    name: 'Cynthia',
    locations: [
        SUNYSHORE_CITY,
        ROUTE_223,
        POKEMON_LEAGUE,
        VICTORY_ROAD,
        LocationHelpers.withSubareaOrder(POKEMON_LEAGUE, ['Lobby', 'Exterior']),
        AARONS_ROOM,
        BERTHAS_ROOM,
        FLINTS_ROOM,
        LUCIANS_ROOM,
        CYNTHIAS_ROOM,
    ],
    saveCondition: { type: 'gameClear' },
};

export default CYNTHIA;
