import { lavaridgeGym1f, lavaridgeGymB1f } from '@/lib/data/ruby-sapphire/maps';
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
                    x: 94.89,
                    y: 80.18,
                },
                {
                    battleKey: 'cooltrainer-m-zane',
                    x: 40.91,
                    y: 71.84,
                },
                {
                    battleKey: 'kindler-axle',
                    x: 40.34,
                    y: 50.75,
                },
                {
                    battleKey: 'battle-girl-sadie',
                    x: 4.55,
                    y: 9.34,
                },
                {
                    battleKey: 'kindler-andy',
                    x: 58.52,
                    y: 9.6,
                },
                {
                    battleKey: 'leader-flannery',
                    x: 76.7,
                    y: 42.68,
                },
            ],
        },
        {
            name: 'B1F',
            map: lavaridgeGymB1f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default LAVARIDGE_GYM;
