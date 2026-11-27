import {
    caveOfOrigin1f,
    caveOfOriginB1f,
    caveOfOriginEntrance,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAVE_OF_ORIGIN: Location = {
    name: 'Cave of Origin',
    subareas: [
        {
            name: 'Entrance',
            map: caveOfOriginEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-entrance',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: '1F',
                    width: 16,
                    x: 50,
                    y: 21.15,
                },
                {
                    height: 16,
                    location: 'Sootopolis City',
                    width: 16,
                    x: 50,
                    y: 78.85,
                },
            ],
        },
        {
            name: '1F',
            map: caveOfOrigin1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B1F',
                    width: 16,
                    x: 63.04,
                    y: 23.91,
                },
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'Entrance',
                    width: 16,
                    x: 50,
                    y: 76.09,
                },
            ],
        },
        {
            name: 'B1F',
            map: caveOfOriginB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: '1F',
                    width: 16,
                    x: 50,
                    y: 18.42,
                },
            ],
        },
    ],
};

export default CAVE_OF_ORIGIN;
