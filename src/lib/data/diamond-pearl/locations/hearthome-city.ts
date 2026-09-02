import { hearthomeCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    map: hearthomeCity,
    encountersKey: 'hearthome-city-west-gate',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-hearthome-city',
            x: 60.8,
            y: 77.7,
        },
    ],
};

export default HEARTHOME_CITY;
