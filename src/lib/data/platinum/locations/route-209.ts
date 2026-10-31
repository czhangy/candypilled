import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
    route209,
} from '@/lib/data/platinum/maps';
import {
    GEN_4_TRUE_DOUBLE_HEIGHT,
    GEN_4_TRUE_DOUBLE_WIDTH,
} from '@/lib/static/constants';
import { EncounterMethod, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_209: Location = {
    name: 'Route 209',
    subareas: [
        {
            name: 'Main',
            map: route209,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'sinnoh-route-209',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Maylene' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Maylene' },
                { method: EncounterMethod.HoneyTree, split: 'Maylene' },
                { method: EncounterMethod.Static, split: 'Maylene' },
            ],
            battles: [
                {
                    battleKey: 'pkmn-breeder-m-albert',
                    x: 16.46,
                    y: 82.91,
                },
                {
                    battleKey: 'jogger-richard',
                    x: 44.58,
                    y: 68.85,
                },
                {
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    battleKey: 'twins-emma-and-lil',
                    x: 51.61,
                    y: 75.1,
                },
                {
                    battleKey: 'poke-kid-danielle',
                    x: 63.33,
                    y: 78.22,
                },
                {
                    battleKey: 'jogger-raul',
                    x: 77.39,
                    y: 67.29,
                },
                {
                    battleKey: 'pkmn-breeder-f-jennifer',
                    x: 66.46,
                    y: 61.04,
                },
                {
                    battleKey: 'cowgirl-shelley',
                    x: 75.83,
                    y: 28.22,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'young-couple-ty-and-sue',
                    x: 77.39,
                    y: 19.63,
                },
            ],
        },
        {
            name: 'Tower 1F',
            map: lostTower1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-1f',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Maylene' },
            ],
        },
        {
            name: 'Tower 2F',
            map: lostTower2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-2f',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Maylene' },
            ],
            battles: [
                {
                    battleKey: 'youngster-oliver',
                    x: 57.75,
                    y: 62,
                },
            ],
        },
        {
            name: 'Tower 3F',
            map: lostTower3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-3f',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Maylene' },
            ],
            battles: [
                {
                    battleKey: 'roughneck-kirby',
                    x: 34.3,
                    y: 91.67,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    battleKey: 'pokefan-m-leonard',
                    x: 49.76,
                    y: 37.8,
                    fieldCondition: FieldCondition.Fog,
                },
            ],
        },
        {
            name: 'Tower 4F',
            map: lostTower4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-4f',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Maylene' },
            ],
            battles: [
                {
                    battleKey: 'pokefan-f-rebekah',
                    x: 65.22,
                    y: 70.96,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    customHeight: 40,
                    battleKey: 'belle-and-pa-beth-and-bob',
                    x: 96.14,
                    y: 87.98,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    customWidth: 36,
                    battleKey: 'young-couple-mike-and-nat',
                    x: 30.43,
                    y: 57.34,
                    fieldCondition: FieldCondition.Fog,
                },
            ],
        },
        {
            name: 'Tower 5F',
            map: lostTower5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-5f',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Maylene' },
            ],
        },
    ],
};

export default ROUTE_209;
