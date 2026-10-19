import {
    magmaHideout1f,
    magmaHideoutB1f,
    magmaHideoutB2f,
    magmaHideoutB3f,
    magmaHideoutB4f,
    magmaHideoutB5f,
    magmaHideoutEntrance,
    magmaHideoutStairs,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAGMA_HIDEOUT: Location = {
    name: 'Magma Hideout',
    subareas: [
        {
            name: 'Entrance',
            map: magmaHideoutEntrance,
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-2',
                    x: 82.43,
                    y: 53.54,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-1',
                    x: 12.16,
                    y: 14.06,
                },
            ],
            encountersKey: 'magma-hideout',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Winona' }],
        },
        {
            name: '1F',
            map: magmaHideout1f,
            mapAnchor: MapAnchor.Top,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-3',
                    x: 65.15,
                    y: 29.09,
                },
                {
                    battleKey: 'team-magma-grunt-f-magma-hideout-14',
                    x: 25.76,
                    y: 21.39,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-5',
                    x: 37.88,
                    y: 36.78,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-4',
                    x: 56.06,
                    y: 49.6,
                },
            ],
        },
        {
            name: 'B1F',
            map: magmaHideoutB1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-7',
                    x: 52.04,
                    y: 40.51,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-8',
                    x: 60.2,
                    y: 29.8,
                },
                {
                    battleKey: 'team-magma-grunt-f-magma-hideout-15',
                    x: 15.31,
                    y: 47.66,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-6',
                    x: 17.35,
                    y: 33.37,
                },
            ],
        },
        {
            name: 'B2F',
            map: magmaHideoutB2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-9',
                    x: 8.93,
                    y: 30.6,
                },
                {
                    battleKey: 'team-magma-grunt-f-magma-hideout-16',
                    x: 76.79,
                    y: 88.93,
                },
            ],
        },
        {
            name: 'B3F',
            map: magmaHideoutB3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-10',
                    x: 68.75,
                    y: 19.67,
                },
            ],
        },
        {
            name: 'B4F',
            map: magmaHideoutB4f,
            mapAnchor: MapAnchor.Right,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-11',
                    x: 53.39,
                    y: 79.8,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-12',
                    x: 51.69,
                    y: 47.66,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-13',
                    x: 44.92,
                    y: 47.66,
                },
                {
                    battleKey: 'magma-admin-tabitha-magma-hideout',
                    x: 38.14,
                    y: 15.51,
                },
                {
                    battleKey: 'magma-leader-maxie-magma-hideout',
                    x: 27.97,
                    y: 76.23,
                },
            ],
        },
        {
            name: 'B5F',
            map: magmaHideoutB5f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Stairs',
            map: magmaHideoutStairs,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default MAGMA_HIDEOUT;
