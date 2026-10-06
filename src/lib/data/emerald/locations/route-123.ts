import { route123East, route123West } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_123: Location = {
    name: 'Route 123',
    subareas: [
        {
            name: 'West',
            map: route123West,
            mapAnchor: MapAnchor.Left,
            battles: [
                {
                    battleKey: 'bug-catcher-davis',
                    x: 33.14,
                    y: 61.72,
                },
                {
                    battleKey: 'cooltrainer-f-jazmyn',
                    x: 33.14,
                    y: 81.72,
                },
                {
                    battleKey: 'aroma-lady-violet',
                    x: 42.29,
                    y: 46.72,
                },
                {
                    battleKey: 'twins-miu-and-yuki',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 86.86,
                    y: 66.72,
                },
            ],
        },
        {
            name: 'East',
            map: route123East,
            mapAnchor: MapAnchor.Right,
            encountersKey: 'hoenn-route-123',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'hex-maniac-kindra',
                    x: 53.07,
                    y: 61.72,
                },
                {
                    battleKey: 'collector-ed',
                    x: 53.07,
                    y: 86.72,
                },
                {
                    battleKey: 'cooltrainer-f-wendy',
                    x: 37.88,
                    y: 61.72,
                },
                {
                    battleKey: 'cooltrainer-m-braxton',
                    x: 27.15,
                    y: 36.72,
                },
                {
                    battleKey: 'guitarist-fernando',
                    x: 34.3,
                    y: 81.72,
                },
                {
                    battleKey: 'bird-keeper-alberto',
                    x: 34.3,
                    y: 96.72,
                },
                {
                    battleKey: 'psychic-f-jacki',
                    x: 19.11,
                    y: 81.72,
                },
                {
                    battleKey: 'expert-m-fredrick',
                    x: 19.11,
                    y: 96.72,
                },
                {
                    battleKey: 'psychic-m-cameron',
                    x: 98.66,
                    y: 61.72,
                },
                {
                    battleKey: 'ninja-boy-jonas',
                    customHeight: 57,
                    x: 98.66,
                    y: 76.72,
                },
            ],
        },
    ],
};

export default ROUTE_123;
