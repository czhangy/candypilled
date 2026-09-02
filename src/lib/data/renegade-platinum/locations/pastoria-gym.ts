import { pastoriaGym } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    battles: [
        {
            battleKey: 'fisherman-walter',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Rain,
            x: 34.2,
            y: 21.3,
        },
        {
            battleKey: 'sailor-damian',
            metadata: [],
            fieldCondition: FieldCondition.Rain,
            x: 26.2,
            y: 48,
        },
        {
            battleKey: 'tuber-m-jacky',
            metadata: [],
            fieldCondition: FieldCondition.Rain,
            x: 41.8,
            y: 75.4,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            metadata: [],
            fieldCondition: FieldCondition.Rain,
            x: 81.9,
            y: 75.4,
        },
        {
            battleKey: 'fisherman-erick',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Rain,
            x: 74,
            y: 38.4,
        },
        {
            battleKey: 'sailor-samson',
            metadata: [],
            fieldCondition: FieldCondition.Rain,
            x: 18.3,
            y: 13.8,
        },
        {
            battleKey: 'leader-wake',
            metadata: [BattleMetadata.Boss],
            fieldCondition: FieldCondition.Rain,
            x: 50,
            y: 4.2,
        },
    ],
};

export default PASTORIA_GYM;
