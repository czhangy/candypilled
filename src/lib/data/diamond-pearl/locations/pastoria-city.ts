import { pastoriaCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    encountersKey: 'pastoria-city',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-barry-3',
            x: 74.2,
            y: 21.2,
        },
    ],
};

export default PASTORIA_CITY;
