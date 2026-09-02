import {
    veilstoneCity,
    veilstoneCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    subareas: [
        {
            name: 'City',
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
                    battleKey: 'galactic-grunt-m-veilstone-city',
                    metadata: [BattleMetadata.Tag],
                    customHeight: 60,
                    x: 39.9,
                    y: 31.4,
                },
            ],
        },
        {
            name: 'Pokémon Center',
            map: veilstoneCityPokemonCenter,
            battles: [
                {
                    battleKey: 'dragon-tamer-nils',
                    metadata: [BattleMetadata.Optional],
                    x: 70,
                    y: 35.7,
                },
            ],
        },
    ],
};

export default VEILSTONE_CITY;
