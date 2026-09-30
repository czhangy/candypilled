import { eternaCity } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_CITY: Location = {
    name: 'Eterna City',
    map: eternaCity,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'eterna-city',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Gardenia' },
        { method: EncounterMethod.OldRod, split: 'Gardenia' },
        { method: EncounterMethod.GoodRod, split: 'Gardenia' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
        { method: EncounterMethod.Egg, split: 'Fantina' },
    ],
    battles: [
        {
            battleKey: 'galactic-grunt-m-eterna-city',
            x: 27.3,
            y: 12.7,
        },
    ],
};

export default ETERNA_CITY;
