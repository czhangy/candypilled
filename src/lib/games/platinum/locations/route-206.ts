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
                    name: 'Pikachu',
                    ability: 1,
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
                    name: 'Staravia',
                    ability: 1,
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
                    name: 'Ponyta',
                    ability: 1,
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
                    name: 'Starly',
                    ability: 1,
                    level: 17,
                    nature: Nature.Quirky,
                },
                {
                    name: 'Starly',
                    ability: 1,
                    level: 18,
                    nature: Nature.Mild,
                },
                {
                    name: 'Starly',
                    ability: 1,
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
                    name: 'Starly',
                    ability: 1,
                    level: 18,
                    nature: Nature.Naive,
                },
                {
                    name: 'Staravia',
                    ability: 1,
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
                    name: 'Shinx',
                    ability: 1,
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
                    name: 'Ponyta',
                    ability: 1,
                    level: 20,
                    nature: Nature.Bashful,
                },
                {
                    name: 'Shinx',
                    ability: 1,
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
                    name: 'Pikachu',
                    ability: 1,
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
                    name: 'Onix',
                    ability: 1,
                    level: 18,
                    nature: Nature.Gentle,
                },
                {
                    name: 'Onix',
                    ability: 1,
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
