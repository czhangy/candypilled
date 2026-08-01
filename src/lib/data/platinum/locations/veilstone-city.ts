import { veilstoneCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    encountersKey: 'veilstone-city',
    battles: [
        {
            isTag: true,
            customHeight: 53,
            battleKey: 'galactic-grunt-m::9',
            x: 40.4,
            y: 34.8,
        },
    ],
};

export default VEILSTONE_CITY;
