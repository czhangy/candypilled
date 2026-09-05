import { route222Main, route222PikachuFanClub } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    subareas: [
        {
            name: 'Main',
            map: route222Main,
            encountersKey: 'sinnoh-route-222',
            battles: [
                {
                    battleKey: 'rich-boy-trey',
                    x: 16.08,
                    y: 44.08,
                },
                {
                    battleKey: 'fisherman-alec',
                    x: 26.5,
                    y: 65.76,
                },
                {
                    battleKey: 'fisherman-george',
                    x: 34.83,
                    y: 65.76,
                },
                {
                    battleKey: 'beauty-nicola',
                    x: 36.92,
                    y: 28.26,
                },
                {
                    battleKey: 'fisherman-brett',
                    x: 43.17,
                    y: 68.88,
                },
                {
                    battleKey: 'fisherman-cole',
                    x: 48.38,
                    y: 68.69,
                },
                {
                    battleKey: 'tuber-f-holly',
                    x: 53.66,
                    y: 63.48,
                },
                {
                    battleKey: 'policeman-thomas',
                    x: 60.9,
                    y: 31.33,
                },
                {
                    battleKey: 'sailor-marc',
                    x: 75.68,
                    y: 40.7,
                },
                {
                    battleKey: 'tuber-m-conner',
                    x: 79.78,
                    y: 41.09,
                },
                {
                    battleKey: 'sailor-luther',
                    x: 81.79,
                    y: 53.06,
                },
            ],
        },
        {
            name: 'Pikachu Fan Club',
            map: route222PikachuFanClub,
            battles: [
                {
                    battleKey: 'poke-kid-janet',
                    x: 37.5,
                    y: 9.05,
                },
            ],
        },
    ],
};

export default ROUTE_222;
