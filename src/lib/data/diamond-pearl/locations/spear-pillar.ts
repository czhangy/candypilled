import { spearPillar } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            metadata: [BattleMetadata.Double],
            customWidth: 54,
            battleKey: 'galactic-grunt-f-14',
            x: 49.3,
            y: 75.7,
        },
        {
            metadata: [BattleMetadata.Miniboss, BattleMetadata.Tag],
            customWidth: 84,
            battleKey: 'commander-jupiter-jupiter-2',
            x: 49.8,
            y: 48.3,
        },
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'galactic-boss-cyrus-cyrus-2',
            x: 49.6,
            y: 41.5,
        },
    ],
};

export default SPEAR_PILLAR;
