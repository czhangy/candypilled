import AARONS_ROOM from '@/lib/data/platinum/locations/aarons-room';
import BERTHAS_ROOM from '@/lib/data/platinum/locations/berthas-room';
import CYNTHIAS_ROOM from '@/lib/data/platinum/locations/cynthias-room';
import FLINTS_ROOM from '@/lib/data/platinum/locations/flints-room';
import LUCIANS_ROOM from '@/lib/data/platinum/locations/lucians-room';
import POKEMON_LEAGUE from '@/lib/data/platinum/locations/pokemon-league';
import VICTORY_ROAD from '@/lib/data/platinum/locations/victory-road';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const CYNTHIA: Split = {
    name: 'Cynthia',
    locations: [
        LocationHelpers.withHiddenBattles(POKEMON_LEAGUE),
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
