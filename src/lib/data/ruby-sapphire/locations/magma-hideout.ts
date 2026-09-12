import {
    magmaHideout1f,
    magmaHideoutB1f,
    magmaHideoutB2f,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
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
                    x: 72.99,
                    y: 10.75,
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
                    y: 13.18,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-6',
                    x: 92.46,
                    y: 46.77,
                },
                {
                    battleKey: 'magma-admin-tabitha-hideout',
                    x: 24.63,
                    y: 80.1,
                },
            ],
        },
        {
            name: '2F',
            map: magmaHideoutB1f,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'team-magma-hideout',
            battles: [
                {
                    battleKey: 'team-magma-grunt-f-magma-hideout-4',
                    x: 53.93,
                    y: 80.1,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-2',
                    x: 66.83,
                    y: 71.77,
                },
                {
                    battleKey: 'team-magma-grunt-m-magma-hideout-3',
                    x: 54.03,
                    y: 13.18,
                },
            ],
        },
    ],
};

export default MAGMA_HIDEOUT;
