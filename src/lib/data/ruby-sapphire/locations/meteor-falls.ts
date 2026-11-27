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
            transitions: [
                {
                    height: 16,
                    location: 'Route 115',
                    subarea: 'South',
                    width: 16,
                    x: 21.67,
                    y: 94.05,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F Back',
                    width: 16,
                    x: 35,
                    y: 8.33,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: 'B1F',
                    width: 16,
                    x: 18.33,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Route 114',
                    width: 16,
                    x: 91.67,
                    y: 44.05,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: 'B1F',
                    width: 16,
                    x: 88.33,
                    y: 67.86,
                },
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
                    x: 45,
                    y: 7.32,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: 'B1F',
                    width: 16,
                    x: 15,
                    y: 45.31,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: 'B1F',
                    width: 16,
                    x: 25,
                    y: 64.06,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: 'B1F',
                    width: 16,
                    x: 71.67,
                    y: 73.44,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F',
                    width: 16,
                    x: 35,
                    y: 92.19,
                },
            ],
        },
        {
            name: 'B1F',
            map: meteorFallsB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'meteor-falls-b1f',
            methodSplits: STEVEN_METHOD_SPLITS,
            transitions: [
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: 'B1F Back',
                    width: 16,
                    x: 60.34,
                    y: 9.21,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F Back',
                    width: 16,
                    x: 18.97,
                    y: 17.11,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F Back',
                    width: 16,
                    x: 25.86,
                    y: 30.26,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F Back',
                    width: 16,
                    x: 63.79,
                    y: 40.79,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F',
                    width: 16,
                    x: 12.07,
                    y: 61.84,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F',
                    width: 16,
                    x: 70.69,
                    y: 96.05,
                },
            ],
        },
        {
            name: 'B1F Back',
            map: meteorFallsB1fBack,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'meteor-falls-backsmall-room',
            methodSplits: STEVEN_METHOD_SPLITS,
            transitions: [
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: 'B1F',
                    width: 16,
                    x: 50,
                    y: 86.11,
                },
            ],
        },
    ],
};

export default METEOR_FALLS;
