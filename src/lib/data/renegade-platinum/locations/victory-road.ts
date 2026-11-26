import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
    victoryRoadBack1,
    victoryRoadBack2,
    victoryRoadBack3,
} from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'victory-road-1f',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'giga-impact',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Cynthia' }],
            battles: [
                {
                    battleKey: 'psychic-bryce',
                    x: 12.56,
                    y: 85.08,
                },
                {
                    battleKey: 'bird-keeper-hana',
                    x: 58.71,
                    y: 71.33,
                },
                {
                    battleKey: 'ace-trainer-mariah',
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
            encountersKey: 'victory-road-2f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Cynthia' },
                { method: EncounterMethod.Static, split: 'Cynthia' },
            ],
            battles: [
                {
                    battleKey: 'ace-trainer-omar',
                    x: 7.67,
                    y: 65.16,
                },
                {
                    battleKey: 'ace-trainer-sydney',
                    x: 24.6,
                    y: 90.16,
                },
                {
                    battleKey: 'veteran-clayton',
                    x: 38.15,
                    y: 70.16,
                },
                {
                    battleKey: 'double-team-al-and-kay',
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 95.71,
                    y: 46.41,
                },
            ],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'victory-road-b1f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Cynthia' },
                { method: EncounterMethod.Surf, split: 'Cynthia' },
                { method: EncounterMethod.OldRod, split: 'Cynthia' },
                { method: EncounterMethod.GoodRod, split: 'Cynthia' },
                { method: EncounterMethod.SuperRod, split: 'Cynthia' },
            ],
            battles: [
                {
                    battleKey: 'psychic-valencia',
                    x: 55.21,
                    y: 57.27,
                },
                {
                    battleKey: 'double-team-jo-and-pat',
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 83.41,
                    y: 86.86,
                },
                {
                    battleKey: 'ace-trainer-henry',
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
        {
            name: 'Back 1',
            map: victoryRoadBack1,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'victory-road-back',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Cynthia' },
                { method: EncounterMethod.Surf, split: 'Cynthia' },
                { method: EncounterMethod.OldRod, split: 'Cynthia' },
                { method: EncounterMethod.GoodRod, split: 'Cynthia' },
                { method: EncounterMethod.SuperRod, split: 'Cynthia' },
            ],
        },
        {
            name: 'Back 2',
            map: victoryRoadBack2,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'victory-road-back',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Cynthia' },
                { method: EncounterMethod.Surf, split: 'Cynthia' },
                { method: EncounterMethod.OldRod, split: 'Cynthia' },
                { method: EncounterMethod.GoodRod, split: 'Cynthia' },
                { method: EncounterMethod.SuperRod, split: 'Cynthia' },
            ],
            tagPartner: [{ battleKey: 'pkmn-trainer-marley-tag' }],
            battles: [
                {
                    battleKey: 'pkmn-trainer-marley',
                    x: 10.66,
                    y: 91.7,
                },
                {
                    battleKey: 'ace-trainer-micah',
                    x: 15.41,
                    y: 74.08,
                },
                {
                    battleKey: 'ace-trainer-brandi',
                    x: 9.08,
                    y: 74.08,
                },
                {
                    battleKey: 'psychic-landon',
                    x: 9.08,
                    y: 26.03,
                },
                {
                    battleKey: 'psychic-desiree',
                    x: 10.66,
                    y: 19.63,
                },
                {
                    battleKey: 'veteran-terrel',
                    x: 24.9,
                    y: 14.82,
                },
                {
                    battleKey: 'black-belt-eddie',
                    x: 24.9,
                    y: 18.03,
                },
                {
                    battleKey: 'dragon-tamer-joe',
                    x: 43.89,
                    y: 14.82,
                },
                {
                    battleKey: 'bird-keeper-autumn',
                    x: 43.89,
                    y: 18.03,
                },
                {
                    battleKey: 'psychic-kendra',
                    x: 56.55,
                    y: 26.03,
                },
                {
                    battleKey: 'psychic-deandre',
                    x: 59.72,
                    y: 26.03,
                },
                {
                    battleKey: 'black-belt-willie',
                    x: 72.38,
                    y: 38.85,
                },
                {
                    battleKey: 'veteran-brenden',
                    x: 72.38,
                    y: 35.64,
                },
                {
                    battleKey: 'ace-trainer-arthur',
                    x: 69.21,
                    y: 90.1,
                },
                {
                    battleKey: 'ace-trainer-clarice',
                    x: 66.05,
                    y: 90.1,
                },
            ],
        },
        {
            name: 'Back 3',
            map: victoryRoadBack3,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'victory-road-back',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Cynthia' },
                { method: EncounterMethod.Surf, split: 'Cynthia' },
                { method: EncounterMethod.OldRod, split: 'Cynthia' },
                { method: EncounterMethod.GoodRod, split: 'Cynthia' },
                { method: EncounterMethod.SuperRod, split: 'Cynthia' },
            ],
        },
    ],
};

export default VICTORY_ROAD;
