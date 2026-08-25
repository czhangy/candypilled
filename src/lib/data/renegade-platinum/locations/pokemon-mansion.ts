import { pokemonMansion } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_MANSION: Location = {
    name: 'Pokémon Mansion',
    map: pokemonMansion,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'pokemon-mansion',
    battles: [
        {
            battleKey: 'galactic-grunt-m-pokemon-mansion-1',
            metadata: [],
            x: 84.5,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-m-pokemon-mansion-2',
            metadata: [],
            x: 36.6,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-f-pokemon-mansion-1',
            metadata: [],
            x: 22.4,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-f-pokemon-mansion-2',
            metadata: [],
            x: 8.2,
            y: 23.4,
        },
        {
            battleKey: 'galactic-grunt-m-pokemon-mansion-3',
            metadata: [],
            x: 1.1,
            y: 30.2,
        },
        {
            battleKey: 'commander-saturn-and-gentleman-backlot',
            metadata: [BattleMetadata.Tag, BattleMetadata.Miniboss],
            customWidth: 38,
            x: 58.8,
            y: 23.4,
        },
    ],
};

export default POKEMON_MANSION;
