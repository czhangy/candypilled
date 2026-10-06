import {
    victoryRoad1f,
    victoryRoadB1f,
    victoryRoadB2f,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    battleKey: 'pkmn-trainer-wally-victory-road',
                    x: 6.52,
                    y: 54.1,
                },
                {
                    battleKey: 'cooltrainer-m-albert',
                    x: 59.78,
                    y: 76.32,
                },
                {
                    battleKey: 'cooltrainer-f-hope',
                    x: 14.13,
                    y: 34.1,
                },
                {
                    battleKey: 'cooltrainer-m-edgar',
                    x: 72.83,
                    y: 49.65,
                },
                {
                    battleKey: 'cooltrainer-f-katelynn',
                    x: 64.13,
                    y: 38.54,
                },
                {
                    battleKey: 'cooltrainer-m-quincy',
                    x: 70.65,
                    y: 38.54,
                },
            ],
            encountersKey: 'hoenn-victory-road-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Wallace' }],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'cooltrainer-f-shannon',
                    x: 57.61,
                    y: 52.72,
                },
                {
                    battleKey: 'cooltrainer-m-samuel',
                    x: 81.52,
                    y: 39.82,
                },
                {
                    battleKey: 'cooltrainer-f-michelle',
                    x: 11.96,
                    y: 68.85,
                },
                {
                    battleKey: 'cooltrainer-m-mitchell',
                    x: 31.52,
                    y: 52.72,
                },
                {
                    battleKey: 'cooltrainer-f-halle',
                    x: 31.52,
                    y: 65.62,
                },
            ],
            encountersKey: 'hoenn-victory-road-b1f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Wallace' },
                { method: EncounterMethod.RockSmash, split: 'Wallace' },
            ],
        },
        {
            name: 'B2F',
            map: victoryRoadB2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'cooltrainer-f-julie',
                    x: 77.17,
                    y: 72.08,
                },
                {
                    battleKey: 'cooltrainer-m-owen',
                    x: 94.57,
                    y: 46.27,
                },
                {
                    battleKey: 'cooltrainer-f-dianne',
                    x: 55.43,
                    y: 59.17,
                },
                {
                    battleKey: 'cooltrainer-m-felix',
                    x: 55.43,
                    y: 68.85,
                },
                {
                    battleKey: 'cooltrainer-f-caroline',
                    x: 5.43,
                    y: 55.95,
                },
                {
                    battleKey: 'cooltrainer-m-vito',
                    x: 33.7,
                    y: 20.46,
                },
            ],
            encountersKey: 'hoenn-victory-road-b2f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Wallace' },
                { method: EncounterMethod.OldRod, split: 'Wallace' },
                { method: EncounterMethod.GoodRod, split: 'Wallace' },
                { method: EncounterMethod.SuperRod, split: 'Wallace' },
                { method: EncounterMethod.Surf, split: 'Wallace' },
            ],
        },
    ],
};

export default VICTORY_ROAD;
