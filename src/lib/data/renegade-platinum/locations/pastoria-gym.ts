import { pastoriaGym } from '@/lib/data/renegade-platinum/maps';
import { FieldCondition, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_GYM: Location = {
    name: 'Pastoria Gym',
    map: pastoriaGym,
    mapAnchor: MapAnchor.Bottom,
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from Wake',
            slug: 'waterfall',
        },
    ],
    battles: [
        {
            battleKey: 'tuber-m-jacky',
            fieldCondition: FieldCondition.Rain,
            x: 42.26,
            y: 75.47,
        },
        {
            battleKey: 'fisherman-walter',
            fieldCondition: FieldCondition.Rain,
            x: 34.34,
            y: 21.3,
        },
        {
            battleKey: 'sailor-damian',
            fieldCondition: FieldCondition.Rain,
            x: 26.42,
            y: 48.21,
        },
        {
            battleKey: 'tuber-f-caitlyn',
            fieldCondition: FieldCondition.Rain,
            x: 81.87,
            y: 75.47,
        },
        {
            battleKey: 'fisherman-erick',
            fieldCondition: FieldCondition.Rain,
            x: 73.95,
            y: 38.43,
        },
        {
            battleKey: 'sailor-samson',
            fieldCondition: FieldCondition.Rain,
            x: 18.5,
            y: 13.96,
        },
        {
            battleKey: 'leader-wake',
            fieldCondition: FieldCondition.Rain,
            x: 50.19,
            y: 4.17,
        },
    ],
};

export default PASTORIA_GYM;
