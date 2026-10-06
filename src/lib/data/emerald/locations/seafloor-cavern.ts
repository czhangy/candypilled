import {
    seafloorCavernEntrance,
    seafloorCavernRoom1,
    seafloorCavernRoom2,
    seafloorCavernRoom3,
    seafloorCavernRoom4,
    seafloorCavernRoom5,
    seafloorCavernRoom6,
    seafloorCavernRoom7,
    seafloorCavernRoom8,
    seafloorCavernRoom9,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUAN_METHOD_SPLITS = [
    { method: EncounterMethod.Cave, split: 'Juan' },
    { method: EncounterMethod.OldRod, split: 'Juan' },
    { method: EncounterMethod.GoodRod, split: 'Juan' },
    { method: EncounterMethod.SuperRod, split: 'Juan' },
    { method: EncounterMethod.Surf, split: 'Juan' },
];

const SEAFLOOR_CAVERN: Location = {
    name: 'Seafloor Cavern',
    subareas: [
        {
            name: 'Entrance',
            map: seafloorCavernEntrance,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Room 1',
            map: seafloorCavernRoom1,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-seafloor-cavern-1',
                    x: 42.5,
                    y: 30.21,
                },
                {
                    battleKey: 'team-aqua-grunt-m-seafloor-cavern-2',
                    x: 77.5,
                    y: 49.26,
                },
            ],
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 2',
            map: seafloorCavernRoom2,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 3',
            map: seafloorCavernRoom3,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-seafloor-cavern-4',
                    x: 34.38,
                    y: 31.43,
                },
                {
                    battleKey: 'aqua-admin-shelly-seafloor-cavern',
                    x: 59.38,
                    y: 31.43,
                },
            ],
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 4',
            map: seafloorCavernRoom4,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-seafloor-cavern-3',
                    x: 30.56,
                    y: 43.91,
                },
                {
                    battleKey: 'team-aqua-grunt-f-seafloor-cavern-1',
                    x: 30.56,
                    y: 64.97,
                },
            ],
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 5',
            map: seafloorCavernRoom5,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 6',
            map: seafloorCavernRoom6,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 7',
            map: seafloorCavernRoom7,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 8',
            map: seafloorCavernRoom8,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            methodSplits: JUAN_METHOD_SPLITS,
        },
        {
            name: 'Room 9',
            map: seafloorCavernRoom9,
            mapAnchor: MapAnchor.Top,
            battles: [
                {
                    battleKey: 'aqua-leader-archie-seafloor-cavern',
                    x: 35.19,
                    y: 92.05,
                },
            ],
        },
    ],
};

export default SEAFLOOR_CAVERN;
