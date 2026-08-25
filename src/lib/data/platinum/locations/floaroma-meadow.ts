import { floaromaMeadow } from '@/lib/data/platinum/maps';
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
            battleKey: 'galactic-grunt-m-floaroma-meadow',
            customWidth: 38,
            x: 13,
            y: 47.9,
        },
    ],
};

export default FLOAROMA_MEADOW;
