import {
    hearthomeGymRoom1,
    hearthomeGymRoom2,
    hearthomeGymRoom3,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    subareas: [
        {
            name: 'Room 1',
            map: hearthomeGymRoom1,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'youngster-donny',
                    metadata: [BattleMetadata.Optional],
                    x: 77.5,
                    y: 51.7,
                },
                {
                    battleKey: 'lass-molly',
                    metadata: [BattleMetadata.Optional],
                    x: 23.3,
                    y: 51.7,
                },
            ],
        },
        {
            name: 'Room 2',
            map: hearthomeGymRoom2,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'school-kid-chance',
                    metadata: [BattleMetadata.Optional],
                    x: 75.9,
                    y: 70.3,
                },
                {
                    battleKey: 'school-kid-mackenzie',
                    metadata: [BattleMetadata.Optional],
                    x: 12.8,
                    y: 60.7,
                },
                {
                    battleKey: 'ace-trainer-catherine',
                    metadata: [BattleMetadata.Optional],
                    x: 38.7,
                    y: 31.8,
                },
                {
                    battleKey: 'ace-trainer-allen',
                    metadata: [BattleMetadata.Optional],
                    x: 64.8,
                    y: 22.1,
                },
            ],
        },
        {
            name: 'Room 3',
            map: hearthomeGymRoom3,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'leader-fantina',
                    metadata: [BattleMetadata.Boss],
                    x: 24.6,
                    y: 63.8,
                },
            ],
        },
    ],
};

export default HEARTHOME_GYM;
