import {
    aquaHideout1f,
    aquaHideoutB1f,
    aquaHideoutB2f,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const AQUA_HIDEOUT: Location = {
    name: 'Aqua Hideout',
    subareas: [
        {
            name: 'Entrance',
            map: aquaHideout1f,
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-1',
                    x: 75,
                    y: 14.28,
                },
            ],
        },
        {
            name: 'B1F',
            map: aquaHideoutB1f,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'team-aqua-hideout',
            battles: [
                {
                    battleKey: 'team-aqua-grunt-f-aqua-hideout-2',
                    x: 40.32,
                    y: 75.92,
                },
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-3',
                    x: 53.92,
                    y: 75.92,
                },
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-4',
                    x: 12.75,
                    y: 25.92,
                },
            ],
        },
        {
            name: 'B2F',
            map: aquaHideoutB2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-5',
                    x: 68.93,
                    y: 42.85,
                },
                {
                    battleKey: 'team-aqua-grunt-f-aqua-hideout-6',
                    x: 30.7,
                    y: 25.92,
                },
                {
                    battleKey: 'aqua-admin-matt-hideout',
                    x: 69.3,
                    y: 80.35,
                },
            ],
        },
    ],
};

export default AQUA_HIDEOUT;
