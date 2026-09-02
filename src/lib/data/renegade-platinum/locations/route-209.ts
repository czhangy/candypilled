import {
    route209Main,
    route209Tower1f,
    route209Tower2f,
    route209Tower3f,
    route209Tower4f,
    route209Tower5f,
} from '@/lib/data/renegade-platinum/maps';
import {
    GEN_4_TRUE_DOUBLE_HEIGHT,
    GEN_4_TRUE_DOUBLE_WIDTH,
} from '@/lib/static/constants';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_209: Location = {
    name: 'Route 209',
    subareas: [
        {
            name: 'Main',
            map: route209Main,
            encountersKey: 'sinnoh-route-209',
            battles: [
                {
                    battleKey: 'jogger-richard',
                    metadata: [BattleMetadata.Optional],
                    x: 44.6,
                    y: 68.8,
                },
                {
                    battleKey: 'twins-ema-and-lil',
                    metadata: [BattleMetadata.TrueDouble],
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    x: 51.6,
                    y: 75.4,
                },
                {
                    battleKey: 'poke-kid-danielle',
                    metadata: [BattleMetadata.Optional],
                    x: 63.2,
                    y: 78.6,
                },
                {
                    battleKey: 'pkmn-breeder-albert',
                    metadata: [BattleMetadata.Optional],
                    x: 55.5,
                    y: 68.8,
                },
                {
                    battleKey: 'pkmn-breeder-jennifer',
                    metadata: [BattleMetadata.Optional],
                    x: 66.4,
                    y: 61,
                },
                {
                    battleKey: 'jogger-raul',
                    metadata: [BattleMetadata.Optional],
                    x: 77.3,
                    y: 67.2,
                },
                {
                    battleKey: 'cowgirl-shelley',
                    metadata: [BattleMetadata.Optional],
                    x: 75.8,
                    y: 28.2,
                },
                {
                    battleKey: 'young-couple-ty-and-sue',
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 77.4,
                    y: 19.7,
                },
            ],
        },
        {
            name: 'Tower 1F',
            map: route209Tower1f,
            encountersKey: 'sinnoh-route-209-tower',
        },
        {
            name: 'Tower 2F',
            map: route209Tower2f,
            encountersKey: 'sinnoh-route-209-tower',
            battles: [
                {
                    battleKey: 'youngster-oliver',
                    metadata: [BattleMetadata.Optional],
                    x: 43.7,
                    y: 57.5,
                },
            ],
        },
        {
            name: 'Tower 3F',
            map: route209Tower3f,
            encountersKey: 'sinnoh-route-209-tower',
            battles: [
                {
                    battleKey: 'roughneck-kirby',
                    metadata: [BattleMetadata.Optional],
                    x: 26.4,
                    y: 87.8,
                },
                {
                    battleKey: 'pokefan-leonard',
                    metadata: [BattleMetadata.Optional],
                    x: 38.6,
                    y: 26.8,
                },
            ],
        },
        {
            name: 'Tower 4F',
            map: route209Tower4f,
            encountersKey: 'sinnoh-route-209-tower',
            battles: [
                {
                    battleKey: 'pokefan-rebekah',
                    metadata: [BattleMetadata.Optional],
                    x: 50,
                    y: 65.2,
                },
                {
                    battleKey: 'belle-and-pa-beth-and-bob',
                    metadata: [BattleMetadata.Optional],
                    customHeight: 48,
                    x: 73.6,
                    y: 83.8,
                },
                {
                    battleKey: 'young-couple-mike-and-nat',
                    metadata: [BattleMetadata.Optional],
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    x: 23.1,
                    y: 49.4,
                },
            ],
        },
        {
            name: 'Tower 5F',
            map: route209Tower5f,
            encountersKey: 'sinnoh-route-209-tower',
        },
    ],
};

export default ROUTE_209;
