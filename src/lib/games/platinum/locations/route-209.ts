import { route209 } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_209: Location = {
    name: 'Route 209',
    map: route209,
    encountersKey: 'sinnoh-route-209',
    battles: [
        {
            isOptional: true,
            trainerClass: 'Pkmn Breeder M',
            name: 'Albert',
            team: [
                {
                    name: 'Budew',
                    ability: 1,
                    level: 20,
                    nature: Nature.Sassy,
                },
                {
                    name: 'Bonsly',
                    ability: 1,
                    level: 20,
                    nature: Nature.Jolly,
                },
                {
                    name: 'Pichu',
                    ability: 1,
                    level: 20,
                    nature: Nature.Docile,
                },
                {
                    name: 'Eevee',
                    ability: 1,
                    level: 20,
                    nature: Nature.Brave,
                },
            ],
            x: 16.6,
            y: 81.2,
        },
        {
            isOptional: true,
            trainerClass: 'Jogger',
            name: 'Richard',
            team: [
                {
                    name: 'Luxio',
                    ability: 1,
                    level: 23,
                    nature: Nature.Quiet,
                },
            ],
            x: 44.5,
            y: 74,
        },
        {
            isTrueDouble: true,
            isDoubleWidthMarker: true,
            trainerClass: 'Twins',
            name: 'Emma & Lil',
            team: [
                {
                    name: 'Bonsly',
                    ability: 1,
                    level: 22,
                    nature: Nature.Naughty,
                },
                {
                    name: 'Mime Jr.',
                    ability: 1,
                    level: 22,
                    nature: Nature.Sassy,
                },
            ],
            x: 51.5,
            y: 74.2,
        },
        {
            isOptional: true,
            trainerClass: 'Poké Kid',
            name: 'Danielle',
            team: [
                {
                    name: 'Pichu',
                    ability: 1,
                    level: 22,
                    nature: Nature.Adamant,
                },
            ],
            x: 63,
            y: 77,
        },
        {
            isOptional: true,
            trainerClass: 'Jogger',
            name: 'Raul',
            team: [
                {
                    name: 'Staravia',
                    ability: 1,
                    level: 23,
                    nature: Nature.Calm,
                },
            ],
            x: 71.7,
            y: 66.2,
        },
        {
            isOptional: true,
            trainerClass: 'Pkmn Breeder F',
            name: 'Jennifer',
            team: [
                {
                    name: 'Budew',
                    ability: 1,
                    level: 20,
                    nature: Nature.Modest,
                },
                {
                    name: 'Mime Jr.',
                    ability: 1,
                    level: 20,
                    nature: Nature.Brave,
                },
                {
                    name: 'Cleffa',
                    ability: 1,
                    level: 20,
                    nature: Nature.Brave,
                },
                {
                    name: 'Eevee',
                    ability: 1,
                    level: 20,
                    nature: Nature.Mild,
                },
            ],
            x: 66.2,
            y: 60.7,
        },
        {
            isOptional: true,
            trainerClass: 'Cowgirl',
            name: 'Shelley',
            team: [
                {
                    name: 'Ponyta',
                    ability: 1,
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
            isDoubleWidthMarker: true,
            trainerClass: 'Young Couple',
            name: 'Ty & Sue',
            team: [
                {
                    name: 'Buneary',
                    ability: 1,
                    level: 23,
                    nature: Nature.Mild,
                },
                {
                    name: 'Buizel',
                    ability: 1,
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
