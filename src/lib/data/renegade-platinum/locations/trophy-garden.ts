import { trophyGarden } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TROPHY_GARDEN: Location = {
    name: 'Trophy Garden',
    map: trophyGarden,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trophy-garden',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Maylene' },
        { method: EncounterMethod.PokeRadar, split: 'Maylene' },
    ],
};

export default TROPHY_GARDEN;
