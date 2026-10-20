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
        },
        {
            name: 'Space Center 2F',
            map: mossdeepCitySpaceCenter2f,
            mapAnchor: MapAnchor.Center,
            tagPartner: [
                { battleKey: 'champion-steven-mossdeep-space-center-tag' },
            ],
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-mossdeep-space-center-5',
                    x: 84.38,
                    y: 33.44,
                },
                {
                    battleKey: 'team-magma-grunt-m-mossdeep-space-center-6',
                    x: 78.13,
                    y: 23.44,
                },
                {
                    battleKey: 'team-magma-grunt-m-mossdeep-space-center-7',
                    x: 90.63,
                    y: 23.44,
                },
                {
                    battleKey: 'magma-leader-maxie-mossdeep-space-center',
                    customHeight: GEN_3_TRUE_DOUBLE_HEIGHT,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 6.25,
                    y: 88.44,
                },
            ],
        },
    ],
};

export default MOSSDEEP_CITY;
