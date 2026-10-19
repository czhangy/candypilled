import {
    skyPillar1f,
    skyPillar2f,
    skyPillar3f,
    skyPillar4f,
    skyPillar5f,
    skyPillarEntrance,
    skyPillarOutside,
    skyPillarTop,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SKY_PILLAR: Location = {
    name: 'Sky Pillar',
    subareas: [
        {
            name: 'Entrance',
            map: skyPillarEntrance,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Outside',
            map: skyPillarOutside,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '1F',
            map: skyPillar1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
        },
        {
            name: '2F',
            map: skyPillar2f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '3F',
            map: skyPillar3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-3f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
        },
        {
            name: '4F',
            map: skyPillar4f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '5F',
            map: skyPillar5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-5f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
        },
        {
            name: 'Top',
            map: skyPillarTop,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-apex',
            methodSplits: [
                { method: EncounterMethod.Static, split: 'Wallace' },
            ],
        },
    ],
};

export default SKY_PILLAR;
