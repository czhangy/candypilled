import { sootopolisGym1f, sootopolisGymB1f } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOOTOPOLIS_GYM: Location = {
    name: 'Sootopolis Gym',
    subareas: [
        {
            name: '1F',
            map: sootopolisGym1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'leader-juan',
                    x: 50.0,
                    y: 9.01,
                },
            ],
        },
        {
            name: 'B1F',
            map: sootopolisGymB1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'beauty-connie',
                    x: 55.88,
                    y: 74.4,
                },
                {
                    battleKey: 'lass-andrea',
                    x: 44.12,
                    y: 66.71,
                },
                {
                    battleKey: 'lady-daphne',
                    x: 38.24,
                    y: 51.32,
                },
                {
                    battleKey: 'pokefan-f-annika',
                    x: 61.76,
                    y: 51.32,
                },
                {
                    battleKey: 'beauty-tiffany',
                    x: 32.35,
                    y: 24.4,
                },
                {
                    battleKey: 'lass-crissy',
                    x: 26.47,
                    y: 32.09,
                },
                {
                    battleKey: 'pokefan-f-bethany',
                    x: 44.12,
                    y: 32.09,
                },
                {
                    battleKey: 'beauty-olivia',
                    x: 55.88,
                    y: 28.25,
                },
                {
                    battleKey: 'lady-brianna',
                    x: 73.53,
                    y: 28.25,
                },
                {
                    battleKey: 'beauty-bridget',
                    x: 67.65,
                    y: 35.94,
                },
            ],
        },
    ],
};

export default SOOTOPOLIS_GYM;
