import { veilstoneCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    mapAnchor: MapAnchor.TopLeft,
    battles: [
        {
            metadata: [BattleMetadata.Tag],
            customHeight: 52,
            battleKey: 'galactic-grunt-m-veilstone-city',
            x: 32.2,
            y: 34.4,
        },
    ],
};

export default VEILSTONE_CITY;
