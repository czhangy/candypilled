import { eternaCity } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ETERNA_CITY: Location = {
    name: 'Eterna City',
    map: eternaCity,
    encountersKey: 'eterna-city',
    battles: [
        {
            battleKey: 'galactic-grunt-m-eterna-city',
            metadata: [],
            x: 27.3,
            y: 12.7,
        },
    ],
};

export default ETERNA_CITY;
