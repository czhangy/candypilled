import { jubilifeCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    battles: [
        {
            isTag: true,
            customHeight: 40,
            battleKey: 'galactic-grunt-m::1',
            x: 71.2,
            y: 5.8,
        },
    ],
};

export default JUBILIFE_CITY;
