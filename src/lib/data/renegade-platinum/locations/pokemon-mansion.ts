import { pokemonMansion } from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_MANSION: Location = {
    name: 'Pokémon Mansion',
    map: pokemonMansion,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from NPC',
            slug: 'swagger',
        },
    ],
    tagPartner: [{ battleKey: 'pkmn-trainer-barry-pokemon-mansion-tag' }],
    battles: [
        {
            battleKey: 'galactic-grunt-m-pokemon-mansion-1',
            x: 84.56,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-m-pokemon-mansion-2',
            x: 36.67,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-f-pokemon-mansion-1',
            x: 22.48,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-f-pokemon-mansion-2',
            x: 8.29,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-m-pokemon-mansion-3',
            x: 1.19,
            y: 30.24,
        },
        {
            battleKey: 'commander-saturn-and-gentleman-backlot',
            customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
            x: 58.84,
            y: 23.4,
        },
    ],
};

export default POKEMON_MANSION;
