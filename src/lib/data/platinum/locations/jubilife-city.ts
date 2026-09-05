import { jubilifeCity } from '@/lib/data/platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
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
            customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
            battleKey: 'galactic-grunt-m-jubilife-city',
            x: 72.5,
            y: 5.7,
        },
    ],
};

export default JUBILIFE_CITY;
