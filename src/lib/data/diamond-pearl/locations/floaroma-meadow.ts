import { floaromaMeadow } from '@/lib/data/diamond-pearl/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    encountersKey: 'floaroma-meadow',
    battles: [
        {
            metadata: [BattleMetadata.BackToBack],
            battleKey: 'galactic-grunt-m-floaroma-meadow',
            customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
            x: 20.4,
            y: 73.6,
        },
    ],
};

export default FLOAROMA_MEADOW;
