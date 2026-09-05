import { veilstoneCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    encountersKey: 'veilstone-city',
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
            x: 39.8,
            y: 31.3,
        },
    ],
};

export default VEILSTONE_CITY;
