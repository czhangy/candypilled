import { route206 } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_206: Location = {
    name: 'Route 206',
    map: route206,
    encountersKey: 'sinnoh-route-206',
    battles: [
        {
            isOptional: true,
            trainerClass: 'Cyclist M',
            name: 'Axel',
            team: [
                {
                    slug: 'pikachu',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Naughty,
                },
            ],
            x: 43.2,
            y: 21.3,
        },
        {
            isOptional: true,
            trainerClass: 'Cyclist F',
            name: 'Megan',
            team: [
                {
                    slug: 'staravia',
                    ability: 1,
                    gender: 'female',
                    level: 21,
                    nature: Nature.Serious,
                },
            ],
            x: 31.6,
            y: 29.2,
        },
        {
            isOptional: true,
            trainerClass: 'Cyclist M',
            name: 'James',
            team: [
                {
                    slug: 'ponyta',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Lonely,
                },
            ],
            x: 49.8,
            y: 38,
        },
        {
            isOptional: true,
            trainerClass: 'Cyclist F',
            name: 'Nicole',
            team: [
                {
                    slug: 'starly',
                    ability: 1,
                    gender: 'female',
                    level: 17,
                    nature: Nature.Quirky,
                },
                {
                    slug: 'starly',
                    ability: 1,
                    gender: 'female',
                    level: 18,
                    nature: Nature.Mild,
                },
                {
                    slug: 'starly',
                    ability: 1,
                    gender: 'female',
                    level: 19,
                    nature: Nature.Bashful,
                },
            ],
            x: 54.3,
            y: 45.2,
        },
        {
            isOptional: true,
            trainerClass: 'Cyclist M',
            name: 'John',
            team: [
                {
                    slug: 'starly',
                    ability: 1,
                    gender: 'male',
                    level: 18,
                    nature: Nature.Naive,
                },
                {
                    slug: 'staravia',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Modest,
                },
            ],
            x: 47,
            y: 55.5,
        },
        {
            isOptional: true,
            trainerClass: 'Cyclist M',
            name: 'Ryan',
            team: [
                {
                    slug: 'shinx',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Naughty,
                },
            ],
            x: 35,
            y: 68.2,
        },
        {
            isOptional: true,
            trainerClass: 'Cyclist F',
            name: 'Rachel',
            team: [
                {
                    slug: 'ponyta',
                    ability: 1,
                    gender: 'female',
                    level: 20,
                    nature: Nature.Bashful,
                },
                {
                    slug: 'shinx',
                    ability: 1,
                    gender: 'female',
                    level: 18,
                    nature: Nature.Adamant,
                },
            ],
            x: 32,
            y: 75.2,
        },
        {
            isOptional: true,
            trainerClass: 'Cyclist F',
            name: 'Kayla',
            team: [
                {
                    slug: 'pikachu',
                    ability: 1,
                    gender: 'female',
                    level: 21,
                    nature: Nature.Modest,
                },
            ],
            x: 57.4,
            y: 80,
        },
        {
            isOptional: true,
            trainerClass: 'Hiker',
            name: 'Theodore',
            team: [
                {
                    slug: 'onix',
                    ability: 1,
                    gender: 'male',
                    level: 18,
                    nature: Nature.Gentle,
                },
                {
                    slug: 'onix',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Lonely,
                },
            ],
            x: 76.3,
            y: 42.1,
        },
    ],
};

export default ROUTE_206;
