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
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_CORONET: Location = {
    name: 'Mt. Coronet',
    subareas: [
        {
            name: '1F (211)',
            map: mtCoronet1fRoute211,
            encountersKey: 'mt-coronet-1f-route-211',
        },
        {
            name: 'B1F',
            map: mtCoronetB1f,
            encountersKey: 'mt-coronet-b1f',
        },
        {
            name: '1F (216)',
            map: mtCoronet1fRoute216,
            encountersKey: 'mt-coronet-1f-route-216',
        },
        {
            name: '1F (207)',
            map: mtCoronet1fRoute207,
            encountersKey: 'mt-coronet-1f-route-207',
        },
        {
            name: '2F',
            map: mtCoronet2f,
            encountersKey: 'mt-coronet-2f',
        },
        {
            name: '3F',
            map: mtCoronet3f,
            encountersKey: 'mt-coronet-3f',
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-3f',
                    metadata: [BattleMetadata.Optional],
                    x: 61.7,
                    y: 19.4,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-3f',
                    metadata: [BattleMetadata.Optional],
                    x: 9.9,
                    y: 43.2,
                },
            ],
        },
        {
            name: 'Exterior',
            map: mtCoronetSouthExterior,
            encountersKey: 'mt-coronet-south-exterior',
        },
        {
            name: '4F',
            map: mtCoronet4f,
            encountersKey: 'mt-coronet-4f',
            battles: [
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-4f-1',
                    metadata: [BattleMetadata.Optional],
                    x: 16.5,
                    y: 22.1,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-4f-2',
                    metadata: [BattleMetadata.Optional],
                    x: 36.7,
                    y: 15.8,
                },
            ],
        },
        {
            name: 'Summit',
            map: mtCoronetNorthExterior,
            encountersKey: 'mt-coronet-north-exterior',
        },
        {
            name: 'Tunnel',
            map: mtCoronetTunnel,
            encountersKey: 'mt-coronet-tunnel',
            battles: [
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-tunnel-1',
                    metadata: [BattleMetadata.Optional],
                    x: 10.7,
                    y: 75.1,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-tunnel-2',
                    metadata: [BattleMetadata.Optional],
                    x: 64.1,
                    y: 11.1,
                },
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-tunnel',
                    metadata: [BattleMetadata.Optional],
                    x: 79.7,
                    y: 48.5,
                },
            ],
        },
        {
            name: '5F',
            map: mtCoronet5f,
            encountersKey: 'mt-coronet-5f',
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-5f',
                    metadata: [],
                    x: 74.4,
                    y: 57.1,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-5f',
                    metadata: [],
                    x: 45.2,
                    y: 78.5,
                },
            ],
        },
        {
            name: '6F',
            map: mtCoronet6f,
            encountersKey: 'mt-coronet-6f',
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-6f',
                    metadata: [],
                    x: 55.6,
                    y: 39.7,
                },
            ],
        },
    ],
};

export default MT_CORONET;
