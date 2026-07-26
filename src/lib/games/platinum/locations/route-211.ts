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
                            slug: 'zubat',
                            ability: 1,
                            gender: 'male',
                            level: 14,
                            nature: Nature.Serious,
                        },
                        {
                            slug: 'zubat',
                            ability: 1,
                            gender: 'male',
                            level: 14,
                            nature: Nature.Serious,
                        },
                        {
                            slug: 'zubat',
                            ability: 1,
                            gender: 'male',
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
                            slug: 'geodude',
                            ability: 1,
                            gender: 'male',
                            level: 14,
                            nature: Nature.Brave,
                        },
                        {
                            slug: 'onix',
                            ability: 1,
                            gender: 'male',
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
                            slug: 'starly',
                            ability: 1,
                            gender: 'male',
                            level: 17,
                            nature: Nature.Serious,
                        },
                        {
                            slug: 'hoothoot',
                            ability: 1,
                            gender: 'male',
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
                            slug: 'noctowl',
                            ability: 1,
                            gender: 'male',
                            level: 34,
                            nature: Nature.Quirky,
                            ivs: 6,
                        },
                    ],
                    x: 53,
                    y: 32.1,
                },
                {
                    isOptional: true,
                    trainerClass: 'Ruin Maniac',
                    name: 'Harry',
                    team: [
                        {
                            slug: 'bronzor',
                            ability: 1,
                            gender: 'male',
                            level: 28,
                            nature: Nature.Serious,
                        },
                        {
                            slug: 'bronzor',
                            ability: 1,
                            gender: 'male',
                            level: 30,
                            nature: Nature.Modest,
                        },
                        {
                            slug: 'bronzor',
                            ability: 1,
                            gender: 'male',
                            level: 32,
                            nature: Nature.Impish,
                        },
                    ],
                    x: 44.2,
                    y: 45.7,
                },
                {
                    isOptional: true,
                    trainerClass: 'Ninja Boy',
                    name: 'Nick',
                    team: [
                        {
                            slug: 'skorupi',
                            ability: 1,
                            gender: 'male',
                            level: 32,
                            nature: Nature.Lax,
                        },
                        {
                            slug: 'croagunk',
                            ability: 1,
                            gender: 'male',
                            level: 30,
                            nature: Nature.Lax,
                        },
                    ],
                    x: 32.4,
                    y: 32.3,
                },
                {
                    isOptional: true,
                    trainerClass: 'Black Belt',
                    name: 'Sean',
                    team: [
                        {
                            slug: 'croagunk',
                            ability: 1,
                            gender: 'male',
                            level: 31,
                            nature: Nature.Serious,
                            ivs: 3,
                        },
                        {
                            slug: 'meditite',
                            ability: 1,
                            gender: 'male',
                            level: 31,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                        {
                            slug: 'machoke',
                            ability: 1,
                            gender: 'male',
                            level: 31,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                    ],
                    x: 49.7,
                    y: 90,
                },
            ],
        },
    ],
};

export default ROUTE_211;
