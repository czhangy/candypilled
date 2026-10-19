import {
    abandonedShip1f,
    abandonedShipB1f,
    abandonedShipDeck,
    abandonedShipHiddenFloor,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

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
                    battleKey: 'beauty-thalia',
                    x: 72.22,
                    y: 80.83,
                },
                {
                    battleKey: 'youngster-demetrius',
                    x: 72.22,
                    y: 97.78,
                },
                {
                    battleKey: 'tuber-m-charlie',
                    x: 37.04,
                    y: 35.06,
                },
                {
                    battleKey: 'ruin-maniac-garrison',
                    x: 12.96,
                    y: 50.32,
                },
                {
                    battleKey: 'tuber-f-jani',
                    x: 27.78,
                    y: 50.32,
                },
                {
                    battleKey: 'young-couple-kira-and-dan',
                    x: 25.93,
                    y: 87.61,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
            ],
        },
        {
            name: 'B1F',
            map: abandonedShipB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'abandoned-ship',
            methodSplits: [
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'sailor-duncan',
                    x: 61.11,
                    y: 23.5,
                },
            ],
        },
        {
            name: 'Hidden Floor',
            map: abandonedShipHiddenFloor,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'abandoned-ship',
            methodSplits: [
                { method: EncounterMethod.GoodRod, split: 'Juan' },
                { method: EncounterMethod.OldRod, split: 'Juan' },
                { method: EncounterMethod.SuperRod, split: 'Juan' },
                { method: EncounterMethod.Surf, split: 'Juan' },
            ],
        },
    ],
};

export default ABANDONED_SHIP;
