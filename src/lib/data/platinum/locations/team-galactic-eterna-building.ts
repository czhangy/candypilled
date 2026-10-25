import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TEAM_GALACTIC_ETERNA_BUILDING: Location = {
    name: 'Team Galactic Eterna Building',
    subareas: [
        {
            name: '1F',
            map: teamGalacticEternaBuilding1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-1',
                    x: 60.74,
                    y: 70.22,
                },
                {
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-1',
                    x: 75.51,
                    y: 70.22,
                },
            ],
        },
        {
            name: '2F',
            map: teamGalacticEternaBuilding2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-2',
                    x: 12.36,
                    y: 43.79,
                },
                {
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-2',
                    x: 57.06,
                    y: 57.99,
                },
            ],
        },
        {
            name: '3F',
            map: teamGalacticEternaBuilding3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-3',
                    x: 34.74,
                    y: 49.7,
                },
                {
                    battleKey: 'scientist-travon',
                    x: 78.99,
                    y: 36.09,
                },
            ],
        },
        {
            name: '4F',
            map: teamGalacticEternaBuilding4f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey:
                        'commander-jupiter-team-galactic-eterna-building',
                    x: 60.98,
                    y: 44.97,
                },
            ],
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
