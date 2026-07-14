import { route203 } from '@/lib/assets/platinum/locations';
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
                        ability: 'Keen Eye',
                        ivs: 3,
                    },
                    {
                        name: 'Chimchar',
                        level: 9,
                        moves: ['Scratch', 'Leer'],
                        nature: Nature.Docile,
                        ability: 'Blaze',
                        ivs: 3,
                    },
                ],
                Chimchar: [
                    {
                        name: 'Starly',
                        level: 7,
                        moves: ['Quick Attack', 'Growl'],
                        nature: Nature.Naive,
                        ability: 'Keen Eye',
                        ivs: 3,
                    },
                    {
                        name: 'Piplup',
                        level: 9,
                        moves: ['Pound', 'Growl'],
                        nature: Nature.Naughty,
                        ability: 'Torrent',
                        ivs: 3,
                    },
                ],
                Piplup: [
                    {
                        name: 'Starly',
                        level: 7,
                        moves: ['Quick Attack', 'Growl'],
                        nature: Nature.Timid,
                        ability: 'Keen Eye',
                        ivs: 3,
                    },
                    {
                        name: 'Turtwig',
                        level: 9,
                        moves: ['Tackle', 'Withdraw'],
                        nature: Nature.Brave,
                        ability: 'Overgrow',
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
                    ability: 'Shed Skin',
                },
                {
                    name: 'Zubat',
                    level: 6,
                    moves: ['Leech Life', 'Supersonic'],
                    nature: Nature.Careful,
                    ability: 'Inner Focus',
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
                    ability: 'Rivalry',
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
                    ability: 'Guts',
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
                    ability: 'Simple',
                },
                {
                    name: 'Budew',
                    level: 4,
                    moves: ['Absorb', 'Growth'],
                    nature: Nature.Mild,
                    ability: 'Natural Cure',
                },
                {
                    name: 'Starly',
                    level: 4,
                    moves: ['Tackle', 'Growl'],
                    nature: Nature.Quirky,
                    ability: 'Keen Eye',
                },
                {
                    name: 'Abra',
                    level: 4,
                    moves: ['Teleport'],
                    nature: Nature.Docile,
                    ability: 'Synchronize',
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
                    ability: 'Damp',
                },
            ],
            x: 82,
            y: 35,
        },
    ],
};

export default ROUTE_203;
