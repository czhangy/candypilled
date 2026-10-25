import { canalaveCity } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'canalave-city',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Byron' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-canalave-city',
            x: 45.31,
            y: 32.91,
        },
    ],
};

export default CANALAVE_CITY;
