import { distortionWorld } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DISTORTION_WORLD: Location = {
    name: 'Distortion World',
    map: distortionWorld,
    mapAnchor: MapAnchor.Unaudited,
    encountersKey: 'distortion-world',
    battles: [
        {
            battleKey: 'galactic-boss-cyrus-distortion-world',
            x: 43.3,
            y: 39.2,
        },
    ],
};

export default DISTORTION_WORLD;
