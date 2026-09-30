import { trophyGarden } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TROPHY_GARDEN: Location = {
    name: 'Trophy Garden',
    map: trophyGarden,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trophy-garden',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Wake' }],
};

export default TROPHY_GARDEN;
