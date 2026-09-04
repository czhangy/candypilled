import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const FUEGO_IRONWORKS: Location = {
    name: 'Fuego Ironworks',
    subareas: [
        {
            name: 'Exterior',
            map: fuegoIronworksExterior,
            encountersKey: 'fuego-ironworks',
        },
        {
            name: 'Interior',
            map: fuegoIronworksInterior,
            battles: [
                {
                    battleKey: 'worker-dillan',
                    x: 5,
                    y: 18.3,
                },
                {
                    battleKey: 'worker-holden',
                    x: 49.9,
                    y: 14,
                },
                {
                    battleKey: 'worker-conrad',
                    x: 67.8,
                    y: 91.1,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
