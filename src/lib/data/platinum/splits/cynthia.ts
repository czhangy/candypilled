import AARONS_ROOM from '@/lib/data/platinum/locations/aarons-room';
import BERTHAS_ROOM from '@/lib/data/platinum/locations/berthas-room';
import CYNTHIAS_ROOM from '@/lib/data/platinum/locations/cynthias-room';
import FLINTS_ROOM from '@/lib/data/platinum/locations/flints-room';
import LUCIANS_ROOM from '@/lib/data/platinum/locations/lucians-room';
import POKEMON_LEAGUE_LOBBY from '@/lib/data/platinum/locations/pokemon-league-lobby';
import VICTORY_ROAD from '@/lib/data/platinum/locations/victory-road';
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
