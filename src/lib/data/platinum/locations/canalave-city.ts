import { canalaveCity } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'canalave-city',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-barry-5',
            x: 48.1,
            y: 29.9,
        },
    ],
};

export default CANALAVE_CITY;
