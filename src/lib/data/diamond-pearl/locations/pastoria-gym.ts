import { pastoriaGym } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    battles: [
        {
            battleKey: 'tuber-m-jacky',
            x: 41.8,
            y: 75.5,
        },
        {
            battleKey: 'fisherman-walter',
            x: 33.7,
            y: 21.3,
        },
        {
            battleKey: 'sailor-damian',
            x: 26.2,
            y: 48.2,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            x: 81.9,
            y: 75.4,
        },
        {
            battleKey: 'fisherman-erick',
            x: 74,
            y: 38.4,
        },
        {
            battleKey: 'sailor-samson',
            x: 18.1,
            y: 14,
        },
        {
            battleKey: 'leader-wake',
            x: 50,
            y: 3.9,
        },
    ],
};

export default PASTORIA_GYM;
