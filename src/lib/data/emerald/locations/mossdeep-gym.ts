import { mossdeepGym } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MOSSDEEP_GYM: Location = {
    name: 'Mossdeep Gym',
    map: mossdeepGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'psychic-m-preston',
            x: 5.77,
            y: 84.29,
        },
        {
            battleKey: 'psychic-f-maura',
            x: 17.31,
            y: 81.51,
        },
        {
            battleKey: 'psychic-f-samantha',
            x: 17.31,
            y: 64.84,
        },
        {
            battleKey: 'psychic-m-blake',
            x: 21.15,
            y: 56.51,
        },
        {
            battleKey: 'psychic-f-macey',
            x: 98.08,
            y: 70.4,
        },
        {
            battleKey: 'gentleman-clifford',
            x: 86.54,
            y: 70.4,
        },
        {
            battleKey: 'hex-maniac-kathleen',
            x: 86.54,
            y: 64.84,
        },
        {
            battleKey: 'psychic-m-nicholas',
            x: 98.08,
            y: 62.07,
        },
        {
            battleKey: 'gentleman-nate',
            x: 36.54,
            y: 23.18,
        },
        {
            battleKey: 'psychic-m-virgil',
            x: 25.0,
            y: 25.95,
        },
        {
            battleKey: 'hex-maniac-sylvia',
            x: 28.85,
            y: 14.84,
        },
        {
            battleKey: 'psychic-f-hannah',
            x: 25.0,
            y: 9.29,
        },
        {
            battleKey: 'leader-tate-and-liza',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 92.31,
            y: 20.4,
        },
    ],
};

export default MOSSDEEP_GYM;
