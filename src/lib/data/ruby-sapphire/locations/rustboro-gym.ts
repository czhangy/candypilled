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
            x: 68.18,
            y: 64.97,
        },
        {
            battleKey: 'youngster-tommy',
            x: 31.82,
            y: 38.65,
        },
        {
            battleKey: 'leader-roxanne',
            x: 50,
            y: 12.34,
        },
    ],
};

export default RUSTBORO_GYM;
