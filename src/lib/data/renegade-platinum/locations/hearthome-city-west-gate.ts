import { hearthomeCityWestGate } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY_WEST_GATE: Location = {
    name: 'Hearthome City West Gate',
    map: hearthomeCityWestGate,
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

export default HEARTHOME_CITY_WEST_GATE;
