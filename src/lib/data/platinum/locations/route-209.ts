import { route209 } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_209: Location = {
    name: 'Route 209',
    map: route209,
    encountersKey: 'sinnoh-route-209',
    battles: [
        {
            isOptional: true,
            trainerClass: 'pkmn-breeder-m',
            name: 'Albert',
            team: [
                {
                    slug: 'budew',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Sassy,
                },
                {
                    slug: 'bonsly',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'pichu',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Docile,
                },
                {
                    slug: 'eevee',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Brave,
                },
            ],
            x: 16.6,
            y: 81.2,
        },
        {
            isOptional: true,
            trainerClass: 'jogger',
            name: 'Richard',
            team: [
                {
                    slug: 'luxio',
                    ability: 1,
                    gender: 'male',
                    level: 23,
                    nature: Nature.Quiet,
                },
            ],
            x: 44.5,
            y: 74,
        },
        {
            isTrueDouble: true,
            customWidth: 36,
            trainerClass: 'twins',
            name: 'Emma & Lil',
            team: [
                {
                    slug: 'bonsly',
                    ability: 1,
                    gender: 'female',
                    level: 22,
                    nature: Nature.Naughty,
                },
                {
                    slug: 'mime-jr',
                    ability: 1,
                    gender: 'female',
                    level: 22,
                    nature: Nature.Sassy,
                },
            ],
            x: 51.5,
            y: 74.2,
        },
        {
            isOptional: true,
            trainerClass: 'poke-kid',
            name: 'Danielle',
            team: [
                {
                    slug: 'pichu',
                    ability: 1,
                    gender: 'female',
                    level: 22,
                    nature: Nature.Adamant,
                },
            ],
            x: 63,
            y: 77,
        },
        {
            isOptional: true,
            trainerClass: 'jogger',
            name: 'Raul',
            team: [
                {
                    slug: 'staravia',
                    ability: 1,
                    gender: 'male',
                    level: 23,
                    nature: Nature.Calm,
                },
            ],
            x: 71.7,
            y: 66.2,
        },
        {
            isOptional: true,
            trainerClass: 'pkmn-breeder-f',
            name: 'Jennifer',
            team: [
                {
                    slug: 'budew',
                    ability: 1,
                    gender: 'female',
                    level: 20,
                    nature: Nature.Modest,
                },
                {
                    slug: 'mime-jr',
                    ability: 1,
                    gender: 'female',
                    level: 20,
                    nature: Nature.Brave,
                },
                {
                    slug: 'cleffa',
                    ability: 1,
                    gender: 'female',
                    level: 20,
                    nature: Nature.Brave,
                },
                {
                    slug: 'eevee',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Mild,
                },
            ],
            x: 66.2,
            y: 60.7,
        },
        {
            isOptional: true,
            trainerClass: 'cowgirl',
            name: 'Shelley',
            team: [
                {
                    slug: 'ponyta',
                    ability: 1,
                    gender: 'female',
                    level: 23,
                    nature: Nature.Naughty,
                },
            ],
            x: 75.5,
            y: 30.1,
        },
        {
            isOptional: true,
            isTrueDouble: true,
            customWidth: 36,
            trainerClass: 'young-couple',
            name: 'Ty & Sue',
            team: [
                {
                    slug: 'buneary',
                    ability: 1,
                    gender: 'male',
                    level: 23,
                    nature: Nature.Mild,
                },
                {
                    slug: 'buizel',
                    ability: 1,
                    gender: 'male',
                    level: 23,
                    nature: Nature.Mild,
                },
            ],
            x: 74.2,
            y: 18.4,
        },
    ],
};

export default ROUTE_209;
