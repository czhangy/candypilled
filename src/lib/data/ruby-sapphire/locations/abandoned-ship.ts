import {
    abandonedShip1f,
    abandonedShipB1f,
    abandonedShipDeck,
    abandonedShipHiddenFloor,
} from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SHIP_METHOD_SPLITS = [
    { method: EncounterMethod.GoodRod, split: 'Winona' },
    { method: EncounterMethod.OldRod, split: 'Winona' },
    { method: EncounterMethod.SuperRod, split: 'Winona' },
    { method: EncounterMethod.Surf, split: 'Winona' },
];

const HIDDEN_FLOOR_METHOD_SPLITS = [
    { method: EncounterMethod.GoodRod, split: 'Wallace' },
    { method: EncounterMethod.OldRod, split: 'Wallace' },
    { method: EncounterMethod.SuperRod, split: 'Wallace' },
    { method: EncounterMethod.Surf, split: 'Wallace' },
];

const ABANDONED_SHIP: Location = {
    name: 'Abandoned Ship',
    subareas: [
        {
            name: 'Deck',
            map: abandonedShipDeck,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: '1F',
                    width: 16,
                    x: 36.96,
                    y: 45.24,
                },
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: '1F',
                    width: 16,
                    x: 58.7,
                    y: 45.24,
                },
                {
                    height: 16,
                    location: 'Route 108',
                    width: 32,
                    x: 60.87,
                    y: 73.81,
                },
            ],
        },
        {
            name: '1F',
            map: abandonedShip1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'tuber-m-charlie',
                    x: 37.04,
                    y: 35.06,
                },
                {
                    battleKey: 'young-couple-lois-and-hal',
                    x: 25.93,
                    y: 87.61,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: 'B1F',
                    width: 16,
                    x: 37.04,
                    y: 8.47,
                },
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: 'B1F',
                    width: 16,
                    x: 77.78,
                    y: 8.47,
                },
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: 'Deck',
                    width: 32,
                    x: 20.37,
                    y: 38.98,
                },
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: 'Deck',
                    width: 32,
                    x: 50,
                    y: 38.98,
                },
            ],
        },
        {
            name: 'B1F',
            map: abandonedShipB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'abandoned-ship',
            methodSplits: SHIP_METHOD_SPLITS,
            battles: [
                {
                    battleKey: 'sailor-duncan',
                    x: 61.11,
                    y: 23.5,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: '1F',
                    width: 16,
                    x: 27.78,
                    y: 9.26,
                },
                {
                    height: 16,
                    location: 'Abandoned Ship',
                    subarea: '1F',
                    width: 16,
                    x: 57.41,
                    y: 9.26,
                },
                {
                    height: 32,
                    location: 'Abandoned Ship',
                    subarea: 'Hidden Floor',
                    width: 48,
                    x: 50,
                    y: 96.3,
                },
            ],
        },
        {
            name: 'Hidden Floor',
            map: abandonedShipHiddenFloor,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'abandoned-ship',
            methodSplits: HIDDEN_FLOOR_METHOD_SPLITS,
            transitions: [
                {
                    height: 32,
                    location: 'Abandoned Ship',
                    subarea: 'B1F',
                    width: 32,
                    x: 37.5,
                    y: 37.74,
                },
            ],
        },
    ],
};

export default ABANDONED_SHIP;
