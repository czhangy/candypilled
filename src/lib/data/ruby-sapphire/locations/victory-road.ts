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
            battles: [
                { battleKey: 'cooltrainer-m-albert', x: 59.65, y: 76.2 },
                { battleKey: 'cooltrainer-f-hope', x: 13.99, y: 33.7 },
                { battleKey: 'cooltrainer-m-edgar', x: 72.69, y: 49.55 },
                {
                    battleKey: 'pkmn-trainer-wally-victory-road',
                    x: 68.48,
                    y: 27.3,
                },
            ],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-victory-road-b1f',
            battles: [
                { battleKey: 'cooltrainer-f-shannon', x: 57.47, y: 52.34 },
                { battleKey: 'cooltrainer-m-samuel', x: 81.25, y: 39.43 },
                { battleKey: 'cooltrainer-f-michelle', x: 11.96, y: 68.47 },
            ],
        },
        {
            name: 'B2F',
            map: victoryRoadB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-victory-road-b2f',
            battles: [
                { battleKey: 'cooltrainer-f-julie', x: 77.17, y: 71.49 },
                { battleKey: 'cooltrainer-m-owen', x: 94.43, y: 45.89 },
                { battleKey: 'cooltrainer-f-caroline', x: 5.3, y: 55.76 },
                { battleKey: 'cooltrainer-m-vito', x: 33.56, y: 20.28 },
            ],
        },
    ],
};

export default VICTORY_ROAD;
