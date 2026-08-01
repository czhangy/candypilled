import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/data/platinum/maps';
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
                    battleKey: 'galactic-grunt-f::1',
                    x: 61,
                    y: 70.3,
                },
                {
                    isOptional: true,
                    battleKey: 'galactic-grunt-m::7',
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
                    battleKey: 'galactic-grunt-m::8',
                    x: 12.4,
                    y: 44,
                },
                {
                    isOptional: true,
                    battleKey: 'galactic-grunt-f::2',
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
                    battleKey: 'galactic-grunt-f::3',
                    x: 34.9,
                    y: 50,
                },
                {
                    isOptional: true,
                    battleKey: 'scientist::Travon',
                    x: 79.1,
                    y: 36.9,
                },
            ],
        },
        {
            name: '4F',
            map: teamGalacticEternaBuilding4f,
            battles: [
                {
                    isMiniboss: true,
                    battleKey: 'commander-jupiter::Jupiter 1',
                    x: 61.2,
                    y: 45.5,
                },
            ],
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
