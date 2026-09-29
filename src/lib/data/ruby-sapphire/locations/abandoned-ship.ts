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
        },
        {
            name: '1F',
            map: abandonedShip1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'tuber-m-charlie',
                    x: 36.81,
                    y: 35.09,
                },
                {
                    battleKey: 'young-couple-lois-and-hal',
                    x: 25.93,
                    y: 87.42,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
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
                    x: 60.88,
                    y: 23.06,
                },
            ],
        },
        {
            name: 'Hidden Floor',
            map: abandonedShipHiddenFloor,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'abandoned-ship',
            methodSplits: HIDDEN_FLOOR_METHOD_SPLITS,
        },
    ],
};

export default ABANDONED_SHIP;
