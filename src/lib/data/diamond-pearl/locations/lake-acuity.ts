import { lakeAcuity } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_ACUITY: Location = {
    name: 'Lake Acuity',
    map: lakeAcuity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'lake-acuity-area',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Volkner' },
        { method: EncounterMethod.Surf, split: 'Volkner' },
        { method: EncounterMethod.GoodRod, split: 'Volkner' },
        { method: EncounterMethod.OldRod, split: 'Volkner' },
    ],
};

export default LAKE_ACUITY;
