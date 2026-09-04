import { oreburghGym } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    battles: [
        {
            battleKey: 'youngster-jonathon',
            x: 32.2,
            y: 71.9,
        },
        {
            battleKey: 'youngster-darius',
            x: 55.5,
            y: 43.9,
        },
        {
            battleKey: 'leader-roark',
            x: 40,
            y: 12.2,
        },
    ],
};

export default OREBURGH_GYM;
