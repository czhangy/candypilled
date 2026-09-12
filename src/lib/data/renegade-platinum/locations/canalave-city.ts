import { canalaveCity } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    mapAnchor: MapAnchor.Unaudited,
    encountersKey: 'canalave-city',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-canalave-city',
            x: 45.3,
            y: 32.9,
        },
    ],
};

export default CANALAVE_CITY;
