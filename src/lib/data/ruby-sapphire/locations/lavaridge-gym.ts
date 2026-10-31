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
                    x: 95.45,
                    y: 80.6,
                },
                {
                    battleKey: 'cooltrainer-m-zane',
                    x: 40.91,
                    y: 72.27,
                },
                {
                    battleKey: 'kindler-axle',
                    x: 40.91,
                    y: 51.43,
                },
                {
                    battleKey: 'battle-girl-sadie',
                    x: 4.55,
                    y: 9.77,
                },
                {
                    battleKey: 'kindler-andy',
                    x: 59.09,
                    y: 9.77,
                },
                {
                    battleKey: 'leader-flannery',
                    x: 77.27,
                    y: 43.1,
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
