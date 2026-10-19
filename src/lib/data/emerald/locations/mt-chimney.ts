import {
    mtChimneyPostLavaridge,
    mtChimneyPreLavaridge,
} from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_CHIMNEY: Location = {
    name: 'Mt. Chimney',
    subareas: [
        {
            name: 'Pre-Lavaridge',
            map: mtChimneyPreLavaridge,
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    battleKey: 'team-magma-grunt-f-mt-chimney',
                    x: 33.75,
                    y: 34.77,
                },
                {
                    battleKey: 'team-magma-grunt-m-mt-chimney',
                    x: 23.75,
                    y: 34.77,
                },
                {
                    battleKey: 'magma-admin-tabitha',
                    x: 31.25,
                    y: 24.14,
                },
                {
                    battleKey: 'magma-leader-maxie',
                    x: 33.75,
                    y: 13.5,
                },
            ],
        },
        {
            name: 'Post-Lavaridge',
            map: mtChimneyPostLavaridge,
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    battleKey: 'beauty-shirley',
                    x: 68.75,
                    y: 36.9,
                },
                {
                    battleKey: 'beauty-sheila',
                    x: 73.75,
                    y: 15.62,
                },
                {
                    battleKey: 'expert-f-shelby',
                    x: 41.25,
                    y: 39.03,
                },
                {
                    battleKey: 'hiker-sawyer',
                    x: 18.75,
                    y: 15.62,
                },
                {
                    battleKey: 'beauty-melissa',
                    x: 36.25,
                    y: 15.62,
                },
            ],
        },
    ],
};

export default MT_CHIMNEY;
