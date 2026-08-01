import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
    route209,
} from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_209: Location = {
    name: 'Route 209',
    subareas: [
        {
            name: 'Main',
            map: route209,
            encountersKey: 'sinnoh-route-209',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'pkmn-breeder-m::Albert',
                    x: 16.6,
                    y: 81.2,
                },
                {
                    isOptional: true,
                    battleKey: 'jogger::Richard',
                    x: 44.5,
                    y: 74,
                },
                {
                    isTrueDouble: true,
                    customWidth: 36,
                    battleKey: 'twins::Emma & Lil',
                    x: 51.5,
                    y: 74.2,
                },
                {
                    isOptional: true,
                    battleKey: 'poke-kid::Danielle',
                    x: 63,
                    y: 77,
                },
                {
                    isOptional: true,
                    battleKey: 'jogger::Raul',
                    x: 71.7,
                    y: 66.2,
                },
                {
                    isOptional: true,
                    battleKey: 'pkmn-breeder-f::Jennifer',
                    x: 66.2,
                    y: 60.7,
                },
                {
                    isOptional: true,
                    battleKey: 'cowgirl::Shelley',
                    x: 75.5,
                    y: 30.1,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customWidth: 36,
                    battleKey: 'young-couple::Ty & Sue',
                    x: 74.2,
                    y: 18.4,
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
                    isOptional: true,
                    battleKey: 'youngster::Oliver',
                    x: 57.75,
                    y: 62,
                },
            ],
        },
        {
            name: 'Tower 3F',
            map: lostTower3f,
            encountersKey: 'lost-tower-3f',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'roughneck::Kirby',
                    x: 34.5,
                    y: 92,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    isOptional: true,
                    battleKey: 'pokefan-m::Leonard',
                    x: 50,
                    y: 37.5,
                    fieldCondition: FieldCondition.Fog,
                },
            ],
        },
        {
            name: 'Tower 4F',
            map: lostTower4f,
            encountersKey: 'lost-tower-4f',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'pokefan-f::Rebekah',
                    x: 64.9,
                    y: 71.3,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customHeight: 40,
                    battleKey: 'belle-and-pa::Beth & Bob',
                    x: 96,
                    y: 87.5,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customWidth: 36,
                    battleKey: 'young-couple::Mike & Nat',
                    x: 30.5,
                    y: 57.5,
                    fieldCondition: FieldCondition.Fog,
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
