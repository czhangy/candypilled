import {
    aquaHideout1f,
    aquaHideoutB1f,
    aquaHideoutB2f,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
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
                    y: 14.48,
                },
            ],
        },
        {
            name: 'B1F',
            map: aquaHideoutB1f,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'team-aqua-hideout',
            methodSplits: [{ method: EncounterMethod.Static, split: 'Winona' }],
            battles: [
                {
                    battleKey: 'team-aqua-grunt-f-aqua-hideout-2',
                    x: 40.2,
                    y: 76.43,
                },
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-3',
                    x: 53.92,
                    y: 76.43,
                },
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-4',
                    x: 12.75,
                    y: 26.43,
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
                    x: 69.12,
                    y: 43.1,
                },
                {
                    battleKey: 'team-aqua-grunt-f-aqua-hideout-6',
                    x: 30.88,
                    y: 26.43,
                },
                {
                    battleKey: 'aqua-admin-matt-hideout',
                    x: 69.12,
                    y: 80.6,
                },
            ],
        },
    ],
};

export default AQUA_HIDEOUT;
