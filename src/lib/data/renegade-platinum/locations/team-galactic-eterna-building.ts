import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/data/renegade-platinum/maps';
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
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-1f',
                    metadata: [],
                    x: 79.3,
                    y: 43.1,
                },
                {
                    battleKey:
                        'galactic-grunt-m-team-galactic-eterna-building-1f',
                    metadata: [],
                    x: 97.9,
                    y: 43.1,
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
                        'galactic-grunt-m-team-galactic-eterna-building-2f',
                    metadata: [BattleMetadata.Optional],
                    x: 8,
                    y: 46.7,
                },
                {
                    battleKey:
                        'galactic-grunt-f-team-galactic-eterna-building-2f',
                    metadata: [],
                    x: 50,
                    y: 39,
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
                        'galactic-grunt-f-team-galactic-eterna-building-3f',
                    metadata: [BattleMetadata.Optional],
                    x: 34.4,
                    y: 25.6,
                },
                {
                    battleKey: 'scientist-travon',
                    metadata: [],
                    x: 52.3,
                    y: 14.5,
                },
            ],
        },
        {
            name: '4F',
            map: teamGalacticEternaBuilding4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'team-galactic-eterna-building-4f',
            battles: [
                {
                    battleKey: 'commander-jupiter',
                    metadata: [BattleMetadata.Miniboss],
                    x: 61.1,
                    y: 32.1,
                },
            ],
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
