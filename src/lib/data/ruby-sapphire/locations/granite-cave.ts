import {
    graniteCave1f,
    graniteCaveB1f,
    graniteCaveB2f,
    graniteCaveStevensRoom,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GRANITE_CAVE: Location = {
    name: 'Granite Cave',
    subareas: [
        {
            name: '1F',
            map: graniteCave1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'granite-cave-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Brawly' }],
        },
        {
            name: 'B1F',
            map: graniteCaveB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'granite-cave-b1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Brawly' }],
        },
        {
            name: 'B2F',
            map: graniteCaveB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'granite-cave-b2f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Brawly' }],
        },
        {
            name: "Steven's Room",
            map: graniteCaveStevensRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'granite-cave-1fsmall-room',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Brawly' }],
        },
    ],
};

export default GRANITE_CAVE;
