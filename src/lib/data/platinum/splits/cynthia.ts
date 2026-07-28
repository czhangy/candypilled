import POKEMON_LEAGUE_LOBBY from '@/lib/data/platinum/locations/pokemon-league-lobby';
import VICTORY_ROAD from '@/lib/data/platinum/locations/victory-road';
import { Split } from '@/lib/static/types';

const CYNTHIA: Split = {
    name: 'Cynthia',
    locations: [VICTORY_ROAD, POKEMON_LEAGUE_LOBBY],
};

export default CYNTHIA;
