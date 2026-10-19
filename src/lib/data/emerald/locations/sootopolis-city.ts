import { sootopolisCity } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOOTOPOLIS_CITY: Location = {
    name: 'Sootopolis City',
    map: sootopolisCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sootopolis-city',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Juan' },
        { method: EncounterMethod.GoodRod, split: 'Juan' },
        { method: EncounterMethod.SuperRod, split: 'Juan' },
        { method: EncounterMethod.Surf, split: 'Juan' },
    ],
};

export default SOOTOPOLIS_CITY;
