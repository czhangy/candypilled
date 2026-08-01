import { pastoriaCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    encountersKey: 'pastoria-city',
    battles: [
        {
            isMiniboss: true,
            battleKey: 'pkmn-trainer-barry::Barry 4',
            x: 24.5,
            y: 46.4,
        },
    ],
};

export default PASTORIA_CITY;
