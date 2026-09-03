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
                    battleKey: 'pkmn-breeder-m-albert',
                    x: 16.6,
                    y: 81.2,
                },
                {
                    battleKey: 'jogger-richard',
                    x: 44.5,
                    y: 74,
                },
                {
                    customWidth: 36,
                    battleKey: 'twins-emma-and-lil',
                    x: 51.5,
                    y: 74.2,
                },
                {
                    battleKey: 'poke-kid-danielle',
                    x: 63,
                    y: 77,
                },
                {
                    battleKey: 'jogger-raul',
                    x: 71.7,
                    y: 66.2,
                },
                {
                    battleKey: 'pkmn-breeder-f-jennifer',
                    x: 66.2,
                    y: 60.7,
                },
                {
                    battleKey: 'cowgirl-shelley',
                    x: 75.5,
                    y: 30.1,
                },
                {
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
            encountersKey: 'lost-tower-1f',
        },
        {
            name: 'Tower 2F',
            map: lostTower2f,
            encountersKey: 'lost-tower-2f',
            battles: [
                {
                    battleKey: 'youngster-oliver',
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
                    battleKey: 'roughneck-kirby',
                    x: 34.5,
                    y: 92,
                    fieldCondition: FieldCondition.Fog,
                },
                {
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
            encountersKey: 'lost-tower-4f',
            battles: [
                {
                    battleKey: 'pokefan-f-rebekah',
                    x: 64.9,
                    y: 71.3,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    customHeight: 40,
                    battleKey: 'belle-and-pa-beth-and-bob',
                    x: 96,
                    y: 87.5,
                    fieldCondition: FieldCondition.Fog,
                },
                {
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
            encountersKey: 'lost-tower-5f',
        },
    ],
};

export default ROUTE_209;
