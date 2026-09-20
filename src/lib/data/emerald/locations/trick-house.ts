import {
    trickHousePuzzle1,
    trickHousePuzzle2,
    trickHousePuzzle3,
    trickHousePuzzle4,
    trickHousePuzzle5,
    trickHousePuzzle6,
    trickHousePuzzle7,
} from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TRICK_HOUSE: Location = {
    name: 'Trick House',
    subareas: [
        {
            name: 'Puzzle 1',
            map: trickHousePuzzle1,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'lass-sally',
                    x: 96.67,
                    y: 92.47,
                },
                {
                    battleKey: 'youngster-eddie',
                    x: 96.67,
                    y: 37.93,
                },
                {
                    battleKey: 'lass-robin',
                    x: 16.67,
                    y: 69.74,
                },
            ],
        },
        {
            name: 'Puzzle 2',
            map: trickHousePuzzle2,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'school-kid-m-ted',
                    x: 90.0,
                    y: 47.02,
                },
                {
                    battleKey: 'school-kid-m-paul',
                    x: 70.0,
                    y: 78.84,
                },
                {
                    battleKey: 'school-kid-f-georgia',
                    x: 76.67,
                    y: 42.47,
                },
            ],
        },
        {
            name: 'Puzzle 3',
            map: trickHousePuzzle3,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'camper-justin',
                    x: 50.0,
                    y: 87.93,
                },
                {
                    battleKey: 'picnicker-martha',
                    x: 30.0,
                    y: 19.74,
                },
                {
                    battleKey: 'hiker-alan',
                    x: 70.0,
                    y: 47.02,
                },
            ],
        },
        {
            name: 'Puzzle 4',
            map: trickHousePuzzle4,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'battle-girl-cora',
                    x: 16.67,
                    y: 10.65,
                },
                {
                    battleKey: 'battle-girl-paula',
                    x: 96.67,
                    y: 33.38,
                },
                {
                    battleKey: 'black-belt-yuji',
                    x: 16.67,
                    y: 65.2,
                },
            ],
        },
        {
            name: 'Puzzle 5',
            map: trickHousePuzzle5,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Puzzle 6',
            map: trickHousePuzzle6,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'pkmn-ranger-f-sophia',
                    x: 50.0,
                    y: 42.47,
                },
                {
                    battleKey: 'bird-keeper-benny',
                    x: 76.67,
                    y: 47.02,
                },
                {
                    battleKey: 'pkmn-ranger-m-sebastian',
                    x: 30.0,
                    y: 24.29,
                },
            ],
        },
        {
            name: 'Puzzle 7',
            map: trickHousePuzzle7,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'psychic-m-joshua',
                    x: 63.33,
                    y: 92.47,
                },
                {
                    battleKey: 'psychic-f-alexis',
                    x: 70.0,
                    y: 10.65,
                },
                {
                    battleKey: 'hex-maniac-patricia',
                    x: 56.67,
                    y: 78.84,
                },
                {
                    battleKey: 'psychic-m-alvaro',
                    x: 63.33,
                    y: 10.65,
                },
                {
                    battleKey: 'psychic-f-mariela',
                    x: 56.67,
                    y: 60.65,
                },
                {
                    battleKey: 'gentleman-everett',
                    x: 63.33,
                    y: 56.11,
                },
            ],
        },
    ],
};

export default TRICK_HOUSE;
