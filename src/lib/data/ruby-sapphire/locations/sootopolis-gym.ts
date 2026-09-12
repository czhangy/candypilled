import {
    sootopolisGym1f,
    sootopolisGymB1f,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOOTOPOLIS_GYM: Location = {
    name: 'Sootopolis Gym',
    subareas: [
        {
            name: '1F',
            map: sootopolisGym1f,
            mapAnchor: MapAnchor.Center,
            battles: [{ battleKey: 'leader-wallace', x: 49.63, y: 8.5 }],
        },
        {
            name: 'B1F',
            map: sootopolisGymB1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                { battleKey: 'beauty-connie', x: 55.88, y: 66.43 },
                { battleKey: 'lass-andrea', x: 43.38, y: 74.36 },
                { battleKey: 'beauty-bridget', x: 37.87, y: 51.04 },
                { battleKey: 'lady-brianna', x: 55.88, y: 54.89 },
                { battleKey: 'beauty-olivia', x: 73.53, y: 27.97 },
                { battleKey: 'lass-crissy', x: 49.63, y: 28.21 },
                { battleKey: 'beauty-tiffany', x: 20.22, y: 35.66 },
                { battleKey: 'pokefan-f-marissa', x: 67.65, y: 35.66 },
            ],
        },
    ],
};

export default SOOTOPOLIS_GYM;
