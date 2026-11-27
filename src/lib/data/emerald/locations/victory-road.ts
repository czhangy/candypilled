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
                    x: 7.61,
                    y: 54.1,
                },
                {
                    battleKey: 'cooltrainer-f-hope',
                    x: 14.13,
                    y: 34.1,
                },
                {
                    battleKey: 'cooltrainer-m-albert',
                    x: 59.78,
                    y: 76.32,
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
            transitions: [
                {
                    height: 16,
                    location: 'Ever Grande City',
                    subarea: 'City',
                    width: 16,
                    x: 85.87,
                    y: 12.22,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B1F',
                    width: 16,
                    x: 20.65,
                    y: 32.22,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B1F',
                    width: 16,
                    x: 46.74,
                    y: 72.22,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B1F',
                    width: 16,
                    x: 92.39,
                    y: 85.56,
                },
                {
                    height: 16,
                    location: 'Ever Grande City',
                    subarea: 'City',
                    width: 16,
                    x: 33.7,
                    y: 90,
                },
            ],
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
                    battleKey: 'cooltrainer-m-mitchell',
                    x: 31.52,
                    y: 52.72,
                },
                {
                    battleKey: 'cooltrainer-f-halle',
                    x: 31.52,
                    y: 65.62,
                },
                {
                    battleKey: 'cooltrainer-f-michelle',
                    x: 11.96,
                    y: 68.85,
                },
            ],
            encountersKey: 'hoenn-victory-road-b1f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Wallace' },
                { method: EncounterMethod.RockSmash, split: 'Wallace' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B2F',
                    width: 16,
                    x: 92.39,
                    y: 8.06,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: '1F',
                    width: 16,
                    x: 18.48,
                    y: 11.29,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B2F',
                    width: 16,
                    x: 38.04,
                    y: 53.23,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: '1F',
                    width: 16,
                    x: 44.57,
                    y: 69.35,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B2F',
                    width: 16,
                    x: 66.3,
                    y: 82.26,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: '1F',
                    width: 16,
                    x: 92.39,
                    y: 82.26,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B2F',
                    width: 16,
                    x: 11.96,
                    y: 85.48,
                },
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
                    battleKey: 'cooltrainer-m-vito',
                    x: 33.7,
                    y: 20.46,
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
            ],
            encountersKey: 'hoenn-victory-road-b2f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Wallace' },
                { method: EncounterMethod.OldRod, split: 'Wallace' },
                { method: EncounterMethod.GoodRod, split: 'Wallace' },
                { method: EncounterMethod.SuperRod, split: 'Wallace' },
                { method: EncounterMethod.Surf, split: 'Wallace' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B1F',
                    width: 16,
                    x: 94.57,
                    y: 8.06,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B1F',
                    width: 16,
                    x: 42.39,
                    y: 40.32,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B1F',
                    width: 16,
                    x: 66.3,
                    y: 82.26,
                },
                {
                    height: 16,
                    location: 'Victory Road',
                    subarea: 'B1F',
                    width: 16,
                    x: 11.96,
                    y: 85.48,
                },
            ],
        },
    ],
};

export default VICTORY_ROAD;
