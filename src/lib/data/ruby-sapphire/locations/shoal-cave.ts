import {
    shoalCaveEntranceRoomHigh,
    shoalCaveEntranceRoomLow,
    shoalCaveIceRoom,
    shoalCaveInnerRoomHigh,
    shoalCaveInnerRoomLow,
    shoalCaveLowerRoom,
    shoalCaveStairsRoom,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SHOAL_CAVE: Location = {
    name: 'Shoal Cave',
    subareas: [
        {
            name: 'Entrance (High)',
            map: shoalCaveEntranceRoomHigh,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-high-tide',
        },
        {
            name: 'Inner (High)',
            map: shoalCaveInnerRoomHigh,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-high-tide',
        },
        {
            name: 'Entrance (Low)',
            map: shoalCaveEntranceRoomLow,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-low-tide',
        },
        {
            name: 'Inner (Low)',
            map: shoalCaveInnerRoomLow,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-low-tide',
        },
        {
            name: 'Stairs (Low)',
            map: shoalCaveStairsRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-b1f',
        },
        {
            name: 'Lower (Low)',
            map: shoalCaveLowerRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-b2f',
        },
        {
            name: 'Ice (Low)',
            map: shoalCaveIceRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-b3f',
        },
    ],
};

export default SHOAL_CAVE;
