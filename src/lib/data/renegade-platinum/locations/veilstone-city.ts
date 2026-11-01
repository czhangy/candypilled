import {
    veilstoneCity,
    veilstoneCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    subareas: [
        {
            name: 'City',
            map: veilstoneCity,
            mapAnchor: MapAnchor.TopLeft,
            items: [
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'coin-case',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'embargo',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'dark-pulse',
                },
            ],
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
                    customHeight: 60,
                    x: 39.9,
                    y: 31.4,
                },
            ],
        },
        {
            name: 'Pokémon Center',
            map: veilstoneCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'dragon-tamer-nils',
                    x: 70,
                    y: 35.7,
                },
            ],
        },
    ],
};

export default VEILSTONE_CITY;
