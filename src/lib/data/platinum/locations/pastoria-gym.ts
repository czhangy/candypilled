import { pastoriaGym } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'tuber-m-jacky',
            x: 42.2,
            y: 75.08,
        },
        {
            battleKey: 'fisherman-walter',
            x: 34.28,
            y: 21.25,
        },
        {
            battleKey: 'sailor-damian',
            x: 26.36,
            y: 48.17,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            x: 81.81,
            y: 75.08,
        },
        {
            battleKey: 'fisherman-erick',
            x: 73.89,
            y: 38.38,
        },
        {
            battleKey: 'sailor-samson',
            x: 18.44,
            y: 13.91,
        },
        {
            battleKey: 'leader-wake',
            x: 50.12,
            y: 4.13,
        },
    ],
};

export default PASTORIA_GYM;
