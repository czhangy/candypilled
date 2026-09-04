import {
    route222,
    route222PikachuFanClub,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    subareas: [
        {
            name: 'Main',
            map: route222,
            encountersKey: 'route-222',
            battles: [
                {
                    battleKey: 'rich-boy-trey',
                    x: 16.1,
                    y: 43.9,
                },
                {
                    battleKey: 'beauty-nicola',
                    x: 37,
                    y: 28.5,
                },
                {
                    battleKey: 'policeman-thomas',
                    x: 60.9,
                    y: 31.5,
                },
                {
                    battleKey: 'fisherman-alec',
                    x: 26.6,
                    y: 65.9,
                },
                {
                    battleKey: 'fisherman-george',
                    x: 34.9,
                    y: 65.9,
                },
                {
                    battleKey: 'fisherman-brett',
                    x: 48.5,
                    y: 69,
                },
                {
                    battleKey: 'fisherman-cole',
                    x: 68.2,
                    y: 72.1,
                },
                {
                    battleKey: 'tuber-f-holly',
                    x: 53.6,
                    y: 63.2,
                },
                {
                    battleKey: 'sailor-marc',
                    x: 75.5,
                    y: 40.7,
                },
                {
                    battleKey: 'tuber-m-conner',
                    x: 79.8,
                    y: 40.7,
                },
                {
                    battleKey: 'sailor-luther',
                    x: 81.8,
                    y: 53.4,
                },
            ],
        },
        {
            name: 'Pikachu Fan Club',
            map: route222PikachuFanClub,
            battles: [
                {
                    battleKey: 'poke-kid-janet',
                    x: 38.2,
                    y: 8.8,
                },
            ],
        },
    ],
};

export default ROUTE_222;
