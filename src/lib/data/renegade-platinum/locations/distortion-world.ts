import { distortionWorld } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const DISTORTION_WORLD: Location = {
    name: 'Distortion World',
    map: distortionWorld,
    encountersKey: 'distortion-world',
    battles: [
        {
            battleKey: 'galactic-boss-cyrus-distortion-world',
            x: 43,
            y: 39.3,
        },
    ],
};

export default DISTORTION_WORLD;
