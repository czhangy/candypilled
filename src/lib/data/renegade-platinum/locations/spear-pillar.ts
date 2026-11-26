import { spearPillar } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    mapAnchor: MapAnchor.Bottom,
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-spear-pillar-tag' }],
    battles: [
        {
            battleKey: 'galactic-grunt-and-galactic-grunt-spear-pillar',
            customWidth: 54,
            x: 49.25,
            y: 75.72,
        },
        {
            battleKey: 'commander-mars-and-commander-jupiter-spear-pillar',
            customWidth: 82,
            x: 49.25,
            y: 48.58,
        },
    ],
};

export default SPEAR_PILLAR;
