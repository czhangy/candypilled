import {
    meteorFalls1f,
    meteorFalls1fBack,
    meteorFallsB1f,
    meteorFallsB1fBack,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WALLACE_METHOD_SPLITS = [
    { method: EncounterMethod.Cave, split: 'Wallace' },
    { method: EncounterMethod.OldRod, split: 'Wallace' },
    { method: EncounterMethod.GoodRod, split: 'Wallace' },
    { method: EncounterMethod.SuperRod, split: 'Wallace' },
    { method: EncounterMethod.Surf, split: 'Wallace' },
];

const METEOR_FALLS: Location = {
    name: 'Meteor Falls',
    subareas: [
        {
            name: '1F',
            map: meteorFalls1f,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'meteor-falls-area',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Flannery' },
                { method: EncounterMethod.OldRod, split: 'Flannery' },
                { method: EncounterMethod.GoodRod, split: 'Flannery' },
                { method: EncounterMethod.SuperRod, split: 'Flannery' },
                { method: EncounterMethod.Surf, split: 'Flannery' },
            ],
        },
        {
            name: '1F Back',
            map: meteorFalls1fBack,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'meteor-falls-back',
            methodSplits: WALLACE_METHOD_SPLITS,
            battles: [
                {
                    battleKey: 'old-couple-john-and-jay',
                    x: 23.33,
                    y: 38.57,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
                {
                    battleKey: 'dragon-tamer-nicolas',
                    x: 45.0,
                    y: 7.32,
                },
            ],
        },
        {
            name: 'B1F',
            map: meteorFallsB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'meteor-falls-b1f',
            methodSplits: WALLACE_METHOD_SPLITS,
        },
        {
            name: 'B1F Back',
            map: meteorFallsB1fBack,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'meteor-falls-backsmall-room',
            methodSplits: WALLACE_METHOD_SPLITS,
        },
    ],
};

export default METEOR_FALLS;
