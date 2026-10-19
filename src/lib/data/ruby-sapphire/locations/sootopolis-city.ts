import { sootopolisCity } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOOTOPOLIS_CITY: Location = {
    name: 'Sootopolis City',
    map: sootopolisCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sootopolis-city',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Wallace' },
        { method: EncounterMethod.GoodRod, split: 'Wallace' },
        { method: EncounterMethod.SuperRod, split: 'Wallace' },
        { method: EncounterMethod.Surf, split: 'Wallace' },
    ],
};

export default SOOTOPOLIS_CITY;
