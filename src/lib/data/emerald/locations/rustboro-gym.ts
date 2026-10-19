import { rustboroGym } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTBORO_GYM: Location = {
    name: 'Rustboro Gym',
    map: rustboroGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'youngster-josh',
            x: 50,
            y: 66.72,
        },
        {
            battleKey: 'youngster-tommy',
            x: 31.82,
            y: 46.72,
        },
        {
            battleKey: 'hiker-marc',
            x: 13.64,
            y: 31.72,
        },
        {
            battleKey: 'leader-roxanne',
            x: 50,
            y: 11.72,
        },
    ],
};

export default RUSTBORO_GYM;
