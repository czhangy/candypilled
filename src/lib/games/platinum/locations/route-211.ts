import { route211East, route211West } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            encountersKey: 'sinnoh-route-211-west-towards-eterna-city',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Ninja Boy',
                    name: 'Zach',
                    team: [
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                        },
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                        },
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                        },
                    ],
                    x: 29.4,
                    y: 36,
                },
                {
                    isOptional: true,
                    trainerClass: 'Hiker',
                    name: 'Louis',
                    team: [
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 14,
                            nature: Nature.Brave,
                        },
                        {
                            name: 'Onix',
                            ability: 1,
                            level: 18,
                            nature: Nature.Relaxed,
                        },
                    ],
                    x: 76.1,
                    y: 49.6,
                },
                {
                    isOptional: true,
                    trainerClass: 'Bird Keeper',
                    name: 'Alexandra',
                    team: [
                        {
                            name: 'Starly',
                            ability: 1,
                            level: 17,
                            nature: Nature.Serious,
                        },
                        {
                            name: 'Hoothoot',
                            ability: 1,
                            level: 17,
                            nature: Nature.Naive,
                        },
                    ],
                    x: 46.8,
                    y: 40.6,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            encountersKey: 'sinnoh-route-211-east-towards-celestic-town',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Bird Keeper',
                    name: 'Katherine',
                    team: [
                        {
                            name: 'Noctowl',
                            ability: 1,
                            level: 34,
                            nature: Nature.Quirky,
                            ivs: 6,
                        },
                    ],
                    x: 52,
                    y: 25,
                },
                {
                    isOptional: true,
                    trainerClass: 'Ruin Maniac',
                    name: 'Harry',
                    team: [
                        {
                            name: 'Bronzor',
                            ability: 1,
                            level: 28,
                            nature: Nature.Serious,
                        },
                        {
                            name: 'Bronzor',
                            ability: 1,
                            level: 30,
                            nature: Nature.Modest,
                        },
                        {
                            name: 'Bronzor',
                            ability: 1,
                            level: 32,
                            nature: Nature.Impish,
                        },
                    ],
                    x: 40,
                    y: 40,
                },
                {
                    isOptional: true,
                    trainerClass: 'Ninja Boy',
                    name: 'Nick',
                    team: [
                        {
                            name: 'Skorupi',
                            ability: 1,
                            level: 32,
                            nature: Nature.Lax,
                        },
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 30,
                            nature: Nature.Lax,
                        },
                    ],
                    x: 25,
                    y: 25,
                },
                {
                    isOptional: true,
                    trainerClass: 'Black Belt',
                    name: 'Sean',
                    team: [
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 31,
                            nature: Nature.Serious,
                            ivs: 3,
                        },
                        {
                            name: 'Meditite',
                            ability: 1,
                            level: 31,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                        {
                            name: 'Machoke',
                            ability: 1,
                            level: 31,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                    ],
                    x: 50,
                    y: 90,
                },
            ],
        },
    ],
};

export default ROUTE_211;
