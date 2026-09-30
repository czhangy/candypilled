import { ravagedPath } from '@/lib/data/renegade-platinum/maps';
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
        { method: EncounterMethod.OldRod, split: 'Roark' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
    ],
};

export default RAVAGED_PATH;
