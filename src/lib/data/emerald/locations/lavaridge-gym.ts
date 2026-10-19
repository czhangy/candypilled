import { lavaridgeGym1f, lavaridgeGymB1f } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAVARIDGE_GYM: Location = {
    name: 'Lavaridge Gym',
    subareas: [
        {
            name: '1F',
            map: lavaridgeGym1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'kindler-cole',
                    x: 20.59,
                    y: 75.49,
                },
                {
                    battleKey: 'cooltrainer-m-gerald',
                    x: 14.71,
                    y: 80.76,
                },
                {
                    battleKey: 'kindler-axle',
                    x: 20.59,
                    y: 54.44,
                },
                {
                    battleKey: 'battle-girl-danielle',
                    x: 32.35,
                    y: 12.34,
                },
                {
                    battleKey: 'leader-flannery',
                    x: 79.41,
                    y: 49.18,
                },
            ],
        },
        {
            name: 'B1F',
            map: lavaridgeGymB1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'kindler-jeff',
                    x: 79.41,
                    y: 91.28,
                },
                {
                    battleKey: 'kindler-jace',
                    x: 26.47,
                    y: 96.55,
                },
                {
                    battleKey: 'hiker-eli',
                    x: 26.47,
                    y: 86.02,
                },
                {
                    battleKey: 'kindler-keegan',
                    x: 20.59,
                    y: 33.39,
                },
            ],
        },
    ],
};

export default LAVARIDGE_GYM;
