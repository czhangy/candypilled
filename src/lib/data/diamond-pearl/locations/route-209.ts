import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
    route209Main,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WALKING_MAYLENE = [{ method: EncounterMethod.Walking, split: 'Maylene' }];

const ROUTE_209: Location = {
    name: 'Route 209',
    subareas: [
        {
            name: 'Main',
            map: route209Main,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'sinnoh-route-209',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Maylene' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.HoneyTree, split: 'Maylene' },
                { method: EncounterMethod.Static, split: 'Maylene' },
                { method: EncounterMethod.Surf, split: 'Byron' },
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
                    customWidth: 36,
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
                    customHeight: 45,
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
            methodSplits: WALKING_MAYLENE,
        },
        {
            name: 'Tower 2F',
            map: lostTower2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-2f',
            methodSplits: WALKING_MAYLENE,
            battles: [
                {
                    battleKey: 'youngster-oliver',
                    x: 57.37,
                    y: 64.6,
                },
            ],
        },
        {
            name: 'Tower 3F',
            map: lostTower3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-3f',
            methodSplits: WALKING_MAYLENE,
            battles: [
                {
                    battleKey: 'roughneck-kirby',
                    x: 34.18,
                    y: 91.05,
                },
                {
                    battleKey: 'pokefan-m-leonard',
                    x: 49.64,
                    y: 37.15,
                },
            ],
        },
        {
            name: 'Tower 4F',
            map: lostTower4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-4f',
            methodSplits: WALKING_MAYLENE,
            battles: [
                {
                    battleKey: 'pokefan-f-rebekah',
                    x: 65.94,
                    y: 71.57,
                },
                {
                    customHeight: 41,
                    battleKey: 'belle-and-pa-beth-and-bob',
                    x: 96.86,
                    y: 87.58,
                },
                {
                    customWidth: 36,
                    battleKey: 'young-couple-mike-and-nat',
                    x: 31.16,
                    y: 58.1,
                },
            ],
        },
        {
            name: 'Tower 5F',
            map: lostTower5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-5f',
            methodSplits: WALKING_MAYLENE,
        },
    ],
};

export default ROUTE_209;
