import { spearPillar } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-spear-pillar-tag' }],
    battles: [
        {
            battleKey: 'galactic-grunt-and-galactic-grunt-spear-pillar',
            customWidth: 54,
            x: 49.2,
            y: 75.7,
        },
        {
            battleKey: 'commander-mars-and-commander-jupiter-spear-pillar',
            customWidth: 82,
            x: 49.3,
            y: 48.6,
        },
    ],
};

export default SPEAR_PILLAR;
