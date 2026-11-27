import {
    aquaHideout1f,
    aquaHideoutB1f,
    aquaHideoutB2f,
} from '@/lib/data/emerald/maps';
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
                    x: 73.21,
                    y: 14.48,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B1F',
                    width: 16,
                    x: 80.36,
                    y: 5,
                },
                {
                    height: 16,
                    location: 'Lilycove City',
                    width: 16,
                    x: 48.21,
                    y: 91.67,
                },
            ],
        },
        {
            name: 'B1F',
            map: aquaHideoutB1f,
            mapAnchor: MapAnchor.Left,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-2',
                    x: 55.88,
                    y: 68.1,
                },
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-3',
                    x: 12.75,
                    y: 26.43,
                },
                {
                    battleKey: 'team-aqua-grunt-f-aqua-hideout-5',
                    x: 40.2,
                    y: 76.43,
                },
                {
                    battleKey: 'team-aqua-grunt-f-aqua-hideout-7',
                    x: 55.88,
                    y: 88.93,
                },
            ],
            encountersKey: 'team-aqua-hideout',
            methodSplits: [{ method: EncounterMethod.Static, split: 'Winona' }],
            transitions: [
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B2F',
                    width: 16,
                    x: 24.51,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B2F',
                    width: 16,
                    x: 36.27,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'Entrance',
                    width: 16,
                    x: 57.84,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B2F',
                    width: 16,
                    x: 6.86,
                    y: 14.58,
                },
            ],
        },
        {
            name: 'B2F',
            map: aquaHideoutB2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-4',
                    x: 69.12,
                    y: 43.1,
                },
                {
                    battleKey: 'team-aqua-grunt-f-aqua-hideout-6',
                    x: 22.06,
                    y: 22.27,
                },
                {
                    battleKey: 'team-aqua-grunt-m-aqua-hideout-8',
                    x: 39.71,
                    y: 22.27,
                },
                {
                    battleKey: 'aqua-admin-matt-aqua-hideout',
                    x: 69.12,
                    y: 80.6,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B1F',
                    width: 16,
                    x: 36.76,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B1F',
                    width: 16,
                    x: 54.41,
                    y: 6.25,
                },
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B1F',
                    width: 16,
                    x: 10.29,
                    y: 14.58,
                },
                {
                    height: 16,
                    location: 'Aqua Hideout',
                    subarea: 'B1F',
                    width: 16,
                    x: 95.59,
                    y: 85.42,
                },
            ],
        },
    ],
};

export default AQUA_HIDEOUT;
