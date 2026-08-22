import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
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
                    metadata: [],
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-1',
                    x: 70.6,
                    y: 35.7,
                },
                {
                    metadata: [],
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-1',
                    x: 93.8,
                    y: 35.7,
                },
            ],
        },
        {
            name: '2F',
            map: teamGalacticEternaBuilding2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-2',
                    x: 10.6,
                    y: 79.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-2',
                    x: 59.5,
                    y: 57,
                },
            ],
        },
        {
            name: '3F',
            map: teamGalacticEternaBuilding3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [],
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-3',
                    x: 45.9,
                    y: 57.9,
                },
                {
                    metadata: [],
                    battleKey: 'scientist-travon',
                    x: 94.1,
                    y: 37.1,
                },
            ],
        },
        {
            name: '4F',
            map: teamGalacticEternaBuilding4f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Miniboss],
                    battleKey:
                        'commander-jupiter-team-galactic-eterna-building',
                    x: 53.4,
                    y: 58.1,
                },
            ],
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
