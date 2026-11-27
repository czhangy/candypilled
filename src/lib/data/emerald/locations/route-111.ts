import {
    route111Desert,
    route111North,
    route111South,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_111: Location = {
    name: 'Route 111',
    subareas: [
        {
            name: 'South',
            map: route111South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-111',
            methodSplits: [
                { method: EncounterMethod.RockSmash, split: 'Flannery' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.Surf, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'aroma-lady-celina',
                    x: 51.25,
                    y: 89.06,
                },
                {
                    battleKey: 'camper-tyron',
                    x: 66.25,
                    y: 89.06,
                },
                {
                    battleKey: 'picnicker-bianca',
                    x: 48.75,
                    y: 73.35,
                },
                {
                    battleKey: 'kindler-hayden',
                    x: 41.25,
                    y: 70.49,
                },
                {
                    battleKey: 'winstrate-family',
                    x: 33.75,
                    y: 63.35,
                },
                {
                    battleKey: 'interviewers-gabby-and-ty-route-111',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 35.0,
                    y: 23.35,
                },
                {
                    battleKey: 'picnicker-irene',
                    x: 26.25,
                    y: 17.63,
                },
                {
                    battleKey: 'camper-travis',
                    x: 28.75,
                    y: 1.92,
                },
            ],
            transitions: [
                {
                    height: 32,
                    location: 'Route 112',
                    subarea: 'South',
                    width: 16,
                    x: 1.25,
                    y: 1.43,
                },
                {
                    height: 16,
                    location: 'Route 111',
                    subarea: 'Desert',
                    width: 128,
                    x: 30,
                    y: 0.71,
                },
                {
                    height: 16,
                    location: 'Mauville City',
                    width: 112,
                    x: 41.25,
                    y: 99.29,
                },
            ],
        },
        {
            name: 'North',
            map: route111North,
            mapAnchor: MapAnchor.BottomLeft,
            battles: [
                {
                    battleKey: 'cooltrainer-m-wilton',
                    x: 23.75,
                    y: 63.59,
                },
                {
                    battleKey: 'black-belt-daisuke',
                    x: 81.25,
                    y: 68.24,
                },
                {
                    battleKey: 'cooltrainer-f-brooke',
                    x: 28.75,
                    y: 26.38,
                },
            ],
            transitions: [
                {
                    height: 64,
                    location: 'Route 113',
                    width: 16,
                    x: 1.25,
                    y: 20.93,
                },
                {
                    height: 48,
                    location: 'Route 112',
                    subarea: 'North',
                    width: 16,
                    x: 1.25,
                    y: 68.6,
                },
                {
                    height: 32,
                    location: 'Route 111',
                    subarea: 'Desert',
                    width: 80,
                    x: 26.25,
                    y: 86.05,
                },
            ],
        },
        {
            name: 'Desert',
            map: route111Desert,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-111-desert',
            methodSplits: [{ method: EncounterMethod.Sand, split: 'Norman' }],
            battles: [
                {
                    battleKey: 'camper-drew',
                    x: 73.75,
                    y: 5.64,
                },
                {
                    battleKey: 'camper-beau',
                    x: 53.75,
                    y: 18.63,
                },
                {
                    battleKey: 'picnicker-heidi',
                    x: 71.25,
                    y: 23.82,
                },
                {
                    battleKey: 'picnicker-becky',
                    x: 81.25,
                    y: 43.3,
                },
                {
                    battleKey: 'ruin-maniac-dusty',
                    x: 68.75,
                    y: 47.2,
                },
                {
                    battleKey: 'picnicker-celia',
                    x: 56.25,
                    y: 57.6,
                },
                {
                    battleKey: 'ruin-maniac-bryan',
                    x: 73.75,
                    y: 57.6,
                },
                {
                    battleKey: 'camper-branden',
                    x: 93.75,
                    y: 57.6,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mirage Tower',
                    subarea: '1F',
                    width: 16,
                    x: 48.75,
                    y: 33.04,
                },
                {
                    height: 16,
                    location: 'Desert Ruins',
                    width: 16,
                    x: 73.75,
                    y: 70.7,
                },
                {
                    height: 16,
                    location: 'Route 111',
                    subarea: 'North',
                    width: 64,
                    x: 20,
                    y: 0.65,
                },
                {
                    height: 32,
                    location: 'Route 111',
                    subarea: 'South',
                    width: 96,
                    x: 30,
                    y: 37.66,
                },
            ],
        },
    ],
};

export default ROUTE_111;
