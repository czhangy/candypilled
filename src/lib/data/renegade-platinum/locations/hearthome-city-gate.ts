import { hearthomeCityGate } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY_GATE: Location = {
    name: 'Hearthome City Gate',
    map: hearthomeCityGate,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'elite-four-aaron-route-208',
            metadata: [BattleMetadata.Miniboss],
            x: 44.9,
            y: 45.9,
        },
    ],
};

export default HEARTHOME_CITY_GATE;
