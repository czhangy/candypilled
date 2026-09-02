import { pastoriaCity } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
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
