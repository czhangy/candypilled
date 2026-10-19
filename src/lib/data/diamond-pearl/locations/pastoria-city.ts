import { pastoriaCity } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'pastoria-city',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Maylene' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.Surf, split: 'Byron' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            x: 82,
            y: 18.7,
        },
    ],
};

export default PASTORIA_CITY;
