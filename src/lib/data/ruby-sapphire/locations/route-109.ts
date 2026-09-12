import {
    route109Beach,
    route109Ocean,
    route109SeashoreHouse,
} from '@/lib/data/ruby-sapphire/maps';
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
                    x: 48.75,
                    y: 71.21,
                },
                {
                    battleKey: 'sailor-edmond',
                    x: 36.09,
                    y: 41.81,
                },
                {
                    battleKey: 'tuber-m-ricky',
                    x: 53.59,
                    y: 42.27,
                },
                {
                    battleKey: 'tuber-f-lola',
                    x: 71.09,
                    y: 31.16,
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
                    x: 96.25,
                    y: 93.52,
                },
                {
                    battleKey: 'beauty-johanna',
                    x: 69.58,
                    y: 51.64,
                },
                {
                    battleKey: 'sailor-dwayne',
                    x: 16.67,
                    y: 32.89,
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
                    battleKey: 'tuber-f-gwen',
                    x: 73.59,
                    y: 16.24,
                },
                {
                    battleKey: 'tuber-f-carmen',
                    x: 71.09,
                    y: 13.21,
                },
                {
                    battleKey: 'swimmer-f-alice',
                    x: 63.75,
                    y: 46.36,
                },
                {
                    battleKey: 'swimmer-m-david',
                    x: 31.09,
                    y: 28.15,
                },
                {
                    battleKey: 'young-couple-mel-and-paul',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 22.34,
                    y: 43.3,
                },
                {
                    battleKey: 'fisherman-carter',
                    x: 38.75,
                    y: 76.44,
                },
            ],
        },
    ],
};

export default ROUTE_109;
