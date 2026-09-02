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
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_CORONET: Location = {
    name: 'Mt. Coronet',
    subareas: [
        {
            name: '1F (211)',
            map: mtCoronet1f211,
            encountersKey: 'mt-coronet-1f-route-211',
        },
        {
            name: '1F (207)',
            map: mtCoronet1f207,
            encountersKey: 'mt-coronet-1f-route-207',
        },
        {
            name: 'B1F',
            map: mtCoronetB1f,
            encountersKey: 'mt-coronet-b1f',
        },
        {
            name: '1F (216)',
            map: mtCoronet1f216,
            encountersKey: 'mt-coronet-1f-route-216',
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
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-f-mt-coronet-1',
                    x: 61.6,
                    y: 19.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-mt-coronet-1',
                    x: 10.2,
                    y: 43.6,
                },
            ],
        },
        {
            name: 'Exterior',
            map: mtCoronetExterior,
            encountersKey: 'mt-coronet-exterior-snowfall',
        },
        {
            name: '4F',
            map: mtCoronet4f,
            encountersKey: 'mt-coronet-4f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-mt-coronet-2',
                    x: 16.6,
                    y: 22.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-mt-coronet-3',
                    x: 36.8,
                    y: 15.8,
                },
            ],
        },
        {
            name: 'Summit',
            map: mtCoronetSummit,
        },
        {
            name: 'Tunnel',
            map: mtCoronetTunnel,
            encountersKey: 'mt-coronet-1f-from-exterior',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-mt-coronet-4',
                    x: 11,
                    y: 75.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-f-mt-coronet-2',
                    x: 79.6,
                    y: 48.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-mt-coronet-5',
                    x: 64,
                    y: 11,
                },
            ],
        },
        {
            name: '5F',
            map: mtCoronet5f,
            encountersKey: 'mt-coronet-5f',
            battles: [
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-f-mt-coronet-3',
                    x: 74.6,
                    y: 57.2,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-mt-coronet-6',
                    x: 45.4,
                    y: 78.3,
                },
            ],
        },
        {
            name: '6F',
            map: mtCoronet6f,
            encountersKey: 'mt-coronet-6f',
            battles: [
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-f-mt-coronet-4',
                    x: 55.4,
                    y: 40,
                },
            ],
        },
    ],
};

export default MT_CORONET;
