import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/renegade-platinum/maps';
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
                    x: 4.8,
                    y: 18.1,
                },
                {
                    battleKey: 'worker-holden',
                    x: 49.9,
                    y: 14,
                },
                {
                    battleKey: 'worker-conrad',
                    x: 67.6,
                    y: 91.4,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
