import DRAKES_ROOM from '@/lib/data/emerald/locations/drakes-room';
import EVER_GRANDE_CITY from '@/lib/data/emerald/locations/ever-grande-city';
import GLACIAS_ROOM from '@/lib/data/emerald/locations/glacias-room';
import PHOEBES_ROOM from '@/lib/data/emerald/locations/phoebes-room';
import SIDNEYS_ROOM from '@/lib/data/emerald/locations/sidneys-room';
import SOOTOPOLIS_CITY from '@/lib/data/emerald/locations/sootopolis-city';
import VICTORY_ROAD from '@/lib/data/emerald/locations/victory-road';
import WALLACES_ROOM from '@/lib/data/emerald/locations/wallaces-room';
import { Split } from '@/lib/static/types';

const WALLACE: Split = {
    name: 'Wallace',
    locations: [
        SOOTOPOLIS_CITY,
        EVER_GRANDE_CITY,
        VICTORY_ROAD,
        SIDNEYS_ROOM,
        PHOEBES_ROOM,
        GLACIAS_ROOM,
        DRAKES_ROOM,
        WALLACES_ROOM,
    ],
    // Champion split -- Wallace is Emerald's champion (Steven's role in
    // Ruby/Sapphire), so this resolves against the save's main-story-
    // cleared flag rather than a badge bit.
    saveCondition: { type: 'gameClear' },
};

export default WALLACE;
