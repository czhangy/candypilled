import { pastoriaGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    battles: [
        {
            battleKey: 'tuber-m-jacky',
            x: 42.1,
            y: 75.5,
        },
        {
            battleKey: 'fisherman-walter',
            x: 34.2,
            y: 21.5,
        },
        {
            battleKey: 'sailor-damian',
            x: 26,
            y: 47.9,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            x: 81.7,
            y: 75.3,
        },
        {
            battleKey: 'fisherman-erick',
            x: 73.8,
            y: 38.3,
        },
        {
            battleKey: 'sailor-samson',
            x: 18.3,
            y: 13.7,
        },
        {
            battleKey: 'leader-wake',
            x: 50,
            y: 4.1,
        },
    ],
};

export default PASTORIA_GYM;
