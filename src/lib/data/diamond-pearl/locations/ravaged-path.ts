import { ravagedPath } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RAVAGED_PATH: Location = {
    name: 'Ravaged Path',
    map: ravagedPath,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'ravaged-path',
    methodSplits: [
        { method: EncounterMethod.Cave, split: 'Roark' },
        { method: EncounterMethod.OldRod, split: 'Gardenia' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.Surf, split: 'Byron' },
    ],
};

export default RAVAGED_PATH;
