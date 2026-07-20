import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
} from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LOST_TOWER: Location = {
    name: 'Lost Tower',
    subareas: [
        { name: '1F', map: lostTower1f, encountersKey: 'lost-tower-1f' },
        {
            name: '2F',
            map: lostTower2f,
            encountersKey: 'lost-tower-2f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Youngster',
                    name: 'Oliver',
                    team: [
                        {
                            name: 'Mothim',
                            ability: 1,
                            level: 20,
                            nature: Nature.Naive,
                        },
                        {
                            name: 'Barboach',
                            ability: 1,
                            level: 19,
                            nature: Nature.Timid,
                        },
                        {
                            name: 'Chatot',
                            ability: 1,
                            level: 21,
                            nature: Nature.Careful,
                        },
                    ],
                    x: 57.75,
                    y: 62,
                },
            ],
        },
        {
            name: '3F',
            map: lostTower3f,
            encountersKey: 'lost-tower-3f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Roughneck',
                    name: 'Kirby',
                    team: [
                        {
                            name: 'Cleffa',
                            ability: 1,
                            level: 23,
                            nature: Nature.Calm,
                        },
                    ],
                    x: 34.5,
                    y: 92,
                },
                {
                    isOptional: true,
                    trainerClass: 'Pokéfan M',
                    name: 'Leonard',
                    team: [
                        {
                            name: 'Pichu',
                            ability: 1,
                            level: 19,
                            nature: Nature.Calm,
                            heldItem: 'Sitrus Berry',
                        },
                        {
                            name: 'Pichu',
                            ability: 1,
                            level: 19,
                            nature: Nature.Calm,
                            heldItem: 'Sitrus Berry',
                        },
                        {
                            name: 'Pikachu',
                            ability: 1,
                            level: 22,
                            nature: Nature.Serious,
                            heldItem: 'Sitrus Berry',
                        },
                    ],
                    x: 50,
                    y: 37.5,
                    items: [
                        { count: 1, name: 'Full Heal' },
                        { count: 1, name: 'Super Potion' },
                    ],
                },
            ],
        },
        {
            name: '4F',
            map: lostTower4f,
            encountersKey: 'lost-tower-4f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Pokéfan F',
                    name: 'Rebekah',
                    team: [
                        {
                            name: 'Bonsly',
                            ability: 1,
                            level: 23,
                            nature: Nature.Relaxed,
                            heldItem: 'Sitrus Berry',
                        },
                    ],
                    x: 64.9,
                    y: 71.3,
                    items: [
                        { count: 1, name: 'Full Heal' },
                        { count: 1, name: 'Super Potion' },
                    ],
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    isDoubleHeightMarker: true,
                    trainerClass: 'Belle & Pa',
                    name: 'Beth & Bob',
                    team: [
                        {
                            name: 'Ponyta',
                            ability: 1,
                            level: 23,
                            nature: Nature.Jolly,
                        },
                        {
                            name: 'Ponyta',
                            ability: 1,
                            level: 23,
                            nature: Nature.Jolly,
                        },
                    ],
                    x: 96,
                    y: 87.5,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    isDoubleWidthMarker: true,
                    trainerClass: 'Young Couple',
                    name: 'Mike & Nat',
                    team: [
                        {
                            name: 'Murkrow',
                            ability: 1,
                            level: 23,
                            nature: Nature.Docile,
                        },
                        {
                            name: 'Misdreavus',
                            ability: 1,
                            level: 23,
                            nature: Nature.Sassy,
                        },
                    ],
                    x: 30.5,
                    y: 57.5,
                },
            ],
        },
        { name: '5F', map: lostTower5f, encountersKey: 'lost-tower-5f' },
    ],
};

export default LOST_TOWER;
