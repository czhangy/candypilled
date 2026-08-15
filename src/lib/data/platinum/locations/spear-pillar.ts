import { spearPillar } from '@/lib/data/platinum/maps';
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
            battleKey: 'galactic-grunt-f-13',
            x: 49.2,
            y: 75.7,
        },
        {
            metadata: [BattleMetadata.Miniboss, BattleMetadata.Tag],
            customWidth: 82,
            battleKey: 'commander-jupiter-jupiter',
            x: 49.3,
            y: 48.6,
        },
    ],
};

export default SPEAR_PILLAR;
