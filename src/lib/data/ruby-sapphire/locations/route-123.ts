import { route123East, route123West } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
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
                    battleKey: 'twins-miu-and-yuki',
                    x: 86.71,
                    y: 67.02,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
                {
                    battleKey: 'aroma-lady-violet',
                    x: 37.57,
                    y: 46.4,
                },
            ],
        },
        {
            name: 'East',
            map: route123East,
            mapAnchor: MapAnchor.Right,
            encountersKey: 'hoenn-route-123',
            battles: [
                {
                    battleKey: 'hex-maniac-kindra',
                    x: 53,
                    y: 71.71,
                },
                {
                    battleKey: 'cooltrainer-f-wendy',
                    x: 37.82,
                    y: 61.71,
                },
                {
                    battleKey: 'cooltrainer-m-clyde',
                    x: 27.09,
                    y: 36.71,
                },
                {
                    battleKey: 'psychic-f-jacki',
                    x: 20,
                    y: 81.4,
                },
                {
                    battleKey: 'psychic-m-cameron',
                    x: 98.6,
                    y: 61.71,
                },
            ],
        },
    ],
};

export default ROUTE_123;
