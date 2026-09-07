import {
    sootopolisGym1f,
    sootopolisGymB1f,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOOTOPOLIS_GYM: Location = {
    name: 'Sootopolis Gym',
    subareas: [
        {
            name: '1F',
            map: sootopolisGym1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B1F',
            map: sootopolisGymB1f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default SOOTOPOLIS_GYM;
