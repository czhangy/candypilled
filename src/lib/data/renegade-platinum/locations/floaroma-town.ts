import {
    floaromaTownPokemonCenter,
    floaromaTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const FLOAROMA_TOWN: Location = {
    name: 'Floaroma Town',
    subareas: [
        {
            name: 'Town',
            map: floaromaTownTown,
        },
        {
            name: 'Pokémon Center',
            map: floaromaTownPokemonCenter,
            encountersKey: 'floaroma-town',
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
