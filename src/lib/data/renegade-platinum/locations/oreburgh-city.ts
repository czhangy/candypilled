import {
    oreburghCityCity,
    oreburghCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_CITY: Location = {
    name: 'Oreburgh City',
    subareas: [
        {
            name: 'City',
            map: oreburghCityCity,
            mapAnchor: MapAnchor.TopLeft,
            encountersKey: 'oreburgh-city-trade',
            items: [
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Gift from boy after tour',
                    slug: 'oval-stone',
                },
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Gift from girl in top-left building',
                    slug: 'dusk-ball',
                },
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Gift from boy in bottom-right building',
                    slug: 'great-ball',
                },
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Poké Mart',
                    slug: 'poke-ball',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Trade, split: 'Roark' }],
        },
        {
            name: 'Pokémon Center',
            map: oreburghCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-city',
            items: [
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'power-herb',
                },
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'mental-herb',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'thick-club',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'twisted-spoon',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'soft-sand',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'focus-band',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'hard-stone',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Roark' }],
            battles: [
                {
                    battleKey: 'reporter-helen',
                    x: 16.7,
                    y: 18.2,
                },
            ],
        },
    ],
};

export default OREBURGH_CITY;
