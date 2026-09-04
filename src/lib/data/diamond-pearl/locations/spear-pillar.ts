import { spearPillar } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-spear-pillar-tag' }],
    battles: [
        {
            customWidth: 54,
            battleKey: 'galactic-grunt-f-spear-pillar',
            x: 49.3,
            y: 75.7,
        },
        {
            customWidth: 84,
            battleKey: 'commander-jupiter-spear-pillar',
            x: 49.8,
            y: 48.3,
        },
        {
            battleKey: 'galactic-boss-cyrus-spear-pillar',
            x: 49.6,
            y: 41.5,
        },
    ],
};

export default SPEAR_PILLAR;
