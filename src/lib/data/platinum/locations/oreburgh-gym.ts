import { oreburghGym } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'youngster-jonathon',
            x: 33.11,
            y: 71.53,
        },
        {
            battleKey: 'youngster-darius',
            x: 55.02,
            y: 43.81,
        },
        {
            battleKey: 'leader-roark',
            x: 40.41,
            y: 12.13,
        },
    ],
};

export default OREBURGH_GYM;
