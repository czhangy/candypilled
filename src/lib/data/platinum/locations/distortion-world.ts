import { distortionWorld } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DISTORTION_WORLD: Location = {
    name: 'Distortion World',
    map: distortionWorld,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'distortion-world',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'galactic-boss-cyrus-distortion-world',
            x: 43.3,
            y: 39.2,
        },
    ],
};

export default DISTORTION_WORLD;
