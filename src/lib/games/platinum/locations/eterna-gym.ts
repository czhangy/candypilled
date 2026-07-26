import { eternaGym } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    battles: [
        {
            trainerClass: 'Lass',
            name: 'Caroline',
            team: [
                {
                    slug: 'cherubi',
                    ability: 1,
                    gender: 'female',
                    level: 17,
                    nature: Nature.Lonely,
                    moves: ['tackle', 'leech-seed'],
                    ivs: 2,
                },
                {
                    slug: 'roselia',
                    ability: 1,
                    gender: 'female',
                    level: 17,
                    nature: Nature.Sassy,
                    moves: ['mega-drain', 'poison-sting', 'stun-spore'],
                    ivs: 2,
                },
            ],
            x: 64.6,
            y: 79.6,
        },
        {
            trainerClass: 'Aroma Lady',
            name: 'Jenna',
            team: [
                {
                    slug: 'budew',
                    ability: 1,
                    gender: 'female',
                    level: 15,
                    nature: Nature.Naive,
                    moves: ['absorb', 'stun-spore', 'water-sport'],
                    ivs: 2,
                },
                {
                    slug: 'budew',
                    ability: 1,
                    gender: 'female',
                    level: 16,
                    nature: Nature.Serious,
                    moves: ['absorb', 'stun-spore', 'water-sport'],
                    ivs: 2,
                },
                {
                    slug: 'budew',
                    ability: 1,
                    gender: 'female',
                    level: 17,
                    nature: Nature.Hardy,
                    moves: ['absorb', 'stun-spore', 'water-sport'],
                    ivs: 2,
                },
            ],
            x: 92.8,
            y: 62.8,
        },
        {
            trainerClass: 'Aroma Lady',
            name: 'Angela',
            team: [
                {
                    slug: 'roselia',
                    ability: 1,
                    gender: 'female',
                    level: 19,
                    nature: Nature.Mild,
                    moves: ['mega-drain', 'poison-sting', 'stun-spore'],
                    ivs: 2,
                },
            ],
            x: 7.2,
            y: 30.5,
        },
        {
            isBoss: true,
            trainerClass: 'Leader',
            name: 'Gardenia',
            team: [
                {
                    slug: 'turtwig',
                    ability: 1,
                    gender: 'female',
                    level: 20,
                    nature: Nature.Quirky,
                    moves: ['grass-knot', 'razor-leaf', 'sunny-day', 'reflect'],
                    ivs: 6,
                },
                {
                    slug: 'cherrim',
                    ability: 1,
                    gender: 'female',
                    level: 20,
                    nature: Nature.Lax,
                    moves: [
                        'grass-knot',
                        'leech-seed',
                        'magical-leaf',
                        'safeguard',
                    ],
                    ivs: 6,
                },
                {
                    slug: 'roserade',
                    ability: 1,
                    gender: 'female',
                    level: 22,
                    nature: Nature.Naive,
                    moves: [
                        'grass-knot',
                        'magical-leaf',
                        'poison-sting',
                        'stun-spore',
                    ],
                    ivs: 6,
                    heldItem: 'sitrus-berry',
                },
            ],
            x: 49.9,
            y: 15.1,
            items: [{ count: 2, name: 'Super Potion' }],
        },
    ],
};

export default ETERNA_GYM;
