import {
    route111Desert,
    route111North,
    route111South,
} from '@/lib/data/ruby-sapphire/maps';
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
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.RockSmash, split: 'Flannery' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'interviewers-gabby-and-ty-route-111',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 35,
                    y: 30.73,
                },
                {
                    battleKey: 'picnicker-irene',
                    x: 26.25,
                    y: 25.6,
                },
                {
                    battleKey: 'camper-travis',
                    x: 28.75,
                    y: 11.41,
                },
                {
                    battleKey: 'winstrate-family',
                    x: 33.75,
                    y: 66.89,
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
                    y: 64.34,
                },
                {
                    battleKey: 'cooltrainer-f-brooke',
                    x: 28.75,
                    y: 29.04,
                },
                {
                    battleKey: 'black-belt-daisuke',
                    x: 81.25,
                    y: 69.04,
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
                    battleKey: 'camper-cliff',
                    x: 53.75,
                    y: 22.38,
                },
                {
                    battleKey: 'picnicker-heidi',
                    x: 71.25,
                    y: 27.54,
                },
                {
                    battleKey: 'camper-drew',
                    x: 61.25,
                    y: 39.15,
                },
                {
                    battleKey: 'ruin-maniac-dusty',
                    x: 68.75,
                    y: 50.77,
                },
                {
                    battleKey: 'picnicker-becky',
                    x: 81.25,
                    y: 54.64,
                },
            ],
        },
    ],
};

export default ROUTE_111;
