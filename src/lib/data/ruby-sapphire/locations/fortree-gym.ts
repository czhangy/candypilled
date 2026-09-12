import { fortreeGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FORTREE_GYM: Location = {
    name: 'Fortree Gym',
    map: fortreeGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        { battleKey: 'bird-keeper-jared', x: 62.5, y: 89.01 },
        { battleKey: 'picnicker-kylee', x: 92.19, y: 77.01 },
        { battleKey: 'camper-terrell', x: 47.19, y: 37.26 },
        { battleKey: 'bird-keeper-will', x: 92.19, y: 5.01 },
        { battleKey: 'leader-winona', x: 22.19, y: 5.01 },
    ],
};

export default FORTREE_GYM;
