import { sendoffSpring } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SENDOFF_SPRING: Location = {
    name: 'Sendoff Spring',
    map: sendoffSpring,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'sendoff-spring',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Volkner' },
        { method: EncounterMethod.Surf, split: 'Volkner' },
        { method: EncounterMethod.GoodRod, split: 'Volkner' },
        { method: EncounterMethod.OldRod, split: 'Volkner' },
    ],
};

export default SENDOFF_SPRING;
