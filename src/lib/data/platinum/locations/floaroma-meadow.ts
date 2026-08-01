import { floaromaMeadow } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    encountersKey: 'floaroma-meadow',
    battles: [
        {
            metadata: [BattleMetadata.BackToBack],
            battleKey: 'galactic-grunt-m-3',

            x: 13.9,
            y: 48.1,
        },
        {
            metadata: [BattleMetadata.BackToBack],
            battleKey: 'galactic-grunt-m-4',
            x: 11.9,
            y: 48.1,
        },
    ],
};

export default FLOAROMA_MEADOW;
