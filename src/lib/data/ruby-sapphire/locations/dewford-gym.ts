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
            y: 86.94,
        },
        {
            battleKey: 'black-belt-hideki',
            x: 13.89,
            y: 61.94,
        },
        {
            battleKey: 'battle-girl-tessa',
            x: 8.33,
            y: 36.94,
        },
        {
            battleKey: 'leader-brawly',
            x: 80.56,
            y: 15.51,
        },
    ],
};

export default DEWFORD_GYM;
