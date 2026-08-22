import { pastoriaCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'pastoria-city',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            x: 74.2,
            y: 21.2,
        },
    ],
};

export default PASTORIA_CITY;
