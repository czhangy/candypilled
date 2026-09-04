import { pastoriaCity } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    encountersKey: 'pastoria-city',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            x: 82,
            y: 18.7,
        },
    ],
};

export default PASTORIA_CITY;
