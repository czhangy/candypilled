import { oreburghGym } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    mapAnchor: MapAnchor.Unaudited,
    battles: [
        {
            battleKey: 'youngster-jonathon',
            x: 32.6,
            y: 71.9,
        },
        {
            battleKey: 'youngster-darius',
            x: 55.5,
            y: 43.7,
        },
        {
            battleKey: 'leader-roark',
            x: 40.4,
            y: 12,
        },
    ],
};

export default OREBURGH_GYM;
