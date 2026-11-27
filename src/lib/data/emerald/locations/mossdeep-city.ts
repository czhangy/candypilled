import {
    mossdeepCity,
    mossdeepCitySpaceCenter1f,
    mossdeepCitySpaceCenter2f,
} from '@/lib/data/emerald/maps';
import {
    GEN_3_TRUE_DOUBLE_HEIGHT,
    GEN_3_TRUE_DOUBLE_WIDTH,
} from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MOSSDEEP_CITY: Location = {
    name: 'Mossdeep City',
    subareas: [
        {
            name: 'City',
            map: mossdeepCity,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mossdeep-city-area',
            methodSplits: [
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Route 125',
                    width: 528,
                    x: 45.63,
                    y: 1.25,
                },
                {
                    height: 16,
                    location: 'Mossdeep Gym',
                    width: 16,
                    x: 48.13,
                    y: 23.75,
                },
                {
                    height: 16,
                    location: 'Mossdeep City',
                    subarea: 'Space Center 1F',
                    width: 16,
                    x: 80.63,
                    y: 38.75,
                },
                {
                    height: 448,
                    location: 'Route 124',
                    width: 16,
                    x: 0.63,
                    y: 50,
                },
                {
                    height: 16,
                    location: 'Route 127',
                    width: 160,
                    x: 37.5,
                    y: 98.75,
                },
            ],
        },
        {
            name: 'Space Center 1F',
            map: mossdeepCitySpaceCenter1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-mossdeep-space-center-1',
                    x: 71.88,
                    y: 63.44,
                },
                {
                    battleKey: 'team-magma-grunt-m-mossdeep-space-center-2',
                    x: 84.38,
                    y: 23.44,
                },
                {
                    battleKey: 'team-magma-grunt-f-mossdeep-space-center-3',
                    x: 78.13,
                    y: 93.44,
                },
                {
                    battleKey: 'team-magma-grunt-m-mossdeep-space-center-4',
                    x: 65.63,
                    y: 23.44,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mossdeep City',
                    subarea: 'Space Center 2F',
                    width: 16,
                    x: 84.38,
                    y: 15,
                },
                {
                    height: 16,
                    location: 'Mossdeep City',
                    subarea: 'City',
                    width: 32,
                    x: 50,
                    y: 95,
                },
            ],
        },
        {
            name: 'Space Center 2F',
            map: mossdeepCitySpaceCenter2f,
            mapAnchor: MapAnchor.Center,
            tagPartner: [
                { battleKey: 'pkmn-trainer-steven-mossdeep-space-center-tag' },
            ],
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-mossdeep-space-center-2f',
                    customHeight: GEN_3_TRUE_DOUBLE_HEIGHT,
                    customWidth: 52,
                    x: 84.38,
                    y: 28.44,
                },
                {
                    battleKey: 'magma-leader-maxie-mossdeep-space-center',
                    customHeight: GEN_3_TRUE_DOUBLE_HEIGHT,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 6.25,
                    y: 88.44,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mossdeep City',
                    subarea: 'Space Center 1F',
                    width: 16,
                    x: 84.38,
                    y: 15,
                },
            ],
        },
    ],
};

export default MOSSDEEP_CITY;
