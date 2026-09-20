import {
    route111Desert,
    route111North,
    route111South,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_111: Location = {
    name: 'Route 111',
    subareas: [
        {
            name: 'South',
            map: route111South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-111',
            battles: [
                {
                    battleKey: 'camper-tyron',
                    x: 66.25,
                    y: 89.06,
                },
                {
                    battleKey: 'aroma-lady-celina',
                    x: 51.25,
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
                    battleKey: 'cooltrainer-f-brooke',
                    x: 28.75,
                    y: 26.38,
                },
                {
                    battleKey: 'black-belt-daisuke',
                    x: 81.25,
                    y: 68.24,
                },
            ],
        },
        {
            name: 'Desert',
            map: route111Desert,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-111',
            battles: [
                {
                    battleKey: 'picnicker-heidi',
                    x: 71.25,
                    y: 23.82,
                },
                {
                    battleKey: 'camper-beau',
                    x: 53.75,
                    y: 18.63,
                },
                {
                    battleKey: 'camper-drew',
                    x: 73.75,
                    y: 5.64,
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
        },
    ],
};

export default ROUTE_111;
