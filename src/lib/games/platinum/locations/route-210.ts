import { route210North, route210South } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_210: Location = {
    name: 'Route 210',
    subareas: [
        {
            name: 'South',
            map: route210South,
            encountersKey: 'sinnoh-route-210-south-towards-solaceon-town',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Rancher',
                    name: 'Marco',
                    team: [
                        {
                            name: 'Ponyta',
                            ability: 1,
                            level: 24,
                            nature: Nature.Docile,
                        },
                    ],
                    x: 34.6,
                    y: 77,
                },
                {
                    isOptional: true,
                    trainerClass: 'Jogger',
                    name: 'Wyatt',
                    team: [
                        {
                            name: 'Pikachu',
                            ability: 1,
                            level: 24,
                            nature: Nature.Sassy,
                        },
                    ],
                    x: 71.4,
                    y: 69,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    isDoubleHeightMarker: true,
                    trainerClass: 'Belle & Pa',
                    name: 'Ava & Matt',
                    team: [
                        {
                            name: 'Ponyta',
                            ability: 1,
                            level: 24,
                            nature: Nature.Naughty,
                        },
                        {
                            name: 'Rapidash',
                            ability: 1,
                            level: 24,
                            nature: Nature.Calm,
                        },
                    ],
                    x: 60.3,
                    y: 56.4,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    isDoubleWidthMarker: true,
                    trainerClass: 'Twins',
                    name: 'Teri & Tia',
                    team: [
                        {
                            name: 'Pikachu',
                            ability: 1,
                            level: 23,
                            nature: Nature.Adamant,
                        },
                        {
                            name: 'Clefairy',
                            ability: 1,
                            level: 23,
                            nature: Nature.Adamant,
                        },
                    ],
                    x: 42.5,
                    y: 45.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Pkmn Breeder M',
                    name: 'Kahlil',
                    team: [
                        {
                            name: 'Elekid',
                            ability: 1,
                            level: 23,
                            nature: Nature.Gentle,
                        },
                        {
                            name: 'Happiny',
                            ability: 1,
                            level: 23,
                            nature: Nature.Bold,
                        },
                    ],
                    x: 31.7,
                    y: 36.2,
                },
                {
                    isOptional: true,
                    trainerClass: 'Pkmn Breeder F',
                    name: 'Amber',
                    team: [
                        {
                            name: 'Magby',
                            ability: 1,
                            level: 23,
                            nature: Nature.Brave,
                        },
                        {
                            name: 'Togepi',
                            ability: 1,
                            level: 23,
                            nature: Nature.Modest,
                        },
                    ],
                    x: 60,
                    y: 30.8,
                },
            ],
        },
        {
            name: 'North',
            map: route210North,
            encountersKey: 'sinnoh-route-210-west-towards-celestic-town',
        },
    ],
};

export default ROUTE_210;
