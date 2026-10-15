import { jaggedPass } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JAGGED_PASS: Location = {
    name: 'Jagged Pass',
    map: jaggedPass,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'jagged-pass',
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Flannery' }],
};

export default JAGGED_PASS;
