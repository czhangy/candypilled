import { oreburghGym } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    battles: [
        {
            isOptional: true,
            trainerClass: 'youngster',
            name: 'Jonathon',
            team: [
                {
                    slug: 'geodude',
                    ability: 1,
                    gender: 'male',
                    level: 11,
                    moves: ['tackle', 'defense-curl'],
                    nature: Nature.Timid,
                    ivs: 1,
                },
            ],
            x: 40,
            y: 77.3,
        },
        {
            isOptional: true,
            trainerClass: 'youngster',
            name: 'Darius',
            team: [
                {
                    slug: 'geodude',
                    ability: 1,
                    gender: 'male',
                    level: 9,
                    moves: ['tackle', 'defense-curl'],
                    nature: Nature.Calm,
                    ivs: 1,
                },
                {
                    slug: 'onix',
                    ability: 1,
                    gender: 'male',
                    level: 9,
                    moves: ['rock-throw', 'tackle', 'harden'],
                    nature: Nature.Bashful,
                    ivs: 1,
                },
            ],
            x: 59,
            y: 51.6,
        },
        {
            isBoss: true,
            trainerClass: 'leader-roark',
            name: 'Roark',
            team: [
                {
                    slug: 'geodude',
                    ability: 1,
                    gender: 'male',
                    level: 12,
                    moves: ['stealth-rock', 'rock-throw'],
                    nature: Nature.Lax,
                    ivs: 6,
                },
                {
                    slug: 'onix',
                    ability: 1,
                    gender: 'male',
                    level: 12,
                    moves: ['stealth-rock', 'rock-throw', 'screech'],
                    nature: Nature.Bold,
                    ivs: 6,
                },
                {
                    slug: 'cranidos',
                    ability: 1,
                    gender: 'male',
                    level: 14,
                    moves: ['headbutt', 'pursuit', 'leer'],
                    nature: Nature.Jolly,
                    ivs: 6,
                },
            ],
            items: [{ count: 2, name: 'Potion' }],
            x: 46.6,
            y: 22.8,
        },
    ],
};

export default OREBURGH_GYM;
