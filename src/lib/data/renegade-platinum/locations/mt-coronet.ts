import {
    mtCoronet1fRoute207,
    mtCoronet1fRoute211,
    mtCoronet1fRoute216,
    mtCoronet2f,
    mtCoronet3f,
    mtCoronet4f,
    mtCoronet5f,
    mtCoronet6f,
    mtCoronetB1f,
    mtCoronetNorthExterior,
    mtCoronetSouthExterior,
    mtCoronetTunnel,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_CORONET: Location = {
    name: 'Mt. Coronet',
    subareas: [
        {
            name: '1F (211)',
            map: mtCoronet1fRoute211,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-1f-route-211',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Above the ledge, on the left',
                    slug: 'rock-polish',
                },
                {
                    category: ItemCategory.EvolutionItem,
                    count: 1,
                    hidden: false,
                    method: 'In the center, next to a rock',
                    slug: 'moon-stone',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Gardenia' }],
        },
        {
            name: 'B1F',
            map: mtCoronetB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-coronet-b1f',
            items: [
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Between the rocks by the South entrance',
                    slug: 'soft-sand',
                },
                {
                    category: ItemCategory.EvolutionItem,
                    count: 1,
                    hidden: false,
                    method: 'On the platform to the left of the water',
                    slug: 'prism-scale',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Between the rocks, above the water',
                    slug: 'light-clay',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Gardenia' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Gardenia' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
            ],
        },
        {
            name: '1F (216)',
            map: mtCoronet1fRoute216,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-1f-route-216',
            items: [
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'In the side chamber',
                    slug: 'never-melt-ice',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Gardenia' }],
        },
        {
            name: '1F (207)',
            map: mtCoronet1fRoute207,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-1f-route-207',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Fantina' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Fantina' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
            ],
        },
        {
            name: '2F',
            map: mtCoronet2f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-coronet-2f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Volkner' }],
        },
        {
            name: '3F',
            map: mtCoronet3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-3f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Volkner' }],
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-3f',
                    x: 61.97,
                    y: 19.35,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-3f',
                    x: 10.1,
                    y: 43.15,
                },
            ],
        },
        {
            name: 'Exterior',
            map: mtCoronetSouthExterior,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-south-exterior',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Volkner' },
                { method: EncounterMethod.PokeRadar, split: 'Volkner' },
            ],
        },
        {
            name: '4F',
            map: mtCoronet4f,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'mt-coronet-4f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Volkner' }],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-4f-1',
                    x: 16.46,
                    y: 22.07,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-4f-2',
                    x: 36.77,
                    y: 15.82,
                },
            ],
        },
        {
            name: 'Summit',
            map: mtCoronetNorthExterior,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-north-exterior',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Volkner' },
                { method: EncounterMethod.PokeRadar, split: 'Volkner' },
            ],
        },
        {
            name: 'Tunnel',
            map: mtCoronetTunnel,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-coronet-tunnel',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'In the center on the right platform',
                    slug: 'dragon-claw',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Gardenia' }],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-tunnel-1',
                    x: 11.04,
                    y: 75.1,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-tunnel-2',
                    x: 64.16,
                    y: 11.04,
                },
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-tunnel',
                    x: 79.79,
                    y: 48.54,
                },
            ],
        },
        {
            name: '5F',
            map: mtCoronet5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-5f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Volkner' }],
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-5f',
                    x: 73.96,
                    y: 57.11,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-5f',
                    x: 45.39,
                    y: 78.44,
                },
            ],
        },
        {
            name: '6F',
            map: mtCoronet6f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-coronet-6f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Volkner' }],
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-6f',
                    x: 55.25,
                    y: 39.42,
                },
            ],
        },
    ],
};

export default MT_CORONET;
