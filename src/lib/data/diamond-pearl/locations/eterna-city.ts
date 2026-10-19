import { eternaCity } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_CITY: Location = {
    name: 'Eterna City',
    map: eternaCity,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'eterna-city-area',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Gardenia' },
        { method: EncounterMethod.Trade, split: 'Gardenia' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.Surf, split: 'Byron' },
    ],
};

export default ETERNA_CITY;
