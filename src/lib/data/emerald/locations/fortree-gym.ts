import { fortreeGym } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FORTREE_GYM: Location = {
    name: 'Fortree Gym',
    map: fortreeGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'bird-keeper-humberto',
            x: 22.5,
            y: 93.38,
        },
        {
            battleKey: 'bird-keeper-jared',
            x: 22.5,
            y: 57.38,
        },
        {
            battleKey: 'picnicker-ashley',
            x: 27.5,
            y: 69.38,
        },
        {
            battleKey: 'camper-flint',
            customHeight: 57,
            customWidth: 38,
            x: 50.0,
            y: 37.38,
        },
        {
            battleKey: 'bird-keeper-darius',
            x: 7.5,
            y: 41.38,
        },
        {
            battleKey: 'leader-winona-winona',
            x: 77.5,
            y: 9.38,
        },
    ],
};

export default FORTREE_GYM;
