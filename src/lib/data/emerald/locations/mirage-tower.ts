import {
    mirageTower1f,
    mirageTower2f,
    mirageTower3f,
    mirageTower4f,
} from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MIRAGE_TOWER: Location = {
    name: 'Mirage Tower',
    subareas: [
        {
            name: '1F',
            map: mirageTower1f,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Mirage Tower',
                    subarea: '2F',
                    width: 16,
                    x: 73.81,
                    y: 14.71,
                },
                {
                    height: 16,
                    location: 'Route 111',
                    subarea: 'Desert',
                    width: 16,
                    x: 50,
                    y: 85.29,
                },
            ],
        },
        {
            name: '2F',
            map: mirageTower2f,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Mirage Tower',
                    subarea: '1F',
                    width: 16,
                    x: 73.81,
                    y: 14.71,
                },
                {
                    height: 16,
                    location: 'Mirage Tower',
                    subarea: '3F',
                    width: 16,
                    x: 88.1,
                    y: 73.53,
                },
            ],
        },
        {
            name: '3F',
            map: mirageTower3f,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Mirage Tower',
                    subarea: '4F',
                    width: 16,
                    x: 11.9,
                    y: 26.47,
                },
                {
                    height: 16,
                    location: 'Mirage Tower',
                    subarea: '2F',
                    width: 16,
                    x: 88.1,
                    y: 73.53,
                },
            ],
        },
        {
            name: '4F',
            map: mirageTower4f,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Mirage Tower',
                    subarea: '3F',
                    width: 16,
                    x: 11.54,
                    y: 45,
                },
            ],
        },
    ],
};

export default MIRAGE_TOWER;
