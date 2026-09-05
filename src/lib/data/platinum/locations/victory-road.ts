import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
} from '@/lib/data/platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
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
                    x: 12.5,
                    y: 85.05,
                },
                {
                    battleKey: 'bird-keeper-hana',
                    x: 58.77,
                    y: 71.3,
                },
                {
                    battleKey: 'ace-trainer-f-mariah',
                    x: 18.27,
                    y: 51.29,
                },
                {
                    battleKey: 'black-belt-miles',
                    x: 56.73,
                    y: 50.09,
                },
                {
                    battleKey: 'veteran-edgar',
                    x: 51.08,
                    y: 30.08,
                },
                {
                    battleKey: 'dragon-tamer-clinton',
                    x: 75.96,
                    y: 37.58,
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
                    x: 7.62,
                    y: 65.13,
                },
                {
                    battleKey: 'ace-trainer-f-sydney',
                    x: 24.66,
                    y: 89.98,
                },
                {
                    battleKey: 'veteran-clayton',
                    x: 37.99,
                    y: 70.13,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'double-team-al-and-kay',
                    x: 95.77,
                    y: 46.39,
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
                    x: 55.13,
                    y: 57.26,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'double-team-jo-and-pat',
                    x: 83.49,
                    y: 86.95,
                },
                {
                    battleKey: 'ace-trainer-m-henry',
                    x: 80.93,
                    y: 26.64,
                },
                {
                    battleKey: 'dragon-tamer-ondrej',
                    x: 24.36,
                    y: 10.32,
                },
            ],
        },
    ],
};

export default VICTORY_ROAD;
