import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
    route209Main,
} from '@/lib/data/diamond-pearl/maps';
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
                    battleKey: 'pkmn-breeder-m-albert',
                    x: 16.5,
                    y: 82.8,
                },
                {
                    battleKey: 'jogger-richard',
                    x: 44.6,
                    y: 68.7,
                },
                {
                    customWidth: 36,
                    battleKey: 'twins-emma-and-lil',
                    x: 51.7,
                    y: 75.3,
                },
                {
                    battleKey: 'poke-kid-danielle',
                    x: 63.2,
                    y: 78.4,
                },
                {
                    battleKey: 'jogger-raul',
                    x: 77.3,
                    y: 67.3,
                },
                {
                    battleKey: 'pkmn-breeder-f-jennifer',
                    x: 66.3,
                    y: 60.9,
                },
                {
                    battleKey: 'cowgirl-shelley',
                    x: 75.7,
                    y: 28.1,
                },
                {
                    customHeight: 45,
                    battleKey: 'young-couple-ty-and-sue',
                    x: 77.5,
                    y: 19.7,
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
                    x: 57.9,
                    y: 60.6,
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
                    x: 34.9,
                    y: 92.4,
                },
                {
                    battleKey: 'pokefan-m-leonard',
                    x: 50.7,
                    y: 27.3,
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
                    x: 65.1,
                    y: 68.7,
                },
                {
                    customHeight: 45,
                    battleKey: 'belle-and-pa-beth-and-bob',
                    x: 96.2,
                    y: 87.9,
                },
                {
                    customWidth: 36,
                    battleKey: 'young-couple-mike-and-nat',
                    x: 30.6,
                    y: 51.5,
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
