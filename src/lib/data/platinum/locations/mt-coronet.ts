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
} from '@/lib/data/platinum/maps';
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
        { name: 'B1F', map: mtCoronetB1f, encountersKey: 'mt-coronet-b1f' },
        {
            name: '1F (216)',
            map: mtCoronet1f216,
            encountersKey: 'mt-coronet-1f-route-216',
        },
        { name: '2F', map: mtCoronet2f, encountersKey: 'mt-coronet-2f' },
        {
            name: '3F',
            map: mtCoronet3f,
            encountersKey: 'mt-coronet-3f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-f-9',
                    x: 63.2,
                    y: 27.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-24',
                    x: 10.3,
                    y: 48.2,
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
                    battleKey: 'galactic-grunt-m-25',
                    x: 23.7,
                    y: 33.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-26',
                    x: 53.8,
                    y: 30.5,
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
                    battleKey: 'galactic-grunt-m-27',
                    x: 11.8,
                    y: 77.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-f-10',
                    x: 79.2,
                    y: 60.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-28',
                    x: 64,
                    y: 19,
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
                    battleKey: 'galactic-grunt-f-11',
                    x: 73.2,
                    y: 68,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-29',
                    x: 44.9,
                    y: 83.9,
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
                    battleKey: 'galactic-grunt-f-12',
                    x: 55.7,
                    y: 51,
                },
            ],
        },
    ],
};

export default MT_CORONET;
