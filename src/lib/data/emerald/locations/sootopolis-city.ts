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
    transitions: [
        {
            height: 16,
            location: 'Cave of Origin',
            subarea: 'Entrance',
            width: 16,
            x: 52.5,
            y: 27.5,
        },
        {
            height: 16,
            location: 'Sootopolis Gym',
            subarea: '1F',
            width: 16,
            x: 52.5,
            y: 54.17,
        },
    ],
};

export default SOOTOPOLIS_CITY;
