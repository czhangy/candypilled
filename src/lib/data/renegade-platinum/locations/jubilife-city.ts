import {
    jubilifeCityCity,
    jubilifeCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    subareas: [
        {
            name: 'City',
            map: jubilifeCityCity,
            mapAnchor: MapAnchor.BottomLeft,
            items: [
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Looker',
                    slug: 'vs-recorder',
                },
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'fashion-case',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'hidden-power',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from NPC',
                    slug: 'facade',
                },
            ],
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
            mapAnchor: MapAnchor.Center,
            encountersKey: 'jubilife-city',
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Roark' }],
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
