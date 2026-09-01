import { spearPillar } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    mapAnchor: MapAnchor.Bottom,
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-spear-pillar-tag' }],
    battles: [
        {
            metadata: [BattleMetadata.Double],
            customWidth: 54,
            battleKey: 'galactic-grunt-f-spear-pillar',
            x: 49.2,
            y: 75.7,
        },
        {
            metadata: [BattleMetadata.Miniboss, BattleMetadata.Tag],
            customWidth: 82,
            battleKey: 'commander-jupiter',
            x: 49.3,
            y: 48.6,
        },
    ],
};

export default SPEAR_PILLAR;
