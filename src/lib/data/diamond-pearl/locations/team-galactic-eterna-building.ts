import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const TEAM_GALACTIC_ETERNA_BUILDING: Location = {
    name: 'Team Galactic Eterna Building',
    subareas: [
        {
            name: '1F',
            map: teamGalacticEternaBuilding1f,
            battles: [
                {
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-1',
                    x: 71.7,
                    y: 22.8,
                },
                {
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-1',
                    x: 97.1,
                    y: 22.8,
                },
            ],
        },
        {
            name: '2F',
            map: teamGalacticEternaBuilding2f,
            battles: [
                {
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-2',
                    x: 9.2,
                    y: 81.2,
                },
                {
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-2',
                    x: 59.6,
                    y: 52.3,
                },
            ],
        },
        {
            name: '3F',
            map: teamGalacticEternaBuilding3f,
            battles: [
                {
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-3',
                    x: 47.1,
                    y: 52.3,
                },
                {
                    battleKey: 'scientist-travon',
                    x: 97.5,
                    y: 22.8,
                },
            ],
        },
        {
            name: '4F',
            map: teamGalacticEternaBuilding4f,
            battles: [
                {
                    battleKey:
                        'commander-jupiter-team-galactic-eterna-building',
                    x: 54.1,
                    y: 51.1,
                },
            ],
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
