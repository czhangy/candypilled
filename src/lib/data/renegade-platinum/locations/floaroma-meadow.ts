import { floaromaMeadow } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'floaroma-meadow',
    battles: [
        {
            battleKey: 'galactic-grunt-and-galactic-grunt-floaroma-meadow',
            metadata: [BattleMetadata.Double],
            customWidth: 38,
            x: 20.3,
            y: 47.1,
        },
    ],
};

export default FLOAROMA_MEADOW;
