import { pastoriaGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    battles: [
        {
            battleKey: 'tuber-m-jacky',
            x: 42.4,
            y: 75.7,
        },
        {
            isOptional: true,
            battleKey: 'fisherman-walter',
            x: 34.5,
            y: 25.5,
        },
        {
            battleKey: 'sailor-damian',
            x: 26.8,
            y: 50.1,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            x: 80.9,
            y: 75.7,
        },
        {
            isOptional: true,
            battleKey: 'fisherman-erick',
            x: 73.2,
            y: 41.3,
        },
        {
            battleKey: 'sailor-samson',
            x: 19.1,
            y: 18.8,
        },
        {
            isBoss: true,
            battleKey: 'leader-wake-wake',
            x: 49.9,
            y: 9.7,
        },
    ],
};

export default PASTORIA_GYM;
