import { oreburghGym } from '@/lib/games/platinum/splits/maps';
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
                    level: 11,
                    moves: [
                        'Tackle',
                        'Defense Curl',
                        'Rock Polish',
                        'Rock Throw',
                    ],
                    nature: Nature.Timid,
                    ability: 'Rock Head',
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
                    level: 9,
                    moves: [
                        'Tackle',
                        'Defense Curl',
                        'Mud Sport',
                        'Rock Polish',
                    ],
                    nature: Nature.Calm,
                    ability: 'Rock Head',
                    ivs: 1,
                },
                {
                    name: 'Onix',
                    level: 9,
                    moves: ['Rock Throw', 'Tackle', 'Harden'],
                    nature: Nature.Bashful,
                    ability: 'Rock Head',
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
                    level: 12,
                    moves: ['Stealth Rock', 'Rock Throw'],
                    nature: Nature.Lax,
                    ability: 'Rock Head',
                    ivs: 6,
                },
                {
                    name: 'Onix',
                    level: 12,
                    moves: ['Stealth Rock', 'Rock Throw', 'Screech'],
                    nature: Nature.Bold,
                    ability: 'Rock Head',
                    ivs: 6,
                },
                {
                    name: 'Cranidos',
                    level: 14,
                    moves: ['Headbutt', 'Pursuit', 'Leer'],
                    nature: Nature.Jolly,
                    ability: 'Mold Breaker',
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
