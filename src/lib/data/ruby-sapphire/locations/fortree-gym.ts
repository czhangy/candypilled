import { fortreeGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FORTREE_GYM: Location = {
    name: 'Fortree Gym',
    map: fortreeGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        { battleKey: 'bird-keeper-jared', x: 62.5, y: 89.38 },
        { battleKey: 'picnicker-kylee', x: 92.5, y: 77.38 },
        { battleKey: 'camper-terrell', x: 47.5, y: 37.38 },
        { battleKey: 'bird-keeper-will', x: 92.5, y: 5.38 },
        { battleKey: 'leader-winona', x: 22.5, y: 5.38 },
    ],
};

export default FORTREE_GYM;
