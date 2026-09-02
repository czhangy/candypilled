import { canalaveCity } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    encountersKey: 'canalave-city',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-canalave-city',
            x: 48.1,
            y: 30,
        },
    ],
};

export default CANALAVE_CITY;
