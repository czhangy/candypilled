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
                    name: '16',
                    team: [
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 16,
                            nature: Nature.Quiet,
                        },
                        {
                            name: 'Glameow',
                            ability: 1,
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
                    name: '17',
                    team: [
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 17,
                            nature: Nature.Impish,
                        },
                        {
                            name: 'Stunky',
                            ability: 1,
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
                    name: '18',
                    team: [
                        {
                            name: 'Croagunk',
                            ability: 1,
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
                    name: '19',
                    team: [
                        {
                            name: 'Glameow',
                            ability: 1,
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
                    name: '20',
                    team: [
                        {
                            name: 'Stunky',
                            ability: 1,
                            level: 16,
                            nature: Nature.Naughty,
                        },
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 16,
                            nature: Nature.Careful,
                        },
                        {
                            name: 'Glameow',
                            ability: 1,
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
                            name: 'Kadabra',
                            ability: 1,
                            level: 20,
                            nature: Nature.Brave,
                            moves: ['Confusion'],
                            ivs: 2,
                        },
                    ],
                    x: 79.1,
                    y: 36.9,
                    items: { count: 1, name: 'X Special' },
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
                    name: 'Jupiter',
                    team: [
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 21,
                            nature: Nature.Brave,
                            moves: ['Giga Drain', 'Wing Attack', 'Bite'],
                            ivs: 12,
                        },
                        {
                            name: 'Skuntank',
                            ability: 1,
                            level: 23,
                            nature: Nature.Modest,
                            moves: [
                                'Night Slash',
                                'Poison Gas',
                                'Screech',
                                'Smokescreen',
                            ],
                            ivs: 12,
                            heldItem: 'Sitrus Berry',
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
