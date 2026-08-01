import { spearPillar } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    battles: [
        {
            isDouble: true,
            customWidth: 54,
            battleKey: 'galactic-grunt-f::13',
            x: 49.2,
            y: 75.7,
        },
        {
            isMiniboss: true,
            isTag: true,
            customWidth: 82,
            battleKey: 'commander-jupiter::Jupiter',
            x: 49.3,
            y: 48.6,
        },
    ],
};

export default SPEAR_PILLAR;
