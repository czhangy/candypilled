import POKEMON_LEAGUE from '@/lib/data/renegade-platinum/locations/pokemon-league';
import ROUTE_223 from '@/lib/data/renegade-platinum/locations/route-223';
import SUNYSHORE_CITY from '@/lib/data/renegade-platinum/locations/sunyshore-city';
import VICTORY_ROAD from '@/lib/data/renegade-platinum/locations/victory-road';
import { Split } from '@/lib/static/types';

const CYNTHIA: Split = {
    name: 'Cynthia',
    locations: [SUNYSHORE_CITY, ROUTE_223, POKEMON_LEAGUE, VICTORY_ROAD],
    saveCondition: { type: 'gameClear' },
};

export default CYNTHIA;
