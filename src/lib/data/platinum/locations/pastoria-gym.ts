import { pastoriaGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    battles: [
        {
            battleKey: 'tuber-m::Jacky',
            x: 42.4,
            y: 75.7,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Walter',
            x: 34.5,
            y: 25.5,
        },
        {
            battleKey: 'sailor::Damian',
            x: 26.8,
            y: 50.1,
        },
        {
            battleKey: 'tuber-f::Caitlyn',
            x: 80.9,
            y: 75.7,
        },
        {
            isOptional: true,
            battleKey: 'fisherman::Erick',
            x: 73.2,
            y: 41.3,
        },
        {
            battleKey: 'sailor::Samson',
            x: 19.1,
            y: 18.8,
        },
        {
            isBoss: true,
            battleKey: 'leader-wake::Wake',
            x: 49.9,
            y: 9.7,
        },
    ],
};

export default PASTORIA_GYM;
