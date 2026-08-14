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
                    battleKey: 'galactic-grunt-f-1',
                    x: 62,
                    y: 23.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-7',
                    x: 14,
                    y: 47.2,
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
                    battleKey: 'galactic-grunt-m-8',
                    x: 23.7,
                    y: 33.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-9',
                    x: 53.8,
                    y: 30.6,
                },
            ],
        },
        {
            name: 'Tunnel',
            map: mtCoronetTunnel,
            encountersKey: 'mt-coronet-1f-from-exterior',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-10',
                    x: 10.9,
                    y: 76.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-f-2',
                    x: 79.5,
                    y: 65.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-11',
                    x: 63.9,
                    y: 15.6,
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
                    battleKey: 'galactic-grunt-f-3',
                    x: 73.3,
                    y: 67.8,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-12',
                    x: 44.8,
                    y: 84,
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
                    battleKey: 'galactic-grunt-f-4',
                    x: 55.6,
                    y: 50.8,
                },
            ],
        },
    ],
};

export default MT_CORONET;
