import { floaromaMeadow } from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'floaroma-meadow',
    methodSplits: [{ method: EncounterMethod.HoneyTree, split: 'Gardenia' }],
    battles: [
        {
            battleKey: 'galactic-grunt-and-galactic-grunt-floaroma-meadow',
            customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
            x: 20.3,
            y: 47.1,
        },
    ],
};

export default FLOAROMA_MEADOW;
