import { spearPillar } from '@/lib/data/platinum/maps';
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
            y: 75.8,
        },
        {
            customWidth: 82,
            battleKey: 'commander-jupiter',
            x: 49.5,
            y: 48.27,
        },
    ],
};

export default SPEAR_PILLAR;
