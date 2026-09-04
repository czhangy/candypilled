import {
    route222,
    route222PikachuFanClub,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    subareas: [
        {
            name: 'Main',
            map: route222,
            encountersKey: 'sinnoh-route-222',
            battles: [
                {
                    battleKey: 'rich-boy-trey',
                    x: 16.2,
                    y: 43.9,
                },
                {
                    battleKey: 'fisherman-alec',
                    x: 26.6,
                    y: 65.8,
                },
                {
                    battleKey: 'fisherman-george',
                    x: 34.9,
                    y: 65.8,
                },
                {
                    battleKey: 'beauty-nicola',
                    x: 37,
                    y: 28.3,
                },
                {
                    battleKey: 'fisherman-brett',
                    x: 43.2,
                    y: 68.8,
                },
                {
                    battleKey: 'fisherman-cole',
                    x: 48.4,
                    y: 69,
                },
                {
                    battleKey: 'tuber-f-holly',
                    x: 53.6,
                    y: 63.1,
                },
                {
                    battleKey: 'policeman-thomas',
                    x: 60.9,
                    y: 31.5,
                },
                {
                    battleKey: 'sailor-marc',
                    x: 75.6,
                    y: 40.9,
                },
                {
                    battleKey: 'tuber-m-conner',
                    x: 79.7,
                    y: 40.7,
                },
                {
                    battleKey: 'sailor-luther',
                    x: 81.8,
                    y: 53.2,
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
                    y: 9.5,
                },
            ],
        },
    ],
};

export default ROUTE_222;
