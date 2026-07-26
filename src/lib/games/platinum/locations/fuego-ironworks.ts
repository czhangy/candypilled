import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/games/platinum/maps';
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
        },
    ],
};

export default FUEGO_IRONWORKS;
