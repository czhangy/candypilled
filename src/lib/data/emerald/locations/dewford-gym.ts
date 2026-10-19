import { dewfordGym } from '@/lib/data/emerald/maps';
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
            y: 90.51,
        },
        {
            battleKey: 'battle-girl-lilith',
            x: 91.67,
            y: 33.37,
        },
        {
            battleKey: 'sailor-brenden',
            x: 80.56,
            y: 44.08,
        },
        {
            battleKey: 'black-belt-takao',
            x: 13.89,
            y: 65.51,
        },
        {
            battleKey: 'black-belt-cristian',
            x: 41.67,
            y: 29.8,
        },
        {
            battleKey: 'battle-girl-jocelyn',
            x: 86.11,
            y: 11.94,
        },
        {
            battleKey: 'leader-brawly',
            x: 25.0,
            y: 11.94,
        },
    ],
};

export default DEWFORD_GYM;
