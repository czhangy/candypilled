import { distortionWorld } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DISTORTION_WORLD: Location = {
    name: 'Distortion World',
    map: distortionWorld,
    encountersKey: 'distortion-world',
    battles: [
        {
            battleKey: 'galactic-boss-cyrus-distortion-world',
            metadata: [BattleMetadata.BackToBack, BattleMetadata.Miniboss],
            x: 43,
            y: 39.3,
        },
    ],
};

export default DISTORTION_WORLD;
