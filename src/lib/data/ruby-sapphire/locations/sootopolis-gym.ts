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
            battles: [{ battleKey: 'leader-wallace', x: 50, y: 9.01 }],
        },
        {
            name: 'B1F',
            map: sootopolisGymB1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                { battleKey: 'beauty-connie', x: 55.88, y: 66.71 },
                { battleKey: 'lass-andrea', x: 44.12, y: 74.4 },
                { battleKey: 'beauty-bridget', x: 38.24, y: 51.32 },
                { battleKey: 'lady-brianna', x: 55.88, y: 55.17 },
                { battleKey: 'beauty-olivia', x: 73.53, y: 28.25 },
                { battleKey: 'lass-crissy', x: 50, y: 28.25 },
                { battleKey: 'beauty-tiffany', x: 20.59, y: 35.94 },
                { battleKey: 'pokefan-f-marissa', x: 67.65, y: 35.94 },
            ],
        },
    ],
};

export default SOOTOPOLIS_GYM;
