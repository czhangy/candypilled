import { route123East, route123West } from '@/lib/data/ruby-sapphire/maps';
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
                    battleKey: 'aroma-lady-violet',
                    x: 37.71,
                    y: 46.72,
                },
                {
                    battleKey: 'twins-miu-and-yuki',
                    x: 86.71,
                    y: 67.02,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
            ],
            transitions: [
                {
                    height: 32,
                    location: 'Route 118',
                    subarea: 'East',
                    width: 16,
                    x: 1.14,
                    y: 55,
                },
                {
                    height: 240,
                    location: 'Route 123',
                    subarea: 'East',
                    width: 16,
                    x: 98.86,
                    y: 47.5,
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
                    battleKey: 'psychic-m-cameron',
                    x: 98.66,
                    y: 61.72,
                },
                {
                    battleKey: 'hex-maniac-kindra',
                    x: 53.07,
                    y: 71.72,
                },
                {
                    battleKey: 'cooltrainer-f-wendy',
                    x: 37.88,
                    y: 61.72,
                },
                {
                    battleKey: 'cooltrainer-m-clyde',
                    x: 27.15,
                    y: 36.72,
                },
                {
                    battleKey: 'psychic-f-jacki',
                    x: 20,
                    y: 81.72,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Route 122',
                    width: 32,
                    x: 82.12,
                    y: 2.5,
                },
                {
                    height: 160,
                    location: 'Route 123',
                    subarea: 'West',
                    width: 16,
                    x: 0.45,
                    y: 60,
                },
            ],
        },
    ],
};

export default ROUTE_123;
