import { hearthomeCity, hearthomeCityGate } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    subareas: [
        {
            name: 'Gate',
            map: hearthomeCityGate,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Miniboss],
                    battleKey: 'pkmn-trainer-barry',
                    x: 68,
                    y: 48,
                },
            ],
        },
        {
            name: 'City',
            map: hearthomeCity,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'hearthome-city-area',
        },
    ],
};

export default HEARTHOME_CITY;
