import { rustboroGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTBORO_GYM: Location = {
    name: 'Rustboro Gym',
    map: rustboroGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'youngster-josh',
            x: 67.61,
            y: 64.93,
        },
        {
            battleKey: 'youngster-tommy',
            x: 30.68,
            y: 38.94,
        },
        {
            battleKey: 'leader-roxanne',
            x: 50,
            y: 12.29,
        },
    ],
};

export default RUSTBORO_GYM;
