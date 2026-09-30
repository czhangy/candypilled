import { acuityLakefront } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ACUITY_LAKEFRONT: Location = {
    name: 'Acuity Lakefront',
    map: acuityLakefront,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'acuity-lakefront',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Candice' }],
};

export default ACUITY_LAKEFRONT;
