import { hearthomeCity } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    map: hearthomeCity,
    encountersKey: 'hearthome-city-west-gate',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-hearthome-city',
            x: 61.7,
            y: 76.7,
        },
    ],
};

export default HEARTHOME_CITY;
