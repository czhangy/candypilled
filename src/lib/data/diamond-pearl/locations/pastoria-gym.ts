import { pastoriaGym } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            metadata: [],
            battleKey: 'tuber-m-jacky',
            x: 42.4,
            y: 75.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-walter',
            x: 34.5,
            y: 25.5,
        },
        {
            metadata: [],
            battleKey: 'sailor-damian',
            x: 26.8,
            y: 50.1,
        },
        {
            metadata: [],
            battleKey: 'tuber-f-caitlyn',
            x: 80.9,
            y: 75.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-erick',
            x: 73.2,
            y: 41.3,
        },
        {
            metadata: [],
            battleKey: 'sailor-samson',
            x: 19.1,
            y: 18.8,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-wake-wake',
            x: 49.9,
            y: 9.7,
        },
    ],
};

export default PASTORIA_GYM;
