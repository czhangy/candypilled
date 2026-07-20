import { route215 } from '@/lib/games/platinum/maps';
import { FieldCondition, Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_215: Location = {
    name: 'Route 215',
    map: route215,
    encountersKey: 'sinnoh-route-215',
    battles: [
        {
            trainerClass: 'Ruin Maniac',
            name: 'Calvin',
            team: [
                {
                    name: 'Bronzor',
                    ability: 1,
                    level: 23,
                    nature: Nature.Sassy,
                },
                {
                    name: 'Shieldon',
                    ability: 1,
                    level: 23,
                    nature: Nature.Careful,
                },
            ],
            x: 14.1,
            y: 56,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            trainerClass: 'Jogger',
            name: 'Craig',
            team: [
                {
                    name: 'Luxio',
                    ability: 1,
                    level: 22,
                    nature: Nature.Naughty,
                },
                {
                    name: 'Luxio',
                    ability: 1,
                    level: 24,
                    nature: Nature.Careful,
                },
            ],
            x: 23.5,
            y: 59,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Derek',
            team: [
                {
                    name: 'Croagunk',
                    ability: 1,
                    level: 26,
                    nature: Nature.Bashful,
                    ivs: 3,
                },
            ],
            x: 32.9,
            y: 37.2,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Gregory',
            team: [
                {
                    name: 'Machop',
                    ability: 1,
                    level: 23,
                    nature: Nature.Adamant,
                    ivs: 3,
                },
                {
                    name: 'Machop',
                    ability: 1,
                    level: 23,
                    nature: Nature.Adamant,
                    ivs: 3,
                },
                {
                    name: 'Machop',
                    ability: 1,
                    level: 23,
                    nature: Nature.Adamant,
                    ivs: 3,
                },
            ],
            x: 47.5,
            y: 18,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Nathaniel',
            team: [
                {
                    name: 'Croagunk',
                    ability: 1,
                    level: 21,
                    nature: Nature.Naive,
                    ivs: 3,
                },
                {
                    name: 'Meditite',
                    ability: 1,
                    level: 24,
                    nature: Nature.Relaxed,
                    ivs: 3,
                },
                {
                    name: 'Machop',
                    ability: 1,
                    level: 24,
                    nature: Nature.Sassy,
                    ivs: 3,
                },
            ],
            x: 70.5,
            y: 30,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            trainerClass: 'Jogger',
            name: 'Scott',
            team: [
                {
                    name: 'Staravia',
                    ability: 1,
                    level: 25,
                    nature: Nature.Jolly,
                },
            ],
            x: 80.9,
            y: 65,
            fieldCondition: FieldCondition.Rain,
        },
        {
            trainerClass: 'Ace Trainer F',
            name: 'Maya',
            team: [
                {
                    name: 'Roselia',
                    ability: 1,
                    level: 24,
                    moves: ['Toxic Spikes', 'Giga Drain', 'Leech Seed'],
                    nature: Nature.Adamant,
                    ivs: 6,
                },
                {
                    name: 'Ralts',
                    ability: 1,
                    level: 24,
                    moves: [
                        'Psychic',
                        'Magical Leaf',
                        'Calm Mind',
                        'Double Team',
                    ],
                    nature: Nature.Serious,
                    ivs: 6,
                },
                {
                    name: 'Lickitung',
                    ability: 1,
                    level: 25,
                    moves: ['Supersonic', 'Stomp', 'Rollout', 'Defense Curl'],
                    nature: Nature.Modest,
                    ivs: 6,
                },
            ],
            x: 75.5,
            y: 75.7,
            fieldCondition: FieldCondition.Rain,
        },
        {
            trainerClass: 'Ace Trainer M',
            name: 'Dennis',
            team: [
                {
                    name: 'Gligar',
                    ability: 1,
                    level: 24,
                    moves: [
                        'Screech',
                        'Feint Attack',
                        'Quick Attack',
                        'Poison Sting',
                    ],
                    nature: Nature.Bold,
                    ivs: 6,
                },
                {
                    name: 'Buizel',
                    ability: 1,
                    level: 24,
                    moves: ['Aqua Jet', 'Swift', 'Pursuit', 'Quick Attack'],
                    nature: Nature.Naive,
                    ivs: 6,
                },
                {
                    name: 'Drifblim',
                    ability: 1,
                    level: 25,
                    moves: ['Swallow', 'Gust', 'Stockpile', 'Ominous Wind'],
                    nature: Nature.Bold,
                    ivs: 6,
                },
            ],
            x: 75.5,
            y: 85.2,
            fieldCondition: FieldCondition.Rain,
        },
    ],
};

export default ROUTE_215;
