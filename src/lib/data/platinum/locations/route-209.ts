import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
    route209,
} from '@/lib/data/platinum/maps';
import { BattleMetadata, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_209: Location = {
    name: 'Route 209',
    subareas: [
        {
            name: 'Main',
            map: route209,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'sinnoh-route-209',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-breeder-m-albert',
                    x: 16.6,
                    y: 81.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'jogger-richard',
                    x: 44.5,
                    y: 74,
                },
                {
                    metadata: [BattleMetadata.TrueDouble],
                    customWidth: 36,
                    battleKey: 'twins-emma-and-lil',
                    x: 51.5,
                    y: 74.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'poke-kid-danielle',
                    x: 63,
                    y: 77,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'jogger-raul',
                    x: 71.7,
                    y: 66.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-breeder-f-jennifer',
                    x: 66.2,
                    y: 60.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'cowgirl-shelley',
                    x: 75.5,
                    y: 30.1,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    battleKey: 'young-couple-ty-and-sue',
                    x: 74.2,
                    y: 18.4,
                },
            ],
        },
        {
            name: 'Tower 1F',
            map: lostTower1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-1f',
        },
        {
            name: 'Tower 2F',
            map: lostTower2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-2f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'youngster-oliver',
                    x: 57.75,
                    y: 62,
                },
            ],
        },
        {
            name: 'Tower 3F',
            map: lostTower3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-3f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'roughneck-kirby',
                    x: 34.5,
                    y: 92,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pokefan-m-leonard',
                    x: 50,
                    y: 37.5,
                    fieldCondition: FieldCondition.Fog,
                },
            ],
        },
        {
            name: 'Tower 4F',
            map: lostTower4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-4f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pokefan-f-rebekah',
                    x: 64.9,
                    y: 71.3,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customHeight: 40,
                    battleKey: 'belle-and-pa-beth-and-bob',
                    x: 96,
                    y: 87.5,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    battleKey: 'young-couple-mike-and-nat',
                    x: 30.5,
                    y: 57.5,
                    fieldCondition: FieldCondition.Fog,
                },
            ],
        },
        {
            name: 'Tower 5F',
            map: lostTower5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lost-tower-5f',
        },
    ],
};

export default ROUTE_209;
