import { hearthomeCityEastGate } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY_EAST_GATE: Location = {
    name: 'Hearthome City East Gate',
    map: hearthomeCityEastGate,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-hearthome-city-east-gate',
            metadata: [BattleMetadata.Miniboss],
            x: 69.3,
            y: 47,
        },
    ],
};

export default HEARTHOME_CITY_EAST_GATE;
