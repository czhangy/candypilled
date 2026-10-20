import {
    route109Beach,
    route109Ocean,
    route109SeashoreHouse,
} from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_109_METHOD_SPLITS = [
    { method: EncounterMethod.OldRod, split: 'Brawly' },
    { method: EncounterMethod.GoodRod, split: 'Winona' },
    { method: EncounterMethod.SuperRod, split: 'Winona' },
    { method: EncounterMethod.Surf, split: 'Winona' },
];

const ROUTE_109: Location = {
    name: 'Route 109',
    subareas: [
        {
            name: 'Beach',
            map: route109Beach,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-109',
            methodSplits: ROUTE_109_METHOD_SPLITS,
            battles: [
                {
                    battleKey: 'sailor-huey',
                    x: 48.75,
                    y: 71.64,
                },
                {
                    battleKey: 'sailor-edmond',
                    x: 36.25,
                    y: 42.01,
                },
                {
                    battleKey: 'tuber-m-ricky',
                    x: 53.75,
                    y: 42.01,
                },
                {
                    battleKey: 'tuber-f-lola',
                    x: 71.25,
                    y: 30.9,
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
            methodSplits: ROUTE_109_METHOD_SPLITS,
            battles: [
                {
                    battleKey: 'tuber-f-gwen',
                    x: 73.75,
                    y: 16.19,
                },
                {
                    battleKey: 'tuber-f-carmen',
                    x: 71.25,
                    y: 13.16,
                },
                {
                    battleKey: 'swimmer-f-alice',
                    x: 63.75,
                    y: 46.5,
                },
                {
                    battleKey: 'swimmer-m-david',
                    x: 31.25,
                    y: 28.31,
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
                    y: 76.8,
                },
            ],
        },
    ],
};

export default ROUTE_109;
