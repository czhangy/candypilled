import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            encountersKey: 'sinnoh-victory-road-1f',
        },
        {
            name: '2F',
            map: victoryRoad2f,
            encountersKey: 'sinnoh-victory-road-2f',
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            encountersKey: 'sinnoh-victory-road-b1f',
        },
    ],
};

export default VICTORY_ROAD;
