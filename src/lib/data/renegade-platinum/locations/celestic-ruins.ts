import { celesticRuins } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CELESTIC_RUINS: Location = {
    name: 'Celestic Ruins',
    map: celesticRuins,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'galactic-boss-cyrus-celestic-ruins',
            x: 50,
            y: 9,
        },
    ],
};

export default CELESTIC_RUINS;
