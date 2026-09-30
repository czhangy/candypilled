import { oreburghCity } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_CITY: Location = {
    name: 'Oreburgh City',
    map: oreburghCity,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'oreburgh-city-trade',
    methodSplits: [{ method: EncounterMethod.Trade, split: 'Roark' }],
};

export default OREBURGH_CITY;
