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
        },
        {
            name: 'B1F',
            map: lavaridgeGymB1f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default LAVARIDGE_GYM;
