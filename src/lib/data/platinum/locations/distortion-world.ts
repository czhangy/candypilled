import { distortionWorld } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DISTORTION_WORLD: Location = {
    name: 'Distortion World',
    map: distortionWorld,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'distortion-world',
    methodSplits: [{ method: EncounterMethod.Static, split: 'Volkner' }],
    battles: [
        {
            battleKey: 'galactic-boss-cyrus-distortion-world',
            customHeight: 36,
            x: 43.12,
            y: 39.15,
        },
    ],
};

export default DISTORTION_WORLD;
