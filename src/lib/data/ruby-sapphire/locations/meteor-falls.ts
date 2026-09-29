import {
    meteorFalls1f,
    meteorFalls1fBack,
    meteorFallsB1f,
    meteorFallsB1fBack,
} from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const STEVEN_METHOD_SPLITS = [
    { method: EncounterMethod.Cave, split: 'Steven' },
    { method: EncounterMethod.OldRod, split: 'Steven' },
    { method: EncounterMethod.GoodRod, split: 'Steven' },
    { method: EncounterMethod.SuperRod, split: 'Steven' },
    { method: EncounterMethod.Surf, split: 'Steven' },
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
            methodSplits: STEVEN_METHOD_SPLITS,
            battles: [
                {
                    battleKey: 'old-couple-john-and-jay',
                    x: 23.13,
                    y: 38.4,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
                {
                    battleKey: 'dragon-tamer-nicolas',
                    x: 44.79,
                    y: 6.96,
                },
            ],
        },
        {
            name: 'B1F',
            map: meteorFallsB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'meteor-falls-b1f',
            methodSplits: STEVEN_METHOD_SPLITS,
        },
        {
            name: 'B1F Back',
            map: meteorFallsB1fBack,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'meteor-falls-backsmall-room',
            methodSplits: STEVEN_METHOD_SPLITS,
        },
    ],
};

export default METEOR_FALLS;
