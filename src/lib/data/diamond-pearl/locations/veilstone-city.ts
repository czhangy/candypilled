import { veilstoneCity } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    tagPartner: [
        {
            battleKey: 'pkmn-trainer-dawn-veilstone-city-tag',
            gender: 'male',
        },
        {
            battleKey: 'pkmn-trainer-lucas-veilstone-city-tag',
            gender: 'female',
        },
    ],
    battles: [
        {
            customHeight: 60,
            battleKey: 'galactic-grunt-m-veilstone-city',
            x: 40,
            y: 31.5,
        },
    ],
};

export default VEILSTONE_CITY;
