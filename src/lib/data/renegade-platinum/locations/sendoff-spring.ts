import { sendoffSpring } from '@/lib/data/renegade-platinum/maps';
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
        { method: EncounterMethod.OldRod, split: 'Volkner' },
        { method: EncounterMethod.GoodRod, split: 'Volkner' },
        { method: EncounterMethod.SuperRod, split: 'Volkner' },
        { method: EncounterMethod.PokeRadar, split: 'Volkner' },
    ],
};

export default SENDOFF_SPRING;
