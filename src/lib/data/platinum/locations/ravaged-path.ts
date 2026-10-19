import { ravagedPath } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RAVAGED_PATH: Location = {
    name: 'Ravaged Path',
    map: ravagedPath,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'ravaged-path',
    methodSplits: [
        { method: EncounterMethod.Cave, split: 'Roark' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Gardenia' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
    ],
};

export default RAVAGED_PATH;
