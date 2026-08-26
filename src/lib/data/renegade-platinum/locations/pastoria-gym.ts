import { pastoriaGym } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'fisherman-walter',
            metadata: [BattleMetadata.Optional],
            x: 34.2,
            y: 21.3,
        },
        {
            battleKey: 'sailor-damian',
            metadata: [],
            x: 26.2,
            y: 48,
        },
        {
            battleKey: 'tuber-m-jacky',
            metadata: [],
            x: 41.8,
            y: 75.4,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            metadata: [],
            x: 81.9,
            y: 75.4,
        },
        {
            battleKey: 'fisherman-erick',
            metadata: [BattleMetadata.Optional],
            x: 74,
            y: 38.4,
        },
        {
            battleKey: 'sailor-samson',
            metadata: [],
            x: 18.3,
            y: 13.8,
        },
        {
            battleKey: 'leader-wake',
            metadata: [BattleMetadata.Boss],
            x: 50,
            y: 4.2,
        },
    ],
};

export default PASTORIA_GYM;
