import { oreburghGym } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    battles: [
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Jonathon',
            team: [
                {
                    name: 'Geodude',
                    ability: 1,
                    level: 11,
                    moves: ['Tackle', 'Defense Curl'],
                    nature: Nature.Timid,
                    ivs: 1,
                },
            ],
            x: 40,
            y: 77.3,
        },
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Darius',
            team: [
                {
                    name: 'Geodude',
                    ability: 1,
                    level: 9,
                    moves: ['Tackle', 'Defense Curl'],
                    nature: Nature.Calm,
                    ivs: 1,
                },
                {
                    name: 'Onix',
                    ability: 1,
                    level: 9,
                    moves: ['Rock Throw', 'Tackle', 'Harden'],
                    nature: Nature.Bashful,
                    ivs: 1,
                },
            ],
            x: 59,
            y: 51.6,
        },
        {
            isBoss: true,
            trainerClass: 'Gym Leader',
            name: 'Roark',
            team: [
                {
                    name: 'Geodude',
                    ability: 1,
                    level: 12,
                    moves: ['Stealth Rock', 'Rock Throw'],
                    nature: Nature.Lax,
                    ivs: 6,
                },
                {
                    name: 'Onix',
                    ability: 1,
                    level: 12,
                    moves: ['Stealth Rock', 'Rock Throw', 'Screech'],
                    nature: Nature.Bold,
                    ivs: 6,
                },
                {
                    name: 'Cranidos',
                    ability: 1,
                    level: 14,
                    moves: ['Headbutt', 'Pursuit', 'Leer'],
                    nature: Nature.Jolly,
                    ivs: 6,
                },
            ],
            items: { count: 2, name: 'Potion' },
            x: 46.6,
            y: 22.8,
        },
    ],
};

export default OREBURGH_GYM;
