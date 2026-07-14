import { route203 } from '@/lib/games/platinum/splits/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    encountersKey: 'sinnoh-route-203',
    battles: [
        {
            isMiniboss: true,
            trainerClass: 'PKMN Trainer',
            name: 'Barry 2',
            teamsByStarter: {
                Turtwig: [
                    {
                        name: 'Starly',
                        level: 7,
                        moves: ['Quick Attack', 'Growl'],
                        nature: Nature.Naughty,
                        ivs: 3,
                    },
                    {
                        name: 'Chimchar',
                        level: 9,
                        moves: ['Scratch', 'Leer'],
                        nature: Nature.Docile,
                        ivs: 3,
                    },
                ],
                Chimchar: [
                    {
                        name: 'Starly',
                        level: 7,
                        moves: ['Quick Attack', 'Growl'],
                        nature: Nature.Naive,
                        ivs: 3,
                    },
                    {
                        name: 'Piplup',
                        level: 9,
                        moves: ['Pound', 'Growl'],
                        nature: Nature.Naughty,
                        ivs: 3,
                    },
                ],
                Piplup: [
                    {
                        name: 'Starly',
                        level: 7,
                        moves: ['Quick Attack', 'Growl'],
                        nature: Nature.Timid,
                        ivs: 3,
                    },
                    {
                        name: 'Turtwig',
                        level: 9,
                        moves: ['Tackle', 'Withdraw'],
                        nature: Nature.Brave,
                        ivs: 3,
                    },
                ],
            },
            x: 11.4,
            y: 78.2,
        },
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Michael',
            team: [
                {
                    name: 'Kricketot',
                    level: 7,
                    moves: ['Growl', 'Bide'],
                    nature: Nature.Mild,
                },
                {
                    name: 'Zubat',
                    level: 6,
                    moves: ['Leech Life', 'Supersonic'],
                    nature: Nature.Careful,
                },
            ],
            x: 23,
            y: 51,
        },
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Dallas',
            team: [
                {
                    name: 'Shinx',
                    level: 8,
                    moves: ['Tackle', 'Leer'],
                    nature: Nature.Calm,
                },
            ],
            x: 52.5,
            y: 68,
        },
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Sebastian',
            team: [
                {
                    name: 'Machop',
                    level: 8,
                    moves: ['Low Kick', 'Leer', 'Focus Energy'],
                    nature: Nature.Relaxed,
                },
            ],
            x: 72.3,
            y: 65.5,
        },
        {
            isOptional: true,
            trainerClass: 'Lass',
            name: 'Kaitlin',
            team: [
                {
                    name: 'Bidoof',
                    level: 4,
                    moves: ['Tackle'],
                    nature: Nature.Rash,
                },
                {
                    name: 'Budew',
                    level: 4,
                    moves: ['Absorb', 'Growth'],
                    nature: Nature.Mild,
                },
                {
                    name: 'Starly',
                    level: 4,
                    moves: ['Tackle', 'Growl'],
                    nature: Nature.Quirky,
                },
                {
                    name: 'Abra',
                    level: 4,
                    moves: ['Teleport'],
                    nature: Nature.Docile,
                },
            ],
            x: 85.2,
            y: 62,
        },
        {
            isOptional: true,
            trainerClass: 'Lass',
            name: 'Madeline',
            team: [
                {
                    name: 'Psyduck',
                    level: 8,
                    moves: ['Water Sport', 'Scratch', 'Tail Whip'],
                    nature: Nature.Relaxed,
                },
            ],
            x: 82,
            y: 35,
        },
    ],
};

export default ROUTE_203;
