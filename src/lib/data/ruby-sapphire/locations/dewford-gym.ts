import { dewfordGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DEWFORD_GYM: Location = {
    name: 'Dewford Gym',
    map: dewfordGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'battle-girl-laura',
            x: 69.44,
            y: 86.59,
        },
        {
            battleKey: 'black-belt-hideki',
            x: 13.54,
            y: 61.59,
        },
        {
            battleKey: 'battle-girl-tessa',
            x: 7.99,
            y: 36.59,
        },
        {
            battleKey: 'leader-brawly',
            x: 80.21,
            y: 15.38,
        },
    ],
};

export default DEWFORD_GYM;
