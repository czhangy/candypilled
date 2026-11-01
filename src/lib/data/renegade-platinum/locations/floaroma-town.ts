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
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'oran-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'cheri-berry',
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
