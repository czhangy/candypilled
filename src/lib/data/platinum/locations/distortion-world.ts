import { distortionWorld } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const DISTORTION_WORLD: Location = {
    name: 'Distortion World',
    map: distortionWorld,
    encountersKey: 'distortion-world',
    battles: [
        {
            isMiniboss: true,
            battleKey: 'galactic-boss-cyrus::Cyrus 3',
            x: 43.3,
            y: 39.2,
        },
    ],
};

export default DISTORTION_WORLD;
