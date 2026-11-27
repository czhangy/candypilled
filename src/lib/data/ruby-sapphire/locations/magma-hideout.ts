import {
    magmaHideout1f,
    magmaHideoutB1f,
    magmaHideoutB2f,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAGMA_HIDEOUT: Location = {
    name: 'Magma Hideout',
    subareas: [
        {
            name: 'Entrance',
            map: magmaHideout1f,
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-1',
                    x: 73.21,
                    y: 11.15,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '2F',
                    width: 16,
                    x: 48.21,
                    y: 5,
                },

                {
                    game: 'Ruby',
                    height: 16,
                    location: 'Lilycove City',
                    width: 16,
                    x: 48.21,
                    y: 91.67,
                },
            ],
        },
        {
            name: '1F',
            map: magmaHideoutB2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-magma-grunt-f-magma-hideout-5',
                    x: 39.71,
                    y: 13.93,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-6',
                    x: 92.65,
                    y: 47.27,
                },
                {
                    battleKey: 'magma-admin-tabitha-hideout',
                    x: 25,
                    y: 80.6,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '2F',
                    width: 16,
                    x: 10.29,
                    y: 14.58,
                },
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '2F',
                    width: 16,
                    x: 36.76,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '2F',
                    width: 16,
                    x: 54.41,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '2F',
                    width: 16,
                    x: 7.35,
                    y: 60.42,
                },
            ],
        },
        {
            name: '2F',
            map: magmaHideoutB1f,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'team-magma-hideout',
            methodSplits: [{ method: EncounterMethod.Static, split: 'Winona' }],
            battles: [
                {
                    battleKey: 'team-magma-grunt-f-magma-hideout-4',
                    x: 54.03,
                    y: 80.6,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-2',
                    x: 66.94,
                    y: 72.27,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-3',
                    x: 54.03,
                    y: 13.93,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: 'Entrance',
                    width: 16,
                    x: 5.65,
                    y: 14.58,
                },
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '1F',
                    width: 16,
                    x: 23.39,
                    y: 14.58,
                },
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '1F',
                    width: 16,
                    x: 37.9,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Magma Hideout',
                    subarea: '1F',
                    width: 16,
                    x: 47.58,
                    y: 6.25,
                },
            ],
        },
    ],
};

export default MAGMA_HIDEOUT;
