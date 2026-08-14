import AARONS_ROOM from '@/lib/data/diamond-pearl/locations/aarons-room';
import BERTHAS_ROOM from '@/lib/data/diamond-pearl/locations/berthas-room';
import CYNTHIAS_ROOM from '@/lib/data/diamond-pearl/locations/cynthias-room';
import FLINTS_ROOM from '@/lib/data/diamond-pearl/locations/flints-room';
import LUCIANS_ROOM from '@/lib/data/diamond-pearl/locations/lucians-room';
import POKEMON_LEAGUE_LOBBY from '@/lib/data/diamond-pearl/locations/pokemon-league-lobby';
import VICTORY_ROAD from '@/lib/data/diamond-pearl/locations/victory-road';
import { Split } from '@/lib/static/types';

const CYNTHIA: Split = {
    name: 'Cynthia',
    locations: [
        VICTORY_ROAD,
        POKEMON_LEAGUE_LOBBY,
        AARONS_ROOM,
        BERTHAS_ROOM,
        FLINTS_ROOM,
        LUCIANS_ROOM,
        CYNTHIAS_ROOM,
    ],
};

export default CYNTHIA;
