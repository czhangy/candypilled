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
        },
        {
            name: 'Puzzle 2',
            map: trickHousePuzzle2,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Puzzle 3',
            map: trickHousePuzzle3,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Puzzle 4',
            map: trickHousePuzzle4,
            mapAnchor: MapAnchor.Center,
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
        },
        {
            name: 'Puzzle 7',
            map: trickHousePuzzle7,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default TRICK_HOUSE;
