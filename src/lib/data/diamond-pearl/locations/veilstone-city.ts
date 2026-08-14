import { veilstoneCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    battles: [
        {
            metadata: [BattleMetadata.Tag],
            customHeight: 52,
            battleKey: 'galactic-grunt-m-16',
            x: 32.2,
            y: 34.4,
        },
    ],
};

export default VEILSTONE_CITY;
