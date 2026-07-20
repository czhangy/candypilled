import { hearthomeGym } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    battles: [
        {
            isOptional: true,
            trainerClass: 'Lass',
            name: 'Molly',
            team: [
                {
                    name: 'Misdreavus',
                    ability: 1,
                    level: 23,
                    nature: Nature.Hardy,
                    moves: ['Pain Split', 'Psybeam', 'Confuse Ray'],
                    ivs: 1,
                },
            ],
            x: 0,
            y: 0,
        },
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Donny',
            team: [
                {
                    name: 'Gastly',
                    ability: 1,
                    level: 20,
                    nature: Nature.Careful,
                    moves: [
                        'Sucker Punch',
                        'Night Shade',
                        'Confuse Ray',
                        'Curse',
                    ],
                    ivs: 1,
                },
                {
                    name: 'Drifloon',
                    ability: 1,
                    level: 22,
                    nature: Nature.Docile,
                    moves: ['Spit Up', 'Swallow', 'Stockpile'],
                    ivs: 1,
                },
            ],
            x: 0,
            y: 0,
        },
        {
            isOptional: true,
            trainerClass: 'School Kid F',
            name: 'Mackenzie',
            team: [
                {
                    name: 'Drifloon',
                    ability: 1,
                    level: 21,
                    nature: Nature.Quiet,
                    moves: ['Payback', 'Gust', 'Astonish', 'Minimize'],
                    ivs: 1,
                },
                {
                    name: 'Drifloon',
                    ability: 1,
                    level: 21,
                    nature: Nature.Quiet,
                    moves: ['Spit Up', 'Swallow', 'Stockpile'],
                    ivs: 1,
                },
            ],
            x: 0,
            y: 0,
            items: { count: 1, name: 'Super Potion' },
        },
        {
            isOptional: true,
            trainerClass: 'School Kid M',
            name: 'Chance',
            team: [
                {
                    name: 'Gastly',
                    ability: 1,
                    level: 23,
                    nature: Nature.Rash,
                    moves: [
                        'Night Shade',
                        'Sucker Punch',
                        'Confuse Ray',
                        'Hypnosis',
                    ],
                    ivs: 1,
                },
            ],
            x: 0,
            y: 0,
            items: { count: 1, name: 'X Defend' },
        },
    ],
};

export default HEARTHOME_GYM;
