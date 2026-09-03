import { oreburghGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    battles: [
        {
            battleKey: 'youngster-jonathon',
            x: 40,
            y: 77.3,
        },
        {
            battleKey: 'youngster-darius',
            x: 59,
            y: 51.6,
        },
        {
            battleKey: 'leader-roark',
            x: 46.6,
            y: 22.8,
        },
    ],
};

export default OREBURGH_GYM;
