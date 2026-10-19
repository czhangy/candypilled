import { fieryPath } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FIERY_PATH: Location = {
    name: 'Fiery Path',
    map: fieryPath,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'fiery-path',
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Flannery' }],
};

export default FIERY_PATH;
