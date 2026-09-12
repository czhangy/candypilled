import {
    mtPyre1f,
    mtPyre2f,
    mtPyre3f,
    mtPyre4f,
    mtPyre5f,
    mtPyre6f,
    mtPyreExterior,
    mtPyreSummitAqua,
    mtPyreSummitMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_PYRE: Location = {
    name: 'Mt. Pyre',
    subareas: [
        {
            name: '1F',
            map: mtPyre1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-1f',
        },
        {
            name: '2F',
            map: mtPyre2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-2f',
            battles: [
                { battleKey: 'poke-maniac-mark', x: 49.52, y: 48.08 },
                {
                    battleKey: 'young-couple-dez-and-luke',
                    x: 22.6,
                    y: 62.98,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
            ],
        },
        {
            name: '3F',
            map: mtPyre3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-3f',
            battles: [
                { battleKey: 'psychic-f-kayla', x: 96.15, y: 55.77 },
                { battleKey: 'psychic-m-william', x: 11.06, y: 32.69 },
            ],
        },
        {
            name: '4F',
            map: mtPyre4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-4f',
            battles: [{ battleKey: 'black-belt-atsushi', x: 88.46, y: 55.77 }],
        },
        {
            name: '5F',
            map: mtPyre5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-5f',
            battles: [{ battleKey: 'hex-maniac-tasha', x: 26.44, y: 55.77 }],
        },
        {
            name: '6F',
            map: mtPyre6f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-6f',
            battles: [{ battleKey: 'hex-maniac-valerie', x: 49.52, y: 25.48 }],
        },
        {
            name: 'Exterior',
            map: mtPyreExterior,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-outside',
        },
        {
            name: 'Summit',
            map: {
                Ruby: mtPyreSummitMagma,
                Sapphire: mtPyreSummitAqua,
            },
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-summit',
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-1',
                    game: 'Sapphire',
                    x: 42.88,
                    y: 49.49,
                },
                {
                    battleKey: 'team-magma-grunt-m-mt-pyre-summit-1',
                    game: 'Ruby',
                    x: 42.88,
                    y: 49.49,
                },
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-2',
                    game: 'Sapphire',
                    x: 51,
                    y: 41.39,
                },
                {
                    battleKey: 'team-magma-grunt-m-mt-pyre-summit-2',
                    game: 'Ruby',
                    x: 51,
                    y: 41.39,
                },
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-3',
                    game: 'Sapphire',
                    x: 42.88,
                    y: 30.24,
                },
                {
                    battleKey: 'team-magma-grunt-m-mt-pyre-summit-3',
                    game: 'Ruby',
                    x: 42.88,
                    y: 30.24,
                },
            ],
        },
    ],
};

export default MT_PYRE;
