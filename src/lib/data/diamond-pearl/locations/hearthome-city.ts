import { hearthomeCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    map: hearthomeCity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'hearthome-city-west-gate',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-barry-2',
            x: 60.8,
            y: 77.7,
        },
    ],
};

export default HEARTHOME_CITY;
