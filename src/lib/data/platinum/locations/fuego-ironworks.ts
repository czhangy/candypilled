import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/platinum/maps';
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
                    isOptional: true,
                    battleKey: 'worker::Dillan',
                    x: 5,
                    y: 24.9,
                },
                {
                    isOptional: true,
                    battleKey: 'worker::Holden',
                    x: 50.2,
                    y: 20.4,
                },
                {
                    isOptional: true,
                    battleKey: 'worker::Conrad',
                    x: 67.9,
                    y: 91.1,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
