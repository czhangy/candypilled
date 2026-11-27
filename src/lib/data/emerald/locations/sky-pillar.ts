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
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: 'Outside',
                    width: 16,
                    x: 80.56,
                    y: 25,
                },
                {
                    height: 16,
                    location: 'Route 131',
                    width: 16,
                    x: 36.11,
                    y: 91.67,
                },
            ],
        },
        {
            name: 'Outside',
            map: skyPillarOutside,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '1F',
                    width: 16,
                    x: 51.79,
                    y: 23.91,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: 'Entrance',
                    width: 16,
                    x: 62.5,
                    y: 58.7,
                },
            ],
        },
        {
            name: '1F',
            map: skyPillar1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '2F',
                    width: 16,
                    x: 75,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: 'Outside',
                    width: 32,
                    x: 50,
                    y: 96.43,
                },
            ],
        },
        {
            name: '2F',
            map: skyPillar2f,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '3F',
                    width: 16,
                    x: 25,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '1F',
                    width: 16,
                    x: 75,
                    y: 10.71,
                },
            ],
        },
        {
            name: '3F',
            map: skyPillar3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-3f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '2F',
                    width: 16,
                    x: 25,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '4F',
                    width: 16,
                    x: 53.57,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '4F',
                    width: 16,
                    x: 82.14,
                    y: 10.71,
                },
            ],
        },
        {
            name: '4F',
            map: skyPillar4f,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '5F',
                    width: 16,
                    x: 25,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '3F',
                    width: 16,
                    x: 53.57,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '3F',
                    width: 16,
                    x: 82.14,
                    y: 10.71,
                },
            ],
        },
        {
            name: '5F',
            map: skyPillar5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-5f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '4F',
                    width: 16,
                    x: 25,
                    y: 10.71,
                },
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: 'Top',
                    width: 16,
                    x: 75,
                    y: 10.71,
                },
            ],
        },
        {
            name: 'Top',
            map: skyPillarTop,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sky-pillar-apex',
            methodSplits: [
                { method: EncounterMethod.Static, split: 'Wallace' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Sky Pillar',
                    subarea: '5F',
                    width: 16,
                    x: 61.11,
                    y: 60.42,
                },
            ],
        },
    ],
};

export default SKY_PILLAR;
