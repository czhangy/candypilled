import { rustboroCity } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTBORO_CITY: Location = {
    name: 'Rustboro City',
    map: rustboroCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'rustboro-city',
    methodSplits: [
        { method: EncounterMethod.Trade, split: 'Roxanne' },
        { method: EncounterMethod.Fossil, split: 'Norman' },
    ],
};

export default RUSTBORO_CITY;
