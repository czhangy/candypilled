import { spearPillar } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    mapAnchor: MapAnchor.Bottom,
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-spear-pillar-tag' }],
    battles: [
        {
            customWidth: 54,
            battleKey: 'galactic-grunt-f-spear-pillar',
            x: 49.5,
            y: 75.7,
        },
        {
            customWidth: 84,
            battleKey: 'commander-jupiter-spear-pillar',
            x: 49.5,
            y: 48.3,
        },
        {
            battleKey: 'galactic-boss-cyrus-spear-pillar',
            x: 49.5,
            y: 41.52,
        },
    ],
};

export default SPEAR_PILLAR;
