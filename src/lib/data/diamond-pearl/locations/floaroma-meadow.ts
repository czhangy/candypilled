import { floaromaMeadow } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'floaroma-meadow',
    battles: [
        {
            metadata: [BattleMetadata.BackToBack],
            battleKey: 'galactic-grunt-m-floaroma-meadow-1',
            x: 13.9,
            y: 48.1,
        },
        {
            metadata: [BattleMetadata.BackToBack],
            battleKey: 'galactic-grunt-m-floaroma-meadow-2',
            x: 11.9,
            y: 48.1,
        },
    ],
};

export default FLOAROMA_MEADOW;
