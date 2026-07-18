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
                    name: 'Cherubi',
                    ability: 1,
                    level: 17,
                    nature: Nature.Lonely,
                    moves: ['Tackle', 'Leech Seed'],
                    ivs: 2,
                },
                {
                    name: 'Roselia',
                    ability: 1,
                    level: 17,
                    nature: Nature.Sassy,
                    moves: ['Mega Drain', 'Poison Sting', 'Stun Spore'],
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
                    name: 'Budew',
                    ability: 1,
                    level: 15,
                    nature: Nature.Naive,
                    moves: ['Absorb', 'Stun Spore', 'Water Sport'],
                    ivs: 2,
                },
                {
                    name: 'Budew',
                    ability: 1,
                    level: 16,
                    nature: Nature.Serious,
                    moves: ['Absorb', 'Stun Spore', 'Water Sport'],
                    ivs: 2,
                },
                {
                    name: 'Budew',
                    ability: 1,
                    level: 17,
                    nature: Nature.Hardy,
                    moves: ['Absorb', 'Stun Spore', 'Water Sport'],
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
                    name: 'Roselia',
                    ability: 1,
                    level: 19,
                    nature: Nature.Mild,
                    moves: ['Mega Drain', 'Poison Sting', 'Stun Spore'],
                    ivs: 2,
                },
            ],
            x: 7.2,
            y: 30.5,
        },
        {
            isBoss: true,
            trainerClass: 'Gym Leader',
            name: 'Gardenia',
            team: [
                {
                    name: 'Turtwig',
                    ability: 1,
                    level: 20,
                    nature: Nature.Quirky,
                    moves: ['Grass Knot', 'Razor Leaf', 'Sunny Day', 'Reflect'],
                    ivs: 6,
                },
                {
                    name: 'Cherrim',
                    ability: 1,
                    level: 20,
                    nature: Nature.Lax,
                    moves: [
                        'Grass Knot',
                        'Leech Seed',
                        'Magical Leaf',
                        'Safeguard',
                    ],
                    ivs: 6,
                },
                {
                    name: 'Roserade',
                    ability: 1,
                    level: 22,
                    nature: Nature.Naive,
                    moves: [
                        'Grass Knot',
                        'Magical Leaf',
                        'Poison Sting',
                        'Stun Spore',
                    ],
                    ivs: 6,
                    heldItem: 'Sitrus Berry',
                },
            ],
            x: 49.9,
            y: 15.1,
        },
    ],
};

export default ETERNA_GYM;
