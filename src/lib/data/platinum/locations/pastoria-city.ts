import { pastoriaCity } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'pastoria-city',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Wake' },
        { method: EncounterMethod.OldRod, split: 'Wake' },
        { method: EncounterMethod.GoodRod, split: 'Wake' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            x: 24.3,
            y: 43.9,
        },
    ],
};

export default PASTORIA_CITY;
