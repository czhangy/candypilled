import {
    shoalCaveEntranceRoomHigh,
    shoalCaveEntranceRoomLow,
    shoalCaveIceRoom,
    shoalCaveInnerRoomHigh,
    shoalCaveInnerRoomLow,
    shoalCaveLowerRoom,
    shoalCaveStairsRoom,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAVE_WINONA = [{ method: EncounterMethod.Cave, split: 'Winona' }];

const SHOAL_CAVE: Location = {
    name: 'Shoal Cave',
    subareas: [
        {
            name: 'Entrance (High)',
            map: shoalCaveEntranceRoomHigh,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-high-tide',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
        },
        {
            name: 'Inner (High)',
            map: shoalCaveInnerRoomHigh,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-high-tide',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
        },
        {
            name: 'Entrance (Low)',
            map: shoalCaveEntranceRoomLow,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-low-tide',
            methodSplits: CAVE_WINONA,
        },
        {
            name: 'Inner (Low)',
            map: shoalCaveInnerRoomLow,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-low-tide',
            methodSplits: CAVE_WINONA,
        },
        {
            name: 'Stairs (Low)',
            map: shoalCaveStairsRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-b1f',
            methodSplits: CAVE_WINONA,
        },
        {
            name: 'Lower (Low)',
            map: shoalCaveLowerRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-b2f',
            methodSplits: CAVE_WINONA,
        },
        {
            name: 'Ice (Low)',
            map: shoalCaveIceRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'shoal-cave-b3f',
            methodSplits: CAVE_WINONA,
        },
    ],
};

export default SHOAL_CAVE;
