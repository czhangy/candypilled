import { hearthomeCityGate } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY_GATE: Location = {
    name: 'Hearthome City Gate',
    map: hearthomeCityGate,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-barry',
            x: 68,
            y: 48,
        },
    ],
};

export default HEARTHOME_CITY_GATE;
