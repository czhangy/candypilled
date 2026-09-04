import { spearPillar } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-spear-pillar-tag' }],
    battles: [
        {
            customWidth: 54,
            battleKey: 'galactic-grunt-f-spear-pillar',
            x: 49.2,
            y: 75.7,
        },
        {
            customWidth: 82,
            battleKey: 'commander-jupiter',
            x: 49.3,
            y: 48.6,
        },
    ],
};

export default SPEAR_PILLAR;
