import { jubilifeCity } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    tagPartner: [
        {
            battleKey: 'pkmn-trainer-dawn-jubilife-city-tag',
            gender: 'male',
        },
        {
            battleKey: 'pkmn-trainer-lucas-jubilife-city-tag',
            gender: 'female',
        },
    ],
    battles: [
        {
            customHeight: 40,
            battleKey: 'galactic-grunt-m-jubilife-city',
            x: 71.2,
            y: 5.8,
        },
    ],
};

export default JUBILIFE_CITY;
