import { pastoriaCity } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'pastoria-city',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Wake' },
        { method: EncounterMethod.GoodRod, split: 'Wake' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            x: 22.8,
            y: 43.8,
        },
    ],
};

export default PASTORIA_CITY;
