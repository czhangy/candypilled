import { canalaveCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    encountersKey: 'canalave-city',
    battles: [
        {
            isMiniboss: true,
            battleKey: 'pkmn-trainer-barry::Barry 5',
            x: 48.1,
            y: 29.9,
        },
    ],
};

export default CANALAVE_CITY;
