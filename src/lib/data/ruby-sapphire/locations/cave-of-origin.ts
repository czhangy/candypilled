import {
    caveOfOrigin1f,
    caveOfOriginB1f,
    caveOfOriginB2f,
    caveOfOriginB3f,
    caveOfOriginB4fAqua,
    caveOfOriginB4fMagma,
    caveOfOriginEntrance,
} from '@/lib/data/ruby-sapphire/maps';
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
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Wallace' }],
            transitions: [
                {
                    height: 16,
                    location: 'Sootopolis City',
                    width: 16,
                    x: 50,
                    y: 78.85,
                },
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: '1F',
                    width: 16,
                    x: 50,
                    y: 21.15,
                },
            ],
        },
        {
            name: '1F',
            map: caveOfOrigin1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Wallace' }],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'Entrance',
                    width: 16,
                    x: 50,
                    y: 76.09,
                },
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B1F',
                    width: 16,
                    x: 63.04,
                    y: 23.91,
                },
            ],
        },
        {
            name: 'B1F',
            map: caveOfOriginB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Wallace' }],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: '1F',
                    width: 16,
                    x: 58.7,
                    y: 23.91,
                },
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B2F',
                    width: 16,
                    x: 23.91,
                    y: 50,
                },
            ],
        },
        {
            name: 'B2F',
            map: caveOfOriginB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b2f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Wallace' }],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B1F',
                    width: 16,
                    x: 26.19,
                    y: 50,
                },
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B3F',
                    width: 16,
                    x: 40.48,
                    y: 69.05,
                },
            ],
        },
        {
            name: 'B3F',
            map: caveOfOriginB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b3f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Wallace' }],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B2F',
                    width: 16,
                    x: 39.47,
                    y: 69.05,
                },
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B4F',
                    width: 16,
                    x: 65.79,
                    y: 30.95,
                },
            ],
        },
        {
            name: 'B4F',
            map: {
                Ruby: caveOfOriginB4fMagma,
                Sapphire: caveOfOriginB4fAqua,
            },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b4f',
            methodSplits: [
                { method: EncounterMethod.Static, split: 'Wallace' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Cave of Origin',
                    subarea: 'B3F',
                    width: 16,
                    x: 65.79,
                    y: 28.95,
                },
            ],
        },
    ],
};

export default CAVE_OF_ORIGIN;
