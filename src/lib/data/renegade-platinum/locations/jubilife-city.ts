import {
    jubilifeCityCity,
    jubilifeCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    subareas: [
        {
            name: 'City',
            map: jubilifeCityCity,
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
                    battleKey: 'galactic-grunt-m-jubilife-city',
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 72.7,
                    y: 5.6,
                },
            ],
        },
        {
            name: 'Pokémon Center',
            map: jubilifeCityPokemonCenter,
            encountersKey: 'jubilife-city',
            battles: [
                {
                    battleKey: 'reporter-kayla',
                    x: 16.7,
                    y: 18,
                },
            ],
        },
    ],
};

export default JUBILIFE_CITY;
