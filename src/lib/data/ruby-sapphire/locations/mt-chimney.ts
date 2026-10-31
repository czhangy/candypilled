import {
    mtChimneyPostEvil,
    mtChimneyPreEvilAqua,
    mtChimneyPreEvilMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_CHIMNEY: Location = {
    name: 'Mt. Chimney',
    subareas: [
        {
            name: 'Pre-Lavaridge',
            map: {
                Ruby: mtChimneyPreEvilMagma,
                Sapphire: mtChimneyPreEvilAqua,
            },
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-mt-chimney',
                    game: 'Ruby',
                    x: 23.75,
                    y: 32.65,
                },
                {
                    battleKey: 'team-aqua-grunt-m-mt-chimney',
                    game: 'Sapphire',
                    x: 23.75,
                    y: 32.65,
                },
                {
                    battleKey: 'magma-admin-tabitha',
                    game: 'Ruby',
                    x: 31.25,
                    y: 24.14,
                },
                {
                    battleKey: 'aqua-admin-matt',
                    game: 'Sapphire',
                    x: 31.25,
                    y: 24.14,
                },
                {
                    battleKey: 'magma-leader-maxie',
                    game: 'Ruby',
                    x: 33.75,
                    y: 13.5,
                },
                {
                    battleKey: 'aqua-leader-archie',
                    game: 'Sapphire',
                    x: 33.75,
                    y: 13.5,
                },
            ],
        },
        {
            name: 'Post-Lavaridge',
            map: mtChimneyPostEvil,
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
                    battleKey: 'beauty-melissa',
                    x: 36.25,
                    y: 15.62,
                },
            ],
        },
    ],
};

export default MT_CHIMNEY;
