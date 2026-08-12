import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
    route209Main,
} from '@/lib/data/diamond-pearl/maps';
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
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-breeder-m-albert',
                    x: 16.5,
                    y: 81.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'jogger-richard',
                    x: 41.3,
                    y: 78.2,
                },
                {
                    metadata: [BattleMetadata.TrueDouble],
                    customWidth: 36,
                    battleKey: 'twins-emma-and-lil',
                    x: 51.6,
                    y: 74.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'poke-kid-danielle',
                    x: 63.1,
                    y: 77,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'jogger-raul',
                    x: 71.4,
                    y: 66.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-breeder-f-jennifer',
                    x: 66.4,
                    y: 60.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'cowgirl-shelley',
                    x: 75.8,
                    y: 30.1,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    battleKey: 'young-couple-ty-and-sue',
                    x: 74.6,
                    y: 18.6,
                },
            ],
        },
        {
            name: 'Tower 1F',
            map: lostTower1f,
            encountersKey: 'lost-tower-1f',
        },
        {
            name: 'Tower 2F',
            map: lostTower2f,
            encountersKey: 'lost-tower-2f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'youngster-oliver',
                    x: 57.5,
                    y: 64.6,
                },
            ],
        },
        {
            name: 'Tower 3F',
            map: lostTower3f,
            encountersKey: 'lost-tower-3f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'roughneck-kirby',
                    x: 34.3,
                    y: 91,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pokefan-m-leonard',
                    x: 49.8,
                    y: 37.2,
                },
            ],
        },
        {
            name: 'Tower 4F',
            map: lostTower4f,
            encountersKey: 'lost-tower-4f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pokefan-f-rebekah',
                    x: 65.2,
                    y: 71.8,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customHeight: 45,
                    battleKey: 'belle-and-pa-beth-and-bob',
                    x: 96.1,
                    y: 87.7,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    battleKey: 'young-couple-mike-and-nat',
                    x: 30.4,
                    y: 58.1,
                },
            ],
        },
        {
            name: 'Tower 5F',
            map: lostTower5f,
            encountersKey: 'lost-tower-5f',
        },
    ],
};

export default ROUTE_209;
