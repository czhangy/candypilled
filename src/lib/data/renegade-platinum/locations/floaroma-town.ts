import {
    floaromaTownPokemonCenter,
    floaromaTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_TOWN: Location = {
    name: 'Floaroma Town',
    subareas: [
        {
            name: 'Town',
            map: floaromaTownTown,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'floaroma-town-trade',
            items: [
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'oran-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'cheri-berry',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from old man in centermost house',
                    slug: 'aerial-ace',
                },
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Poké Mart',
                    slug: 'poke-ball',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Trade, split: 'Gardenia' },
            ],
        },
        {
            name: 'Pokémon Center',
            map: floaromaTownPokemonCenter,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'floaroma-town',
            items: [
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'metal-coat',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'electirizer',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'leftovers',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'deep-sea-scale',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'Thief shop',
                    slug: 'miracle-seed',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Gardenia' }],
            battles: [
                {
                    battleKey: 'reporter-jenny',
                    x: 16.7,
                    y: 17.9,
                },
            ],
        },
    ],
};

export default FLOAROMA_TOWN;
