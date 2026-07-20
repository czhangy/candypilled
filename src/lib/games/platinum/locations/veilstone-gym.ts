import { veilstoneGym } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    battles: [
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Colby',
            team: [
                {
                    name: 'Machoke',
                    ability: 1,
                    level: 23,
                    moves: ['Karate Chop', 'Leer', 'Foresight'],
                    nature: Nature.Mild,
                    ivs: 4,
                },
                {
                    name: 'Machoke',
                    ability: 1,
                    level: 25,
                    moves: ['Low Kick', 'Foresight'],
                    nature: Nature.Gentle,
                    ivs: 4,
                },
                {
                    name: 'Machoke',
                    ability: 1,
                    level: 27,
                    moves: ['Submission', 'Leer', 'Foresight'],
                    nature: Nature.Calm,
                    ivs: 4,
                },
            ],
            x: 59.8,
            y: 70,
        },
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Darren',
            team: [
                {
                    name: 'Machop',
                    ability: 1,
                    level: 25,
                    moves: ['Karate Chop', 'Foresight'],
                    nature: Nature.Gentle,
                    ivs: 4,
                },
                {
                    name: 'Meditite',
                    ability: 1,
                    level: 25,
                    moves: ['Confusion', 'Force Palm'],
                    nature: Nature.Hardy,
                    ivs: 4,
                },
                {
                    name: 'Machoke',
                    ability: 1,
                    level: 25,
                    moves: ['Karate Chop', 'Foresight'],
                    nature: Nature.Hardy,
                    ivs: 4,
                },
            ],
            x: 63.7,
            y: 42.8,
        },
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Rafael',
            team: [
                {
                    name: 'Croagunk',
                    ability: 1,
                    level: 26,
                    moves: ['Swagger', 'Revenge', 'Feint Attack'],
                    nature: Nature.Serious,
                    ivs: 4,
                },
                {
                    name: 'Machoke',
                    ability: 1,
                    level: 26,
                    moves: ['Karate Chop', 'Foresight'],
                    nature: Nature.Bold,
                    ivs: 4,
                },
            ],
            x: 43.8,
            y: 42.3,
        },
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Jeffery',
            team: [
                {
                    name: 'Heracross',
                    ability: 1,
                    level: 28,
                    moves: ['Brick Break', 'Aerial Ace', 'Leer'],
                    nature: Nature.Mild,
                    ivs: 4,
                },
            ],
            x: 7.8,
            y: 30.4,
        },
        {
            isBoss: true,
            trainerClass: 'Leader',
            name: 'Maylene',
            team: [
                {
                    name: 'Meditite',
                    ability: 1,
                    level: 28,
                    moves: [
                        'Drain Punch',
                        'Confusion',
                        'Rock Tomb',
                        'Fake Out',
                    ],
                    nature: Nature.Brave,
                    ivs: 24,
                },
                {
                    name: 'Machoke',
                    ability: 1,
                    level: 29,
                    moves: [
                        'Karate Chop',
                        'Rock Tomb',
                        'Strength',
                        'Focus Energy',
                    ],
                    nature: Nature.Naughty,
                    ivs: 24,
                },
                {
                    name: 'Lucario',
                    ability: 1,
                    level: 32,
                    moves: [
                        'Drain Punch',
                        'Force Palm',
                        'Metal Claw',
                        'Bone Rush',
                    ],
                    nature: Nature.Hasty,
                    ivs: 24,
                },
            ],
            x: 48,
            y: 13,
        },
    ],
};

export default VEILSTONE_GYM;
