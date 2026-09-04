import AARONS_ROOM from '@/lib/data/renegade-platinum/locations/aarons-room';
import BERTHAS_ROOM from '@/lib/data/renegade-platinum/locations/berthas-room';
import CYNTHIAS_ROOM from '@/lib/data/renegade-platinum/locations/cynthias-room';
import FLINTS_ROOM from '@/lib/data/renegade-platinum/locations/flints-room';
import LUCIANS_ROOM from '@/lib/data/renegade-platinum/locations/lucians-room';
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
        POKEMON_LEAGUE,
        VICTORY_ROAD,
        ROUTE_224,
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
