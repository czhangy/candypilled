import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
} from '@/lib/data/diamond-pearl/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            encountersKey: 'sinnoh-victory-road-1f',
            battles: [
                {
                    battleKey: 'psychic-m-bryce',
                    x: 13.3,
                    y: 90.7,
                },
                {
                    battleKey: 'bird-keeper-hana',
                    x: 58.7,
                    y: 74.9,
                },
                {
                    battleKey: 'ace-trainer-f-mariah',
                    x: 18.9,
                    y: 55.1,
                },
                {
                    battleKey: 'black-belt-miles',
                    x: 56.5,
                    y: 55.9,
                },
                {
                    battleKey: 'veteran-edgar',
                    x: 51.1,
                    y: 36.1,
                },
                {
                    battleKey: 'dragon-tamer-clinton',
                    x: 75.5,
                    y: 39.5,
                },
            ],
        },
        {
            name: '2F',
            map: victoryRoad2f,
            encountersKey: 'sinnoh-victory-road-2f',
            battles: [
                {
                    battleKey: 'ace-trainer-m-omar',
                    x: 8.5,
                    y: 68.1,
                },
                {
                    battleKey: 'ace-trainer-f-sydney',
                    x: 25.2,
                    y: 92.7,
                },
                {
                    battleKey: 'veteran-clayton',
                    x: 38.4,
                    y: 73.3,
                },
                {
                    customHeight: 40,
                    battleKey: 'double-team-al-and-kay',
                    x: 95,
                    y: 50,
                },
            ],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            encountersKey: 'sinnoh-victory-road-b1f',
            battles: [
                {
                    battleKey: 'psychic-f-valencia',
                    x: 55.2,
                    y: 66.7,
                },
                {
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    battleKey: 'double-team-jo-and-pat',
                    x: 74.9,
                    y: 88.1,
                },
                {
                    battleKey: 'ace-trainer-m-henry',
                    x: 80.1,
                    y: 41.3,
                },
                {
                    battleKey: 'dragon-tamer-ondrej',
                    x: 25.1,
                    y: 13.6,
                },
            ],
        },
    ],
};

export default VICTORY_ROAD;
