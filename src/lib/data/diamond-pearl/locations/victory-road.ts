import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
} from '@/lib/data/diamond-pearl/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-victory-road-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Cynthia' }],
            battles: [
                {
                    battleKey: 'psychic-m-bryce',
                    x: 13.18,
                    y: 90.7,
                },
                {
                    battleKey: 'bird-keeper-hana',
                    x: 58.46,
                    y: 74.9,
                },
                {
                    battleKey: 'ace-trainer-f-mariah',
                    x: 18.84,
                    y: 55.1,
                },
                {
                    battleKey: 'black-belt-miles',
                    x: 56.57,
                    y: 55.9,
                },
                {
                    battleKey: 'veteran-edgar',
                    x: 50.91,
                    y: 36.1,
                },
                {
                    battleKey: 'dragon-tamer-clinton',
                    x: 75.44,
                    y: 39.5,
                },
            ],
        },
        {
            name: '2F',
            map: victoryRoad2f,
            mapAnchor: MapAnchor.TopLeft,
            encountersKey: 'sinnoh-victory-road-2f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Cynthia' }],
            battles: [
                {
                    battleKey: 'ace-trainer-m-omar',
                    x: 8.31,
                    y: 68.31,
                },
                {
                    battleKey: 'ace-trainer-f-sydney',
                    x: 24.97,
                    y: 92.63,
                },
                {
                    battleKey: 'veteran-clayton',
                    x: 38.31,
                    y: 73.17,
                },
                {
                    customHeight: 40,
                    battleKey: 'double-team-al-and-kay',
                    x: 94.97,
                    y: 50.07,
                },
            ],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-victory-road-b1f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Cynthia' },
                { method: EncounterMethod.Surf, split: 'Cynthia' },
                { method: EncounterMethod.OldRod, split: 'Cynthia' },
                { method: EncounterMethod.GoodRod, split: 'Cynthia' },
            ],
            battles: [
                {
                    battleKey: 'psychic-f-valencia',
                    x: 54.96,
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
                    x: 79.96,
                    y: 41.3,
                },
                {
                    battleKey: 'dragon-tamer-ondrej',
                    x: 24.96,
                    y: 13.6,
                },
            ],
        },
    ],
};

export default VICTORY_ROAD;
