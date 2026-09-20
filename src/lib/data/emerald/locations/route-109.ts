import {
    route109Beach,
    route109Ocean,
    route109SeashoreHouse,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_109: Location = {
    name: 'Route 109',
    subareas: [
        {
            name: 'Beach',
            map: route109Beach,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-109',
            battles: [
                {
                    battleKey: 'sailor-huey',
                    x: 38.75,
                    y: 64.24,
                },
                {
                    battleKey: 'sailor-edmond',
                    x: 61.25,
                    y: 49.42,
                },
                {
                    battleKey: 'tuber-f-hailey',
                    x: 43.75,
                    y: 49.42,
                },
                {
                    battleKey: 'tuber-m-ricky',
                    x: 48.75,
                    y: 38.31,
                },
                {
                    battleKey: 'tuber-f-lola',
                    x: 56.25,
                    y: 27.2,
                },
                {
                    battleKey: 'tuber-m-chandler',
                    x: 68.75,
                    y: 27.2,
                },
            ],
        },
        {
            name: 'Seashore House',
            map: route109SeashoreHouse,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'tuber-m-simon',
                    x: 96.67,
                    y: 93.44,
                },
                {
                    battleKey: 'beauty-johanna',
                    x: 70,
                    y: 53.44,
                },
                {
                    battleKey: 'sailor-dwayne',
                    x: 16.67,
                    y: 33.44,
                },
            ],
        },
        {
            name: 'Ocean',
            map: route109Ocean,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'hoenn-route-109',
            battles: [
                {
                    battleKey: 'tuber-f-austina',
                    x: 71.25,
                    y: 12.07,
                },
                {
                    battleKey: 'tuber-f-gwen',
                    x: 73.75,
                    y: 14.84,
                },
                {
                    battleKey: 'swimmer-m-david',
                    x: 31.25,
                    y: 25.95,
                },
                {
                    battleKey: 'swimmer-f-alice',
                    x: 63.75,
                    y: 34.29,
                },
                {
                    battleKey: 'young-couple-mel-and-paul',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 22.5,
                    y: 39.84,
                },
                {
                    battleKey: 'fisherman-carter',
                    x: 53.75,
                    y: 81.51,
                },
                {
                    battleKey: 'bird-keeper-elijah',
                    x: 43.75,
                    y: 81.51,
                },
            ],
        },
    ],
};

export default ROUTE_109;
