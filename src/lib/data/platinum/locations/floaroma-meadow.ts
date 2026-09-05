import { floaromaMeadow } from '@/lib/data/platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    encountersKey: 'floaroma-meadow',
    battles: [
        {
            battleKey: 'galactic-grunt-m-floaroma-meadow',
            customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
            x: 20.3,
            y: 73.6,
        },
    ],
};

export default FLOAROMA_MEADOW;
