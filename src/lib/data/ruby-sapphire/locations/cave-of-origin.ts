import {
    caveOfOrigin1f,
    caveOfOriginB1f,
    caveOfOriginB2f,
    caveOfOriginB3f,
    caveOfOriginB4fAqua,
    caveOfOriginB4fMagma,
    caveOfOriginEntrance,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAVE_OF_ORIGIN: Location = {
    name: 'Cave of Origin',
    subareas: [
        {
            name: 'Entrance',
            map: caveOfOriginEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-entrance',
        },
        {
            name: '1F',
            map: caveOfOrigin1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-1f',
        },
        {
            name: 'B1F',
            map: caveOfOriginB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b1f',
        },
        {
            name: 'B2F',
            map: caveOfOriginB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b2f',
        },
        {
            name: 'B3F',
            map: caveOfOriginB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b3f',
        },
        {
            name: 'B4F',
            map: {
                Ruby: caveOfOriginB4fMagma,
                Sapphire: caveOfOriginB4fAqua,
            },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b4f',
        },
    ],
};

export default CAVE_OF_ORIGIN;
