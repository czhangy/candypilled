import {
    victoryRoad1f,
    victoryRoadB1f,
    victoryRoadB2f,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-victory-road-1f',
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-victory-road-b1f',
        },
        {
            name: 'B2F',
            map: victoryRoadB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-victory-road-b2f',
        },
    ],
};

export default VICTORY_ROAD;
