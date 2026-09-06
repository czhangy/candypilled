import { oreburghGym } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    mapAnchor: MapAnchor.Unaudited,
    battles: [
        {
            battleKey: 'youngster-jonathon',
            x: 32.4,
            y: 71.7,
        },
        {
            battleKey: 'youngster-darius',
            x: 55.7,
            y: 43.7,
        },
        {
            battleKey: 'leader-roark',
            x: 40.2,
            y: 12.1,
        },
    ],
};

export default OREBURGH_GYM;
