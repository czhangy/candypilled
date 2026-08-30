import { pastoriaCity } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'pastoria-city',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            metadata: [BattleMetadata.Miniboss],
            x: 22.8,
            y: 43.8,
        },
    ],
};

export default PASTORIA_CITY;
