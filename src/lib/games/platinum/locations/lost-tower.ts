import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
} from '@/lib/games/platinum/maps';
import { FieldCondition, Nature } from '@/lib/static/enums';
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
                            slug: 'mothim',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Naive,
                        },
                        {
                            slug: 'barboach',
                            ability: 1,
                            gender: 'male',
                            level: 19,
                            nature: Nature.Timid,
                        },
                        {
                            slug: 'chatot',
                            ability: 1,
                            gender: 'male',
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
                            slug: 'cleffa',
                            ability: 1,
                            gender: 'female',
                            level: 23,
                            nature: Nature.Calm,
                        },
                    ],
                    x: 34.5,
                    y: 92,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    isOptional: true,
                    trainerClass: 'Pokéfan M',
                    name: 'Leonard',
                    team: [
                        {
                            slug: 'pichu',
                            ability: 1,
                            gender: 'male',
                            level: 19,
                            nature: Nature.Calm,
                            heldItem: 'sitrus-berry',
                        },
                        {
                            slug: 'pichu',
                            ability: 1,
                            gender: 'male',
                            level: 19,
                            nature: Nature.Calm,
                            heldItem: 'sitrus-berry',
                        },
                        {
                            slug: 'pikachu',
                            ability: 1,
                            gender: 'male',
                            level: 22,
                            nature: Nature.Serious,
                            heldItem: 'sitrus-berry',
                        },
                    ],
                    x: 50,
                    y: 37.5,
                    items: [
                        { count: 1, name: 'Full Heal' },
                        { count: 1, name: 'Super Potion' },
                    ],
                    fieldCondition: FieldCondition.Fog,
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
                            slug: 'bonsly',
                            ability: 1,
                            gender: 'female',
                            level: 23,
                            nature: Nature.Relaxed,
                            heldItem: 'sitrus-berry',
                        },
                    ],
                    x: 64.9,
                    y: 71.3,
                    items: [
                        { count: 1, name: 'Full Heal' },
                        { count: 1, name: 'Super Potion' },
                    ],
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customHeight: 40,
                    trainerClass: 'Belle & Pa',
                    name: 'Beth & Bob',
                    team: [
                        {
                            slug: 'ponyta',
                            ability: 1,
                            gender: 'male',
                            level: 23,
                            nature: Nature.Jolly,
                        },
                        {
                            slug: 'ponyta',
                            ability: 1,
                            gender: 'male',
                            level: 23,
                            nature: Nature.Jolly,
                        },
                    ],
                    x: 96,
                    y: 87.5,
                    fieldCondition: FieldCondition.Fog,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customWidth: 36,
                    trainerClass: 'Young Couple',
                    name: 'Mike & Nat',
                    team: [
                        {
                            slug: 'murkrow',
                            ability: 1,
                            gender: 'male',
                            level: 23,
                            nature: Nature.Docile,
                        },
                        {
                            slug: 'misdreavus',
                            ability: 1,
                            gender: 'male',
                            level: 23,
                            nature: Nature.Sassy,
                        },
                    ],
                    x: 30.5,
                    y: 57.5,
                    fieldCondition: FieldCondition.Fog,
                },
            ],
        },
        { name: '5F', map: lostTower5f, encountersKey: 'lost-tower-5f' },
    ],
};

export default LOST_TOWER;
