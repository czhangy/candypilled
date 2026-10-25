import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
} from '@/lib/data/platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
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
                    x: 12.56,
                    y: 85.08,
                },
                {
                    battleKey: 'bird-keeper-hana',
                    x: 58.71,
                    y: 71.33,
                },
                {
                    battleKey: 'ace-trainer-f-mariah',
                    x: 18.33,
                    y: 51.33,
                },
                {
                    battleKey: 'black-belt-miles',
                    x: 56.79,
                    y: 50.08,
                },
                {
                    battleKey: 'veteran-edgar',
                    x: 51.02,
                    y: 30.08,
                },
                {
                    battleKey: 'dragon-tamer-clinton',
                    x: 76.02,
                    y: 37.58,
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
                    x: 7.67,
                    y: 65.16,
                },
                {
                    battleKey: 'ace-trainer-f-sydney',
                    x: 24.6,
                    y: 90.16,
                },
                {
                    battleKey: 'veteran-clayton',
                    x: 38.15,
                    y: 70.16,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'double-team-al-and-kay',
                    x: 95.71,
                    y: 46.41,
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
                    x: 55.21,
                    y: 57.27,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'double-team-jo-and-pat',
                    x: 83.41,
                    y: 86.86,
                },
                {
                    battleKey: 'ace-trainer-m-henry',
                    x: 80.85,
                    y: 26.66,
                },
                {
                    battleKey: 'dragon-tamer-ondrej',
                    x: 24.44,
                    y: 10.33,
                },
            ],
        },
    ],
};

export default VICTORY_ROAD;
