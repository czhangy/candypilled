import {
    trickHousePuzzle1,
    trickHousePuzzle2,
    trickHousePuzzle3,
    trickHousePuzzle4,
    trickHousePuzzle5,
    trickHousePuzzle6,
    trickHousePuzzle7,
} from '@/lib/data/ruby-sapphire/maps';
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
                    x: 90,
                    y: 97.02,
                },
                {
                    battleKey: 'lass-robin',
                    x: 23.33,
                    y: 37.93,
                },
                {
                    battleKey: 'youngster-eddie',
                    x: 90,
                    y: 33.38,
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
                    x: 90,
                    y: 74.29,
                },
                {
                    battleKey: 'school-kid-m-paul',
                    x: 3.33,
                    y: 47.02,
                },
                {
                    battleKey: 'school-kid-f-georgia',
                    x: 63.33,
                    y: 33.38,
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
                    x: 70,
                    y: 74.29,
                },
                {
                    battleKey: 'picnicker-martha',
                    x: 10,
                    y: 60.65,
                },
                {
                    battleKey: 'hiker-alan',
                    x: 76.67,
                    y: 19.74,
                },
            ],
        },
        {
            name: 'Puzzle 4',
            map: trickHousePuzzle4,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'black-belt-yuji',
                    x: 50,
                    y: 19.74,
                },
                {
                    battleKey: 'battle-girl-cora',
                    x: 83.33,
                    y: 37.93,
                },
                {
                    battleKey: 'battle-girl-jill',
                    x: 70,
                    y: 19.74,
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
                    x: 70,
                    y: 42.47,
                },
                {
                    battleKey: 'pkmn-ranger-m-sebastian',
                    x: 3.33,
                    y: 15.2,
                },
                {
                    battleKey: 'bird-keeper-benny',
                    x: 96.67,
                    y: 56.11,
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
                    x: 3.33,
                    y: 15.2,
                },
                {
                    battleKey: 'hex-maniac-patricia',
                    x: 63.33,
                    y: 47.02,
                },
                {
                    battleKey: 'psychic-f-alexis',
                    x: 96.67,
                    y: 15.2,
                },
            ],
        },
    ],
};

export default TRICK_HOUSE;
