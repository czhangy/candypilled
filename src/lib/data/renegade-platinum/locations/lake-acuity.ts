import { lakeAcuity } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_ACUITY: Location = {
    name: 'Lake Acuity',
    map: lakeAcuity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'lake-acuity',
    methodSplits: [
        { method: EncounterMethod.Walking, split: 'Volkner' },
        { method: EncounterMethod.Surf, split: 'Volkner' },
        { method: EncounterMethod.OldRod, split: 'Volkner' },
        { method: EncounterMethod.GoodRod, split: 'Volkner' },
        { method: EncounterMethod.SuperRod, split: 'Volkner' },
        { method: EncounterMethod.PokeRadar, split: 'Volkner' },
    ],
};

export default LAKE_ACUITY;
