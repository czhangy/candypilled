import {
    route111Desert,
    route111North,
    route111South,
} from '@/lib/data/ruby-sapphire/maps';
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
                    battleKey: 'interviewers-gabby-and-ty-route-111',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 35,
                    y: 30.73,
                },
                {
                    battleKey: 'picnicker-irene',
                    x: 26.09,
                    y: 25.48,
                },
                {
                    battleKey: 'camper-travis',
                    x: 28.59,
                    y: 11.29,
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
                    x: 23.59,
                    y: 64.09,
                },
                {
                    battleKey: 'cooltrainer-f-brooke',
                    x: 28.75,
                    y: 28.84,
                },
                {
                    battleKey: 'black-belt-daisuke',
                    x: 81.09,
                    y: 68.98,
                },
            ],
        },
        {
            name: 'Desert',
            map: route111Desert,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-111-desert',
            battles: [
                {
                    battleKey: 'camper-cliff',
                    x: 53.59,
                    y: 22.27,
                },
                {
                    battleKey: 'picnicker-heidi',
                    x: 71.25,
                    y: 27.43,
                },
                {
                    battleKey: 'camper-drew',
                    x: 61.09,
                    y: 39.05,
                },
                {
                    battleKey: 'ruin-maniac-dusty',
                    x: 68.59,
                    y: 50.68,
                },
                {
                    battleKey: 'picnicker-becky',
                    x: 81.09,
                    y: 54.56,
                },
            ],
        },
    ],
};

export default ROUTE_111;
