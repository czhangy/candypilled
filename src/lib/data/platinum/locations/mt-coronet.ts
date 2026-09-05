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
} from '@/lib/data/platinum/maps';
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
                    battleKey: 'galactic-grunt-f-mt-coronet-1',
                    x: 62,
                    y: 19.7,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-1',
                    x: 10.1,
                    y: 43.2,
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
                    battleKey: 'galactic-grunt-m-mt-coronet-2',
                    x: 16.4,
                    y: 22.3,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-3',
                    x: 36.6,
                    y: 15.9,
                },
            ],
        },
        {
            name: 'Summit',
            map: mtCoronetSummit,
            encountersKey: 'mt-coronet-exterior-snowfall',
        },
        {
            name: 'Tunnel',
            map: mtCoronetTunnel,
            encountersKey: 'mt-coronet-1f-from-exterior',
            battles: [
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-4',
                    x: 10.9,
                    y: 75.2,
                },
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-2',
                    x: 79.5,
                    y: 48.6,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-5',
                    x: 64.1,
                    y: 11.2,
                },
            ],
        },

        {
            name: '5F',
            map: mtCoronet5f,
            encountersKey: 'mt-coronet-5f',
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-3',
                    x: 74.1,
                    y: 56.9,
                },
                {
                    battleKey: 'galactic-grunt-m-mt-coronet-6',
                    x: 45.5,
                    y: 78.7,
                },
            ],
        },
        {
            name: '6F',
            map: mtCoronet6f,
            encountersKey: 'mt-coronet-6f',
            battles: [
                {
                    battleKey: 'galactic-grunt-f-mt-coronet-4',
                    x: 55.6,
                    y: 39.9,
                },
            ],
        },
    ],
};

export default MT_CORONET;
