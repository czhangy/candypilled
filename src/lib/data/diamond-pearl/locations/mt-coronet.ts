import {
    mtCoronet1f207,
    mtCoronet1f211,
    mtCoronet1f216,
    mtCoronet2f,
    mtCoronet3f,
    mtCoronet4f,
    mtCoronet5f,
    mtCoronet6f,
    mtCoronetB1f,
    mtCoronetExterior,
    mtCoronetSummit,
    mtCoronetTunnel,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAVE_VOLKNER = [{ method: EncounterMethod.Cave, split: 'Volkner' }];

const MT_CORONET: Location = {
    name: 'Mt. Coronet',
    subareas: [
        {
            name: '1F (211)',
            map: mtCoronet1f211,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-1f-route-211',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Gardenia' }],
        },
        {
            name: '1F (207)',
            map: mtCoronet1f207,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-1f-route-207',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Maylene' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.Surf, split: 'Byron' },
            ],
        },
        {
            name: 'B1F',
            map: mtCoronetB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-coronet-b1f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Candice' },
                { method: EncounterMethod.Surf, split: 'Candice' },
                { method: EncounterMethod.OldRod, split: 'Candice' },
                { method: EncounterMethod.GoodRod, split: 'Candice' },
                { method: EncounterMethod.FeebasTile, split: 'Candice' },
            ],
        },
        {
            name: '1F (216)',
            map: mtCoronet1f216,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-1f-route-216',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Candice' }],
        },
        {
            name: '2F',
            map: mtCoronet2f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-coronet-2f',
            methodSplits: CAVE_VOLKNER,
        },
        {
            name: '3F',
            map: mtCoronet3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-3f',
            methodSplits: CAVE_VOLKNER,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-1',
                    x: 61.6,
                    y: 19.4,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-1',
                    x: 10.2,
                    y: 43.6,
                },
            ],
        },
        {
            name: 'Exterior',
            map: mtCoronetExterior,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-exterior-snowfall',
            methodSplits: CAVE_VOLKNER,
        },
        {
            name: '4F',
            map: mtCoronet4f,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'mt-coronet-4f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Volkner' },
                { method: EncounterMethod.Surf, split: 'Volkner' },
                { method: EncounterMethod.OldRod, split: 'Volkner' },
                { method: EncounterMethod.GoodRod, split: 'Volkner' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-2',
                    x: 16.6,
                    y: 22.2,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-3',
                    x: 36.8,
                    y: 15.8,
                },
            ],
        },
        {
            name: 'Summit',
            map: mtCoronetSummit,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Tunnel',
            map: mtCoronetTunnel,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-coronet-1f-from-exterior',
            methodSplits: CAVE_VOLKNER,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-4',
                    x: 11,
                    y: 75.2,
                },
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-2',
                    x: 79.6,
                    y: 48.7,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-5',
                    x: 64,
                    y: 11,
                },
            ],
        },
        {
            name: '5F',
            map: mtCoronet5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-5f',
            methodSplits: CAVE_VOLKNER,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-3',
                    x: 74.6,
                    y: 57.2,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-6',
                    x: 45.4,
                    y: 78.3,
                },
            ],
        },
        {
            name: '6F',
            map: mtCoronet6f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-6f',
            methodSplits: CAVE_VOLKNER,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-4',
                    x: 55.4,
                    y: 40,
                },
            ],
        },
    ],
};

export default MT_CORONET;
