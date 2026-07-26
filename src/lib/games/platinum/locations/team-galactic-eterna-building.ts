import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TEAM_GALACTIC_ETERNA_BUILDING: Location = {
    name: 'Team Galactic Eterna Building',
    subareas: [
        {
            name: '1F',
            map: teamGalacticEternaBuilding1f,
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt F',
                    name: '1',
                    team: [
                        {
                            slug: 'zubat',
                            ability: 1,
                            gender: 'female',
                            level: 16,
                            nature: Nature.Quiet,
                        },
                        {
                            slug: 'glameow',
                            ability: 1,
                            gender: 'female',
                            level: 18,
                            nature: Nature.Rash,
                        },
                    ],
                    x: 61,
                    y: 70.3,
                },
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt M',
                    name: '7',
                    team: [
                        {
                            slug: 'zubat',
                            ability: 1,
                            gender: 'male',
                            level: 17,
                            nature: Nature.Impish,
                        },
                        {
                            slug: 'stunky',
                            ability: 1,
                            gender: 'male',
                            level: 17,
                            nature: Nature.Relaxed,
                        },
                    ],
                    x: 75.5,
                    y: 70.3,
                },
            ],
        },
        {
            name: '2F',
            map: teamGalacticEternaBuilding2f,
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt M',
                    name: '8',
                    team: [
                        {
                            slug: 'croagunk',
                            ability: 1,
                            gender: 'male',
                            level: 19,
                            nature: Nature.Bold,
                        },
                    ],
                    x: 12.4,
                    y: 44,
                },
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt F',
                    name: '2',
                    team: [
                        {
                            slug: 'glameow',
                            ability: 1,
                            gender: 'female',
                            level: 19,
                            nature: Nature.Lax,
                        },
                    ],
                    x: 57,
                    y: 58,
                },
            ],
        },
        {
            name: '3F',
            map: teamGalacticEternaBuilding3f,
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt F',
                    name: '3',
                    team: [
                        {
                            slug: 'stunky',
                            ability: 1,
                            gender: 'female',
                            level: 16,
                            nature: Nature.Naughty,
                        },
                        {
                            slug: 'croagunk',
                            ability: 1,
                            gender: 'female',
                            level: 16,
                            nature: Nature.Careful,
                        },
                        {
                            slug: 'glameow',
                            ability: 1,
                            gender: 'female',
                            level: 16,
                            nature: Nature.Rash,
                        },
                    ],
                    x: 34.9,
                    y: 50,
                },
                {
                    isOptional: true,
                    trainerClass: 'Scientist',
                    name: 'Travon',
                    team: [
                        {
                            slug: 'kadabra',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Brave,
                            moves: ['confusion'],
                            ivs: 2,
                        },
                    ],
                    x: 79.1,
                    y: 36.9,
                    items: [{ count: 1, name: 'X Special' }],
                },
            ],
        },
        {
            name: '4F',
            map: teamGalacticEternaBuilding4f,
            battles: [
                {
                    isMiniboss: true,
                    trainerClass: 'Commander',
                    name: 'Jupiter 1',
                    team: [
                        {
                            slug: 'zubat',
                            ability: 1,
                            gender: 'female',
                            level: 21,
                            nature: Nature.Brave,
                            moves: ['giga-drain', 'wing-attack', 'bite'],
                            ivs: 12,
                        },
                        {
                            slug: 'skuntank',
                            ability: 1,
                            gender: 'female',
                            level: 23,
                            nature: Nature.Modest,
                            moves: [
                                'night-slash',
                                'poison-gas',
                                'screech',
                                'smokescreen',
                            ],
                            ivs: 12,
                            heldItem: 'sitrus-berry',
                        },
                    ],
                    x: 61.2,
                    y: 45.5,
                },
            ],
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
