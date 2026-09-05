import { canalaveCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    encountersKey: 'canalave-city',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-canalave-city',
            x: 45.1,
            y: 32.9,
        },
    ],
};

export default CANALAVE_CITY;
