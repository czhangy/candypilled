import { canalaveCity } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    encountersKey: 'canalave-city',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-canalave-city',
            x: 45.3,
            y: 32.8,
        },
    ],
};

export default CANALAVE_CITY;
