import {
    hearthomeCityEastGate,
    hearthomeCityWestGate,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    subareas: [
        {
            name: 'West Gate',
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
        },
        {
            name: 'East Gate',
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
        },
    ],
};

export default HEARTHOME_CITY;
