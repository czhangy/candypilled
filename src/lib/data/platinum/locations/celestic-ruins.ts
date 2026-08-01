import { celesticRuins } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CELESTIC_RUINS: Location = {
    name: 'Celestic Ruins',
    map: celesticRuins,
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'galactic-boss-cyrus-cyrus-1',
            x: 54.4,
            y: 21.3,
        },
    ],
};

export default CELESTIC_RUINS;
