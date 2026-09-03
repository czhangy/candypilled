import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
    victoryRoadBack1,
    victoryRoadBack2,
    victoryRoadBack3,
} from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            encountersKey: 'victory-road-1f',
            battles: [
                {
                    battleKey: 'psychic-bryce',
                    x: 12.6,
                    y: 85.1,
                },
                {
                    battleKey: 'bird-keeper-hana',
                    x: 58.8,
                    y: 71.3,
                },
                {
                    battleKey: 'ace-trainer-mariah',
                    x: 18.3,
                    y: 51.3,
                },
                {
                    battleKey: 'black-belt-miles',
                    x: 56.6,
                    y: 50,
                },
                {
                    battleKey: 'veteran-edgar',
                    x: 51.1,
                    y: 30,
                },
                {
                    battleKey: 'dragon-tamer-clinton',
                    x: 76,
                    y: 37.5,
                },
            ],
        },
        {
            name: '2F',
            map: victoryRoad2f,
            encountersKey: 'victory-road-2f',
            battles: [
                {
                    battleKey: 'ace-trainer-omar',
                    x: 7.6,
                    y: 65.3,
                },
                {
                    battleKey: 'ace-trainer-sydney',
                    x: 24.7,
                    y: 90,
                },
                {
                    battleKey: 'veteran-clayton',
                    x: 38.1,
                    y: 70.3,
                },
                {
                    battleKey: 'double-team-al-and-kay',
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 95.8,
                    y: 46.4,
                },
            ],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            encountersKey: 'victory-road-b1f',
            battles: [
                {
                    battleKey: 'psychic-valencia',
                    x: 55.1,
                    y: 57.4,
                },
                {
                    battleKey: 'ace-trainer-henry',
                    x: 80.8,
                    y: 26.7,
                },
                {
                    battleKey: 'double-team-jo-and-pat',
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 83.3,
                    y: 86.8,
                },
                {
                    battleKey: 'dragon-tamer-ondrej',
                    x: 24.4,
                    y: 10.4,
                },
            ],
        },
        {
            name: 'Back 1',
            map: victoryRoadBack1,
            encountersKey: 'victory-road-back',
        },
        {
            name: 'Back 2',
            map: victoryRoadBack2,
            encountersKey: 'victory-road-back',
            tagPartner: [{ battleKey: 'pkmn-trainer-marley-tag' }],
            battles: [
                {
                    battleKey: 'pkmn-trainer-marley',
                    x: 10.5,
                    y: 91.7,
                },
                {
                    battleKey: 'ace-trainer-micah',
                    x: 15.4,
                    y: 74.1,
                },
                {
                    battleKey: 'ace-trainer-brandi',
                    x: 9,
                    y: 74.1,
                },
                {
                    battleKey: 'psychic-landon',
                    x: 9,
                    y: 26.1,
                },
                {
                    battleKey: 'psychic-desiree',
                    x: 10.6,
                    y: 19.7,
                },
                {
                    battleKey: 'veteran-terrel',
                    x: 24.8,
                    y: 14.9,
                },
                {
                    battleKey: 'black-belt-eddie',
                    x: 24.8,
                    y: 18,
                },
                {
                    battleKey: 'dragon-tamer-joe',
                    x: 43.7,
                    y: 14.7,
                },
                {
                    battleKey: 'bird-keeper-autumn',
                    x: 43.7,
                    y: 18,
                },
                {
                    battleKey: 'psychic-kendra',
                    x: 56.5,
                    y: 26.1,
                },
                {
                    battleKey: 'psychic-deandre',
                    x: 59.6,
                    y: 26.1,
                },
                {
                    battleKey: 'black-belt-willie',
                    x: 72.3,
                    y: 38.8,
                },
                {
                    battleKey: 'veteran-brenden',
                    x: 72.3,
                    y: 35.6,
                },
                {
                    battleKey: 'ace-trainer-arthur',
                    x: 69.1,
                    y: 90,
                },
                {
                    battleKey: 'ace-trainer-clarice',
                    x: 66,
                    y: 90,
                },
            ],
        },
        {
            name: 'Back 3',
            map: victoryRoadBack3,
            encountersKey: 'victory-road-back',
        },
    ],
};

export default VICTORY_ROAD;
