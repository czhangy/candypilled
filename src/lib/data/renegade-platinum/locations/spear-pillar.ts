import { spearPillar } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    mapAnchor: MapAnchor.Bottom,
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-spear-pillar-tag' }],
    battles: [
        {
            battleKey: 'galactic-grunt-and-galactic-grunt-spear-pillar',
            metadata: [BattleMetadata.Double],
            customWidth: 54,
            x: 49.2,
            y: 75.7,
        },
        {
            battleKey: 'commander-mars-and-commander-jupiter-spear-pillar',
            metadata: [BattleMetadata.Tag, BattleMetadata.Miniboss],
            customWidth: 82,
            x: 49.3,
            y: 48.6,
        },
    ],
};

export default SPEAR_PILLAR;
