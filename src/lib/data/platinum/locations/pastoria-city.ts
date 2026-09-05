import { pastoriaCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    encountersKey: 'pastoria-city',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            x: 24.3,
            y: 43.9,
        },
    ],
};

export default PASTORIA_CITY;
