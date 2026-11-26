import { pastoriaGym } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'tuber-m-jacky',
            x: 42.26,
            y: 75.12,
        },
        {
            battleKey: 'fisherman-walter',
            x: 34.34,
            y: 21.3,
        },
        {
            battleKey: 'sailor-damian',
            x: 26.42,
            y: 48.21,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            x: 81.87,
            y: 75.12,
        },
        {
            battleKey: 'fisherman-erick',
            x: 73.95,
            y: 38.43,
        },
        {
            battleKey: 'sailor-samson',
            x: 18.5,
            y: 13.96,
        },
        {
            battleKey: 'leader-wake',
            x: 50.19,
            y: 4.17,
        },
    ],
};

export default PASTORIA_GYM;
