import { route203 } from '@/lib/games/platinum/maps';
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
                turtwig: [
                    {
                        slug: 'starly',
                        ability: 1,
                        gender: 'male',
                        level: 7,
                        moves: ['quick-attack', 'growl'],
                        nature: Nature.Naughty,
                        ivs: 3,
                    },
                    {
                        slug: 'chimchar',
                        ability: 1,
                        gender: 'male',
                        level: 9,
                        moves: ['scratch', 'leer'],
                        nature: Nature.Docile,
                        ivs: 3,
                    },
                ],
                chimchar: [
                    {
                        slug: 'starly',
                        ability: 1,
                        gender: 'male',
                        level: 7,
                        moves: ['quick-attack', 'growl'],
                        nature: Nature.Naive,
                        ivs: 3,
                    },
                    {
                        slug: 'piplup',
                        ability: 1,
                        gender: 'male',
                        level: 9,
                        moves: ['pound', 'growl'],
                        nature: Nature.Naughty,
                        ivs: 3,
                    },
                ],
                piplup: [
                    {
                        slug: 'starly',
                        ability: 1,
                        gender: 'male',
                        level: 7,
                        moves: ['quick-attack', 'growl'],
                        nature: Nature.Timid,
                        ivs: 3,
                    },
                    {
                        slug: 'turtwig',
                        ability: 1,
                        gender: 'male',
                        level: 9,
                        moves: ['tackle', 'withdraw'],
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
                    slug: 'kricketot',
                    ability: 1,
                    gender: 'male',
                    level: 7,
                    nature: Nature.Mild,
                },
                {
                    slug: 'zubat',
                    ability: 1,
                    gender: 'male',
                    level: 6,
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
                    slug: 'shinx',
                    ability: 1,
                    gender: 'male',
                    level: 8,
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
                    slug: 'machop',
                    ability: 1,
                    gender: 'male',
                    level: 8,
                    moves: ['low-kick', 'leer'],
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
                    slug: 'bidoof',
                    ability: 1,
                    gender: 'female',
                    level: 4,
                    nature: Nature.Rash,
                },
                {
                    slug: 'budew',
                    ability: 1,
                    gender: 'female',
                    level: 4,
                    nature: Nature.Mild,
                },
                {
                    slug: 'starly',
                    ability: 1,
                    gender: 'female',
                    level: 4,
                    nature: Nature.Quirky,
                },
                {
                    slug: 'abra',
                    ability: 1,
                    gender: 'female',
                    level: 4,
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
                    slug: 'psyduck',
                    ability: 1,
                    gender: 'female',
                    level: 8,
                    nature: Nature.Relaxed,
                },
            ],
            x: 82,
            y: 35,
        },
    ],
};

export default ROUTE_203;
