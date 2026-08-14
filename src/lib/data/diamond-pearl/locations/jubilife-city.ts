import { jubilifeCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    battles: [
        {
            metadata: [BattleMetadata.Tag],
            customHeight: 40,
            battleKey: 'galactic-grunt-m-1',
            x: 70.3,
            y: 5.2,
        },
    ],
};

export default JUBILIFE_CITY;
