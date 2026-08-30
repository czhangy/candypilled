import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/data/platinum/maps';
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
                    metadata: [BattleMetadata.Optional],
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-1',
                    x: 61,
                    y: 70.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-1',
                    x: 75.5,
                    y: 70.3,
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
                    x: 12.4,
                    y: 44,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-2',
                    x: 57,
                    y: 58,
                },
            ],
        },
        {
            name: '3F',
            map: teamGalacticEternaBuilding3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-3',
                    x: 34.9,
                    y: 50,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'scientist-travon',
                    x: 79.1,
                    y: 36.9,
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
                    x: 61.2,
                    y: 45.5,
                },
            ],
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
