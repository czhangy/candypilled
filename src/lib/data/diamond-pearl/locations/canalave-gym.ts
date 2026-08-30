import {
    canalaveGym1f,
    canalaveGym2f,
    canalaveGym3f,
    canalaveGym4f,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_GYM: Location = {
    name: 'Canalave Gym',
    subareas: [
        {
            name: '1F',
            map: canalaveGym1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [],
                    battleKey: 'black-belt-ricky',
                    x: 14.4,
                    y: 43,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-gary',
                    x: 66.1,
                    y: 38.8,
                },
                {
                    metadata: [],
                    battleKey: 'ace-trainer-m-cesar',
                    x: 86.1,
                    y: 81.6,
                },
            ],
        },
        {
            name: '2F',
            map: canalaveGym2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-jackson',
                    x: 44.9,
                    y: 4.1,
                },
                {
                    metadata: [],
                    battleKey: 'ace-trainer-f-breanna',
                    x: 88.2,
                    y: 11.1,
                },
            ],
        },
        {
            name: '3F',
            map: canalaveGym3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [],
                    battleKey: 'worker-gerardo',
                    x: 25.1,
                    y: 3.8,
                },
                {
                    metadata: [],
                    battleKey: 'black-belt-david',
                    x: 78.2,
                    y: 3.8,
                },
            ],
        },
        {
            name: '4F',
            map: canalaveGym4f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Boss],
                    battleKey: 'leader-byron',
                    x: 51.8,
                    y: 4.1,
                },
            ],
        },
    ],
};

export default CANALAVE_GYM;
